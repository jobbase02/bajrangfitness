// app/api/inquire/route.ts
import { NextResponse } from 'next/server';
import { Ratelimit } from '@upstash/ratelimit';
import { Redis } from '@upstash/redis';

// Create a ratelimiter, max 5 inquiries per 24 hours
const ratelimit = new Ratelimit({
  redis: Redis.fromEnv(),
  limiter: Ratelimit.slidingWindow(3, '24 h'),
  analytics: true,
});

export async function POST(req: Request) {
  try {
    const ip = req.headers.get("x-forwarded-for") ?? req.headers.get("x-real-ip") ?? "anonymous";
    const { success } = await ratelimit.limit(`inquire_${ip}`);

    if (!success) {
      return NextResponse.json({ error: "Too many inquiries. Please try again tomorrow." }, { status: 429 });
    }

    // 1. Frontend se data receive karo
    const data = await req.json();

    // Basic payload validation
    if (!data || !data.name || !data.phone) {
      return NextResponse.json({ error: "Missing required fields: Name and Phone are required." }, { status: 400 });
    }

    // 2. Data ke andar apna secret password (jo .env mein hai) attach karo
    const securePayload = {
      ...data,
      secretKey: process.env.APPS_SCRIPT_SECRET
    };

    // 3. Google Apps Script ko securely data bhejo
    const response = await fetch(process.env.GOOGLE_APPS_SCRIPT_URL!, {
      method: 'POST',
      body: JSON.stringify(securePayload),
      headers: { 'Content-Type': 'application/json' },
    });

    const result = await response.json();

    // 4. Response check karo
    if (result.status === 'success') {
      return NextResponse.json({ message: "Success" }, { status: 200 });
    } else {
      throw new Error(result.message || "Apps Script failed");
    }

  } catch (error) {
    console.error("Backend API Error:", error);
    return NextResponse.json({ error: "Failed to submit form" }, { status: 500 });
  }
}