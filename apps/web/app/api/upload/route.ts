import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // TODO: handle upload to S3
  return NextResponse.json({ ok: true })
}
