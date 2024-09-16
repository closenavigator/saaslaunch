const { PrismaClient } = require('@prisma/client')

const prisma = new PrismaClient()

async function main() {
  try {
    // Attempt to query the user table
    const userCount = await prisma.user.count()
    console.log('Database connection successful. User count:', userCount)
  } catch (error) {
    console.error('Failed to connect to the database:', error)
  } finally {
    await prisma.$disconnect()
  }
}

main()