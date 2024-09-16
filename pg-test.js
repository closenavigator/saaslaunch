const { Client } = require('pg')

const client = new Client({
  connectionString: process.env.DATABASE_URL
})

async function main() {
  try {
    await client.connect()
    const result = await client.query('SELECT NOW()')
    console.log('Database connection successful. Current time:', result.rows[0].now)
  } catch (error) {
    console.error('Failed to connect to the database:', error)
  } finally {
    await client.end()
  }
}

main()