import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'
import { supabase } from '@/lib/supabase'

export async function GET() {
  // Use Prisma to query the database
  const users = await prisma.user.findMany()

  // Use Supabase for authentication (example)
  const { data: { user } } = await supabase.auth.getUser()

  return NextResponse.json({ users, currentUser: user })
}