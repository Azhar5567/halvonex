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
      website,
      numTechnicians,
      businessChallenge,
      preferredTime,
    } = body ?? {};

    if (!fullName?.trim() || !businessName?.trim() || !businessEmail?.trim() || !phoneNumber?.trim()) {
      return NextResponse.json(
        { error: "Missing required consultation fields." },
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
      type: "consultation",
      fullName: String(fullName).trim(),
      businessName: String(businessName).trim(),
      businessEmail: String(businessEmail).trim(),
      phoneNumber: String(phoneNumber).trim(),
      website: website ? String(website).trim() : undefined,
      numTechnicians: numTechnicians ? String(numTechnicians) : undefined,
      businessChallenge: businessChallenge ? String(businessChallenge) : undefined,
      preferredTime: preferredTime ? String(preferredTime) : undefined,
      submittedAt: new Date().toISOString(),
    });

    return NextResponse.json({ ok: true, ...result }, { status: 200 });
  } catch (err) {
    const message = err instanceof Error ? err.message : "Failed to process consultation request.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
