const { Client } = require('pg')

const client = new Client({
  connectionString: 'postgresql://postgres.rglzklbpjprfwlvrfoip:D4Cq4llSDSIqkrLE@aws-0-us-east-1.pooler.supabase.com:6543/postgres'
})

async function testConnection() {
  try {
    await client.connect()
    const result = await client.query('SELECT NOW()')
    console.log('Connection successful. Current time:', result.rows[0].now)
  } catch (err) {
    console.error('Connection error:', err)
  } finally {
    await client.end()
  }
}

testConnection()