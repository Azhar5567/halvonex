export interface LeadPayload {
  type: "consultation" | "contact";
  fullName: string;
  businessName: string;
  businessEmail: string;
  phoneNumber: string;
  website?: string;
  numTechnicians?: string;
  businessChallenge?: string;
  preferredTime?: string;
  topic?: string;
  message?: string;
  submittedAt: string;
}

export interface DeliveryResult {
  delivered: boolean;
  mode: "live" | "preview";
  channels: string[];
}

/**
 * Dispatches validated lead payloads to configured production integrations
 * (Resend email API and/or a custom CRM webhook). Never claims live delivery
 * when no external integration is configured.
 */
export async function dispatchLead(payload: LeadPayload): Promise<DeliveryResult> {
  const channels: string[] = [];
  const webhookUrl = process.env.LEAD_WEBHOOK_URL;
  const resendKey = process.env.RESEND_API_KEY;
  const notifyEmail = process.env.LEAD_NOTIFY_EMAIL || "azhar@halvonex.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "Halvonex <onboarding@resend.dev>";

  if (webhookUrl) {
    const res = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });
    if (!res.ok) {
      throw new Error(`Webhook delivery failed with status ${res.status}`);
    }
    channels.push("webhook");
  }

  if (resendKey) {
    const subject =
      payload.type === "consultation"
        ? `New HVAC Consultation Request: ${payload.businessName}`
        : `New Halvonex Inquiry: ${payload.businessName}`;

    const summaryLines = [
      `Type: ${payload.type}`,
      `Name: ${payload.fullName}`,
      `Business: ${payload.businessName}`,
      `Email: ${payload.businessEmail}`,
      `Phone: ${payload.phoneNumber}`,
      payload.website ? `Website: ${payload.website}` : null,
      payload.numTechnicians ? `Technicians: ${payload.numTechnicians}` : null,
      payload.businessChallenge ? `Objective: ${payload.businessChallenge}` : null,
      payload.preferredTime ? `Preferred Time: ${payload.preferredTime}` : null,
      payload.topic ? `Topic: ${payload.topic}` : null,
      payload.message ? `Message: ${payload.message}` : null,
      `Submitted At: ${payload.submittedAt}`,
    ]
      .filter(Boolean)
      .join("\n");

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${resendKey}`,
      },
      body: JSON.stringify({
        from: fromEmail,
        to: [notifyEmail],
        reply_to: payload.businessEmail,
        subject,
        text: summaryLines,
      }),
    });

    if (!res.ok) {
      throw new Error(`Email delivery failed with status ${res.status}`);
    }
    channels.push("email");
  }

  return {
    delivered: channels.length > 0,
    mode: channels.length > 0 ? "live" : "preview",
    channels,
  };
}
