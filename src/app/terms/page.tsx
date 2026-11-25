import React from "react";

export const metadata = {
  title: "Terms of Service | Halvonex",
  description:
    "Terms of Service governing the use of halvonex.com and Halvonex AI receptionist, lead capture, and appointment-booking services.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div className="border-b border-surface-border pb-6">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
            Legal &bull; Effective November 2026
          </p>
          <h1 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-3 text-sm text-slate-600 leading-relaxed">
            These Terms of Service (&ldquo;Terms&rdquo;) govern your access to halvonex.com and any AI automation, receptionist, lead-capture, or appointment-booking services (&ldquo;Services&rdquo;) provided by Halvonex (&ldquo;Halvonex&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;). By using our website or engaging our Services, you agree to these Terms.
          </p>
        </div>

        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">1. Nature of Services</h2>
            <p>
              Halvonex builds, configures, deploys, and manages automated AI voice reception, lead-capture, and calendar-booking workflows for commercial businesses (&ldquo;Client&rdquo;). Halvonex is a technology service provider—we are not a licensed HVAC contractor, emergency dispatch center, or legal/compliance advisor.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">2. No Emergency or Life-Safety Dispatch</h2>
            <p>
              <strong>IMPORTANT:</strong> Halvonex is designed strictly for lead capture, customer intake, and appointment scheduling. Halvonex is <strong>not</strong> a 911 service, public safety answering point (PSAP), or emergency dispatch system. You must not rely on Halvonex to handle life-threatening emergencies, fires, carbon monoxide alarms, gas leaks, or urgent safety hazards. Halvonex assumes no liability for delays or failures in emergency response.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">3. Client Responsibilities &amp; Regulatory Compliance</h2>
            <ul className="list-disc pl-5 space-y-1.5">
              <li>
                <strong>Accurate Rules:</strong> Client is responsible for providing and maintaining accurate business hours, service territories, pricing policies, and calendar availability rules.
              </li>
              <li>
                <strong>Telecom &amp; Call Recording Compliance:</strong> Client is solely responsible for ensuring that its call-recording disclosures, automated voice greetings, and follow-up SMS notifications comply with all applicable federal and state laws, including the Telephone Consumer Protection Act (TCPA) and state wiretapping/two-party consent statutes.
              </li>
              <li>
                <strong>Lead Verification:</strong> Client is responsible for reviewing captured leads and confirming scheduled appointments within its own CRM or calendar.
              </li>
            </ul>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">4. AI &amp; Third-Party Dependency Disclaimers</h2>
            <p>
              Our Services rely on third-party telecommunications networks, AI speech models, and Client CRM/calendar APIs. Because automated speech recognition can be affected by caller accents, background noise, or poor cellular reception, Halvonex does not guarantee 100% transcription accuracy or uninterrupted telecom uptime. Halvonex also makes no guarantee of specific lead volume, appointment conversion rates, or revenue outcomes.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">5. Fees, Billing &amp; Cancellation</h2>
            <p>
              Fees for custom implementation and ongoing managed services are governed by your applicable service proposal or invoice. Setup fees are non-refundable once engineering work begins. Either party may terminate ongoing monthly services with prior written notice as stated in your service agreement; Halvonex reserves the right to suspend Services for overdue balances.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">6. Intellectual Property</h2>
            <p>
              Halvonex retains all rights, title, and interest in its underlying automation workflows, prompt architectures, integration code, and website content. Client retains full ownership of its business data, customer contact lists, and inbound lead records.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">7. Disclaimer of Warranties</h2>
            <p className="uppercase text-xs font-mono text-slate-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, THE WEBSITE AND ALL SERVICES ARE PROVIDED &ldquo;AS IS&rdquo; AND &ldquo;AS AVAILABLE&rdquo; WITHOUT WARRANTIES OF ANY KIND, WHETHER EXPRESS, IMPLIED, OR STATUTORY, INCLUDING IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">8. Limitation of Liability</h2>
            <p className="uppercase text-xs font-mono text-slate-600 leading-relaxed">
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL HALVONEX BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE DAMAGES, OR ANY LOSS OF PROFITS, REVENUE, MISSED JOBS, OR DATA, ARISING OUT OF OR RELATED TO THESE TERMS OR THE SERVICES. HALVONEX&apos;S TOTAL AGGREGATE LIABILITY FOR ANY CLAIM SHALL NOT EXCEED THE TOTAL FEES ACTUALLY PAID BY CLIENT TO HALVONEX IN THE THREE (3) MONTHS PRECEDING THE EVENT GIVING RISE TO THE CLAIM.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">9. Indemnification</h2>
            <p>
              Client agrees to indemnify, defend, and hold harmless Halvonex from any third-party claims, damages, fines, or legal fees arising out of (a) Client&apos;s failure to obtain required call-recording or SMS consent, (b) Client&apos;s HVAC field services or workmanship, or (c) Client&apos;s breach of these Terms.
            </p>
          </section>

          <section className="space-y-2.5">
            <h2 className="text-lg font-bold text-slate-900">10. Governing Law &amp; Contact</h2>
            <p>
              These Terms are governed by the laws of the State of Delaware, United States, without regard to conflict-of-law rules. For questions regarding these Terms, contact:
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
