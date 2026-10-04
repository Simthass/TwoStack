import { NextRequest, NextResponse } from "next/server";

export const runtime = "nodejs";

const clean = (value: unknown, max: number) => typeof value === "string" ? value.trim().slice(0, max) : "";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: NextRequest) {
  const origin = request.headers.get("origin");
  if (origin && origin !== request.nextUrl.origin && origin !== "https://www.twostack.lk") {
    return NextResponse.json({ error: "Invalid origin." }, { status: 403 });
  }
  if (Number(request.headers.get("content-length") || 0) > 12_000) {
    return NextResponse.json({ error: "Request too large." }, { status: 413 });
  }
  let input: Record<string, unknown>;
  try {
    const raw = await request.text();
    if (raw.length > 12_000) return NextResponse.json({ error: "Request too large." }, { status: 413 });
    const parsed: unknown = JSON.parse(raw);
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) throw new Error("Invalid request");
    input = parsed as Record<string, unknown>;
  } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (clean(input.website, 200)) return NextResponse.json({ ok: true }); // honeypot

  const name = clean(input.name, 100);
  const email = clean(input.email, 254);
  const phone = clean(input.phone, 40);
  const company = clean(input.company, 120);
  const message = clean(input.message, 4000);
  const source = clean(input.source, 500);
  const services = Array.isArray(input.services) ? input.services.map((value) => clean(value, 100)).filter(Boolean).slice(0, 8) : [];
  if (name.length < 2 || !emailPattern.test(email) || message.length < 10) {
    return NextResponse.json({ error: "Please enter your name, a valid email and at least 10 characters about your project." }, { status: 400 });
  }
  const key = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_FROM_EMAIL;
  const to = process.env.CONTACT_TO_EMAIL;
  if (!key || !from || !to) {
    console.error("Contact delivery is not configured.");
    return NextResponse.json({ error: "Email delivery is temporarily unavailable. Please contact us by WhatsApp or email." }, { status: 503 });
  }
  const text = ["New TwoStack project enquiry", "", `Name: ${name}`, `Email: ${email}`, `Phone: ${phone || "Not provided"}`, `Company: ${company || "Not provided"}`, `Services: ${services.join(", ") || "Not specified"}`, `Source: ${source || "Not provided"}`, "", "Project:", message].join("\n");
  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({ from, to: [to], reply_to: email, subject: `TwoStack enquiry: ${name}`, text }),
      cache: "no-store",
    });
    if (!response.ok) {
      console.error("Contact delivery failed with provider status", response.status);
      return NextResponse.json({ error: "We could not deliver your message. Please use WhatsApp or email." }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "We could not deliver your message. Please use WhatsApp or email." }, { status: 502 });
  }
}
