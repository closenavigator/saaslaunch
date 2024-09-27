import { NextResponse } from 'next/server'

export async function GET() {
  // Handle GET request
  return NextResponse.json({ message: 'Hello from the API' })
}

export async function POST(request: Request) {
  // Handle POST request
  const body = await request.json()
  return NextResponse.json({ message: 'Data received' }, { status: 201 })
}