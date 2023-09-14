import { NextResponse } from 'next/server'

export async function GET() {
  return NextResponse.json("Welcome to the most amazing API in the world!")
}