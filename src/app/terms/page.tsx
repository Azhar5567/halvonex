import React from "react";
import Link from "next/link";
import { AlertCircle } from "lucide-react";

export const metadata = {
  title: "Terms of Service (Draft for Legal Review) | Halvonex",
  description:
    "Commercial terms, service levels, and operational scope for the Halvonex AI receptionist and lead management system.",
};

export default function TermsPage() {
  return (
    <div className="py-16 sm:py-24 bg-white">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-800 border border-amber-200 mb-4">
            <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
            <span>Draft for Legal Review &bull; Updated November 2026</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-bold text-navy-900 tracking-tight">
            Terms of Service
          </h1>
          <p className="mt-2 text-sm text-muted">
            The following terms govern the provision of automated telephony, receptionist services, and CRM synchronization by Halvonex Inc.
          </p>
        </div>

        <div className="prose prose-slate max-w-none text-sm text-muted-dark space-y-6 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">1. Nature of the Service</h2>
            <p>
              Halvonex provides software-based telecommunication and conversational intake services intended to supplement customer service operations for licensed heating, ventilation, and air conditioning businesses. Halvonex is a technology service provider and is not a licensed trade contractor.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">2. Customer Responsibilities & Phone Forwarding</h2>
            <p>
              Customers are responsible for configuring call forwarding from their chosen carrier or PBX to their assigned Halvonex voice gateway number. Customers must maintain compliant business hours and ensure on-call emergency numbers are kept current within their account dashboard.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">3. Life-Safety & Emergency Disclaimers</h2>
            <p>
              While Halvonex includes configurable logic to detect critical issues (such as natural gas smells or carbon monoxide alarms) and initiate warm transfers to human personnel or prompt 911 contact, Halvonex is not an emergency response service (PSAP) and must not be used as the primary emergency dispatch infrastructure.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">4. Service Availability & Telephony Reliability</h2>
            <p>
              Halvonex utilizes carrier-grade telephony infrastructure with built-in redundancy across major US carrier trunks. However, voice call completion is subject to public telecommunication networks and carrier interconnection standards beyond our direct control.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-navy-900">5. Governing Law</h2>
            <p>
              These draft terms are governed by the laws of the State of Delaware, United States, without regard to conflict of law principles.
            </p>
          </section>

          <div className="pt-6 border-t border-surface-border text-xs text-muted">
            <p>
              For legal inquiries regarding licensing or master service agreements, contact <a href="mailto:legal@halvonex.com" className="text-brand-blue underline">legal@halvonex.com</a>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
