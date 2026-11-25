import { NextResponse } from "next/server";
import { dispatchLead } from "@/lib/leadDelivery";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      fullName,
      businessName,
      businessEmail,
      phoneNumber,
      technicians,
      topic,
      message,
    } = body ?? {};

    if (
      !fullName?.trim() ||
      !businessName?.trim() ||
      !businessEmail?.trim() ||
      !phoneNumber?.trim() ||
      !message?.trim()
    ) {
      return NextResponse.json(
        { error: "Missing required contact fields." },
        { status: 400 }
      );
    }

    const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(String(businessEmail));
    if (!emailValid) {
      return NextResponse.json(
        { error: "Invalid business email address." },
        { status: 400 }
      );
    }

    const digits = String(phoneNumber).replace(/\D/g, "");
    if (digits.length < 10) {
      return NextResponse.json(
        { error: "Please provide a valid 10-digit phone number." },
        { status: 400 }
      );
    }

    const result = await dispatchLead({
      type: "contact",
      fullName: String(fullName).trim(),
      businessName: String(businessName).trim(),
      businessEmail: String(businessEmail).trim(),
      phoneNumber: String(phoneNumber).trim(),
      numTechnicians: technicians ? String(technicians) : undefined,
      topic: topic ? String(topic) : undefined,
      message: String(message).trim(),
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, ...result }, { status: 200 });
  } catch (err) {
    const msg = err instanceof Error ? err.message : "Failed to process contact request.";
    return NextResponse.json({ error: msg }, { status: 500 });
  }
}
