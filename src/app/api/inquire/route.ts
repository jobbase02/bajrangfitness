// app/api/inquire/route.ts
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    // 1. Frontend se data receive karo
    const data = await req.json();

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