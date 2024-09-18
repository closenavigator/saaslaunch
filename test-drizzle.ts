import { db, pool } from './lib/drizzle';
import { user, payments } from './schema';

async function main() {
  try {
    const allUsers = await db.select().from(user);
    console.log('Users:', allUsers);

    const allPayments = await db.select().from(payments);
    console.log('Payments:', allPayments);
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await pool.end();
  }
}

main();