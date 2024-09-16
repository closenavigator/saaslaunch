require('dotenv').config();
const { Client } = require('pg');

console.log('DATABASE_URL:', process.env.DATABASE_URL);

const client = new Client({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false
  }
});

async function testConnection() {
  try {
    await client.connect();
    const result = await client.query('SELECT NOW()');
    console.log('Connection successful. Current time:', result.rows[0].now);
  } catch (err) {
    console.error('Connection error:', err);
  } finally {
    await client.end();
  }
}

testConnection();