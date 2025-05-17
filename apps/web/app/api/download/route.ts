import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  // TODO: return signed S3 URL
  return NextResponse.json({ url: 'https://example.com/video.mp4' })
}
