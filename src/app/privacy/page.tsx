import React from "react";

export const metadata = {
  title: "Privacy Policy | Halvonex",
  description:
    "Privacy Policy explaining how Halvonex collects, processes, and protects website, client, and telephony intake data.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-surface-border pb-6">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
            Legal &bull; Effective November 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            This Privacy Policy describes how Halvonex (&ldquo;Halvonex&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) collects, uses, processes, and protects information when you visit halvonex.com, submit an inquiry, or use our managed AI receptionist and lead-capture automation services.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">1. Our Role: Service Provider vs. Data Controller</h2>
            <p>
              Halvonex provides business-to-business AI automation services to heating, ventilation, and air conditioning (&ldquo;HVAC&rdquo;) and mechanical contractors (&ldquo;Clients&rdquo;). When you submit a form on halvonex.com, Halvonex acts as the controller of your business contact details. When Halvonex processes inbound phone calls, recordings, transcripts, and appointment requests on behalf of a Client, the Client is the data controller and Halvonex acts strictly as a service provider processing that information solely on the Client&apos;s instructions.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">2. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Website &amp; Inquiry Information:</strong> When you fill out our contact form or communicate with us, we collect your name, business name, work email address, phone number, and message contents.
              </li>
              <li>
                <strong>Client Onboarding &amp; Configuration Data:</strong> Business hours, service territories, calendar availability rules, CRM integration credentials, and script preferences provided by Clients.
              </li>
              <li>
                <strong>Telephony &amp; Lead Intake Data (Processed for Clients):</strong> Caller phone numbers, caller-provided names, service street addresses, HVAC service needs, appointment preferences, call audio, and AI-generated call transcripts.
              </li>
              <li>
                <strong>Technical &amp; Usage Logs:</strong> Standard server logs, IP addresses, browser types, and API status metadata needed to maintain security and uptime.
              </li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">3. How We Use Information</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To respond to business inquiries and deliver requested consultations.</li>
              <li>To configure, operate, monitor, and maintain AI receptionist, lead-capture, and appointment-booking workflows for Clients.</li>
              <li>To sync structured lead records and appointment confirmations into Client calendars and CRM platforms.</li>
              <li>To troubleshoot technical issues, prevent fraud or abuse, and comply with applicable legal obligations.</li>
            </ul>
            <p>
              <strong>No Sale of Personal Data:</strong> Halvonex does not sell, rent, or trade personal information, caller phone numbers, or audio recordings to third-party advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">4. Call Recording &amp; State Consent Compliance</h2>
            <p>
              Certain U.S. states require two-party or all-party consent before a phone call may be recorded or transcribed. Each Client is solely responsible for ensuring that its call greetings, disclosures, and use of Halvonex&apos;s call-recording and transcription features comply with all federal and state laws applicable to its service territory.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">5. Third-Party Infrastructure &amp; Subprocessors</h2>
            <p>
              To deliver our services, Halvonex relies on vetted enterprise cloud hosting, telecommunications, AI voice synthesis/transcription, email delivery, and Client-authorized CRM/calendar providers. All data transmitted between systems is encrypted in transit using industry-standard TLS encryption.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">6. Data Retention &amp; Security</h2>
            <p>
              We retain website inquiry records and Client service logs only as long as necessary to fulfill business purposes, maintain active Client integrations, or satisfy legal obligations. While we implement reasonable administrative and technical safeguards, no internet or telecommunications transmission is 100% immune from security risks.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">7. Your Privacy Rights</h2>
            <p>
              Depending on your U.S. state of residence, you may have the right to request access to, correction of, or deletion of personal information we hold about you. If your inquiry relates to a call you placed to one of our HVAC Clients, please contact that business directly (or contact us so we can route your request to the appropriate Client controller).
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">8. Children&apos;s Privacy</h2>
            <p>
              Our website and services are strictly intended for business operations and adults (18+). We do not knowingly collect personal information from individuals under 18 years of age.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">9. Changes &amp; Contact Information</h2>
            <p>
              We may update this Privacy Policy from time to time by posting a revised version with an updated effective date. For privacy questions or requests, contact us at:
            </p>
            <p className="font-mono text-xs text-slate-800 bg-surface-subtle p-4 rounded-xl border border-surface-border">
              Halvonex &bull; United States<br />
              Email: hello@halvonex.com<br />
              Phone: +1 (405) 648-8273
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
