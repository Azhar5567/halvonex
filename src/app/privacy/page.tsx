import React from "react";
import Link from "next/link";
import { AlertCircle, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Privacy Policy (Draft for Legal Review) | Halvonex",
  description:
    "Privacy policy and data governance practices for Halvonex AI receptionist and telephony intake systems.",
};

export default function PrivacyPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Draft for Legal Review &bull; Updated November 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-muted">
            This document outlines how Halvonex Inc. (&ldquo;Halvonex&rdquo;, &ldquo;we&rdquo;, &ldquo;our&rdquo;) processes and protects information captured through our voice intake and software systems.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-muted-dark space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">1. Information We Collect</h2>
            <p>
              When an HVAC contractor integrates Halvonex into their phone system, Halvonex processes incoming telephony audio and transcription data on behalf of the customer (&ldquo;Customer&rdquo; or &ldquo;Business&rdquo;). This information may include:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>Caller contact details: Full name, phone number, and physical service address.</li>
              <li>Service request specifics: HVAC equipment type, symptom description, property classification, and scheduling availability.</li>
              <li>Voice recordings and transcriptions: Captured to qualify opportunities and sync structured notes to the Business’s CRM.</li>
              <li>Business account data: Administrative login credentials, billing details, and API configuration tokens.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">2. How We Use Information</h2>
            <p>
              We process information strictly to provide, maintain, and optimize our telephony and lead intake automation. Specifically:
            </p>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>To route and transcribe incoming calls in real time.</li>
              <li>To schedule service appointments within your designated dispatch calendars.</li>
              <li>To deliver dispatch notifications and work order payloads to your connected field management software.</li>
              <li>To send automated appointment confirmation and follow-up text messages to consenting callers.</li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">3. Telephony & Audio Data Retention</h2>
            <p>
              Audio recordings and conversational transcripts are retained exclusively to support the Business&apos;s customer service records and quality control. Halvonex does not sell caller data, audio recordings, or contact numbers to third-party advertisers or data brokers.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">4. Third-Party Integrations & Service Providers</h2>
            <p>
              Halvonex interacts with trusted enterprise telecommunications carriers, cloud infrastructure providers, and field service platforms under strict data protection standards. Data transmitted via APIs is encrypted in transit using industry-standard TLS 1.3 encryption.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">5. Business Inquiries & Data Rights</h2>
            <p>
              Business customers and individual callers may request access to, correction of, or deletion of their stored contact records at any time by contacting our privacy desk at <a href="mailto:privacy@halvonex.com" className="text-brand-blue underline">privacy@halvonex.com</a>.
            </p>
          </section>

          <div className="pt-6 border-t border-surface-border text-xs text-muted">
            <p>
              Note: This document is a draft operational policy prepared for platform demonstration. Prior to commercial public launch, Halvonex conducts formalized legal review with qualified US regulatory counsel.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
