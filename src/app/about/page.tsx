import React from "react";
import Link from "next/link";
import { ShieldCheck, Target, HeartHandshake, ArrowRight, Wrench, Building2, Activity } from "lucide-react";

export const metadata = {
  title: "About Halvonex | AI Automation Services for HVAC Companies",
  description:
    "Halvonex is an AI automation agency and technology partner. We build, configure, deploy, and manage AI receptionist systems for service businesses.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Header */}
      <section className="pt-16 pb-20 bg-surface-light border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-surface-border text-navy-900 mb-4 shadow-xs">
            <span>Professional Technology Services</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-3xl">
            Technology should make running a business easier.
          </h1>
          <p className="mt-5 text-lg text-muted-dark leading-relaxed max-w-2xl">
            Halvonex is an AI automation agency. We build, deploy, integrate, and continuously manage automated phone reception and lead capture systems for HVAC companies.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Mission */}
      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="space-y-6 text-base sm:text-lg text-muted-dark leading-relaxed">
            <h2 className="text-2xl sm:text-3xl font-bold text-navy-900 tracking-tight">
              An agency approach to business automation
            </h2>
            <p>
              In trade and home service industries, the phone remains the lifeblood of customer acquisition and emergency response. When an air conditioner fails in mid-July or a commercial furnace stops running in freezing weather, customers call. If nobody answers, they immediately call the next contractor on the list.
            </p>
            <p>
              Many software companies attempt to sell HVAC owners self-service AI platforms or generic chatbot builders. But HVAC contractors are busy managing technicians, parts inventories, and daily operations. They don’t have the time or interest to become software administrators, learn prompt engineering, or troubleshoot webhook failures.
            </p>
            <p>
              Halvonex bridges this gap. We are an <strong>AI automation service company</strong>. We act as your dedicated technical partner: we understand your business model, build your voice receptionist, connect your calendar and CRM, and maintain system accuracy on an ongoing basis.
            </p>
          </div>

          {/* Operating Principles */}
          <div className="pt-8 border-t border-surface-border">
            <h3 className="text-xl font-bold text-navy-900 mb-8">
              Our core commitments as your technical partner
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 rounded-xl bg-surface-light border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                  <Wrench className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 text-base">We Do the Heavy Lifting</h4>
                <p className="text-xs text-muted-dark leading-relaxed">
                  We handle the setup, carrier connections, CRM mapping, and scenario testing. Your team doesn&apos;t have to touch code or software settings.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-surface-light border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 text-base">Respect Existing Operations</h4>
                <p className="text-xs text-muted-dark leading-relaxed">
                  You keep your current phone numbers, your existing dispatch team, and your field service software. We fit into your workflow.
                </p>
              </div>

              <div className="p-6 rounded-xl bg-surface-light border border-surface-border space-y-3">
                <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                  <Activity className="w-5 h-5" />
                </div>
                <h4 className="font-bold text-navy-900 text-base">Ongoing Management</h4>
                <p className="text-xs text-muted-dark leading-relaxed">
                  We don’t walk away after launch. We monitor call performance, audit transcripts, and tune responses as your service offerings evolve.
                </p>
              </div>
            </div>
          </div>

          {/* Contact Consultation Notice */}
          <div className="p-8 rounded-2xl bg-surface-subtle border border-surface-border space-y-4">
            <h3 className="text-lg font-bold text-navy-900">
              Ready to explore an automation partnership?
            </h3>
            <p className="text-sm text-muted-dark leading-relaxed">
              We work with residential and commercial HVAC contractors throughout the United States. If your company is ready to eliminate unanswered calls and improve dispatch response times, we invite you to schedule a consultation with our engineering team.
            </p>
            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-brand-blue hover:text-brand-hover"
              >
                <span>Book a Free Consultation with Halvonex</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
