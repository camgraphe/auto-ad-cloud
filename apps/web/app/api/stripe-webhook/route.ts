import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  // TODO: verify Stripe signature and update user plan
  return NextResponse.json({ received: true })
}
