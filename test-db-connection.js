const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

async function checkTables() {
  try {
    await client.connect()
    const result = await client.query(`
      SELECT table_name 
      FROM information_schema.tables 
      WHERE table_schema = 'public'
    `)
    console.log('Tables in the database:', result.rows.map(row => row.table_name))
  } catch (err) {
    console.error('Error checking tables:', err)
  } finally {
    await client.end()
  }
}

checkTables()