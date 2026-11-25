import React from "react";
import { ContactForm } from "@/components/ContactForm";
import { Mail, Clock, ShieldCheck, PhoneCall, Calendar, MapPin } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "Contact Us | Halvonex AI Automation Agency",
  description:
    "Get in touch with the Halvonex team. Discuss custom AI phone receptionist implementation, phone carrier compatibility, or field software integration.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-16 pb-20 bg-surface-light border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-surface-border text-navy-900 mb-4 shadow-xs">
            <span>Direct Engineering Inquiries</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Contact our engineering team.
          </h1>
          <p className="mt-5 text-lg text-muted-dark leading-relaxed">
            Have questions about carrier forwarding, custom CRM workflows, or system architecture? Reach out and we’ll respond within one business day.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left Column: Direct Info */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
                  Let&apos;s discuss your phone operations
                </h2>
                <p className="text-sm text-muted-dark mt-2 leading-relaxed">
                  Whether you operate a 2-truck residential service company or a multi-location commercial mechanical contractor, we can help assess whether our managed automation services are the right fit.
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-light border border-surface-border">
                  <PhoneCall className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Phone</h4>
                    <p className="text-xs text-slate-600 mt-0.5">Call us directly during business hours:</p>
                    <a
                      href="tel:+14056488273"
                      className="text-xs font-semibold text-brand-cobalt hover:text-brand-hover mt-1 inline-block tabular-nums"
                    >
                      +1 (405) 648-8273
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-light border border-surface-border">
                  <MapPin className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Location</h4>
                    <p className="text-xs text-slate-600 mt-0.5">United States</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-light border border-surface-border">
                  <Mail className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-slate-900">Direct Inquiries</h4>
                    <p className="text-xs text-slate-600 mt-0.5">For agency partnerships and technical questions:</p>
                    <a
                      href="mailto:hello@halvonex.com"
                      className="text-xs font-semibold text-brand-cobalt hover:text-brand-hover mt-1 inline-block"
                    >
                      hello@halvonex.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5 p-4 rounded-xl bg-surface-light border border-surface-border">
                  <Clock className="w-5 h-5 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">Business Hours</h4>
                    <p className="text-xs text-muted mt-0.5">
                      Monday through Friday: 8:00 AM – 6:00 PM EST. Client systems and urgent forwarding inquiries are monitored 24/7.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-xl bg-surface-subtle border border-surface-border text-xs text-muted-dark space-y-2">
                <div className="flex items-center gap-2 font-semibold text-navy-900">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>Deployment Notice</span>
                </div>
                <p className="leading-relaxed">
                  Halvonex currently builds and manages automation systems for HVAC and mechanical contractors based in the United States. Telephony integrations require a US phone number and standard carrier call forwarding capabilities.
                </p>
              </div>
            </div>

            {/* Right Column: Contact Form */}
            <div className="lg:col-span-7">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
