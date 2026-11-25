import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  UserCheck,
  CalendarCheck,
  Database,
  PhoneForwarded,
  Activity,
  ArrowRight,
  ShieldCheck,
  CheckCircle2,
  Wrench,
  Radio,
  Settings,
  MessageSquare,
  Clock,
  BellRing,
} from "lucide-react";

export const metadata = {
  title: "Managed Services | Custom AI Automation for HVAC Companies",
  description:
    "Halvonex builds, deploys, and manages turnkey AI phone answering, lead qualification, CRM integration, and appointment booking automation for HVAC businesses.",
};

export default function ServicesPage() {
  const serviceList = [
    {
      id: "receptionist",
      title: "1. AI Receptionist Implementation",
      icon: PhoneCall,
      summary: "Custom voice agent development tailored to your HVAC business rules",
      description:
        "We engineer a conversational AI receptionist from scratch, configured to represent your business with exceptional professionalism. The receptionist is trained on HVAC trade terminology, equipment categories, common failure symptoms, emergency safety protocols, and your specific service territory.",
      deliverables: [
        "Custom scripted voice greetings with your exact company name and branding",
        "HVAC intake questions (heat pumps, furnaces, AC units, system age)",
        "Residential vs. commercial lead qualification rules",
        "Priority tagging for urgent same-day repair vs. routine tune-ups",
      ],
    },
    {
      id: "call-automation",
      title: "2. Incoming Call Automation",
      icon: Radio,
      summary: "24/7 lead capture with zero busy signals",
      description:
        "We configure reliable 24/7/365 call answering, after-hours coverage, or daytime overflow when your office staff is occupied—ensuring every incoming customer opportunity is answered on Ring 1.",
      deliverables: [
        "24/7, after-hours, and peak overflow call routing",
        "Ring 1 live voice answering with zero hold delays",
        "Unlimited simultaneous call handling (no busy signals during seasonal surges)",
        "Instant lead notifications and call summaries sent to your team",
      ],
    },
    {
      id: "lead-crm",
      title: "3. Lead Capture & CRM Integration",
      icon: Database,
      summary: "Direct field service synchronization with zero double-data entry",
      description:
        "We build secure API and webhook pipelines connecting the AI receptionist to your existing CRM and field service management software. Every conversation generates a complete customer record and detailed dispatch ticket.",
      deliverables: [
        "Automatic contact creation with verified phone and street address",
        "Full conversation transcription and diagnostic summary notes",
        "Secure storage of call audio recording link in CRM ticket",
        "Automated dispatcher email and SMS notifications upon call completion",
      ],
    },
    {
      id: "appointment-booking",
      title: "4. Appointment Booking Automation",
      icon: CalendarCheck,
      summary: "Real-time dispatch calendar booking during live phone calls",
      description:
        "We connect to your technician calendars to enable live scheduling during the phone call. The receptionist reads real-time technician availability, offers acceptable arrival windows, reserves the time slot, and dispatches automated SMS confirmations.",
      deliverables: [
        "Real-time schedule lookup across technician rosters and zones",
        "Customizable buffer rules to maintain route density and avoid travel delays",
        "Immediate customer SMS confirmation with company name and booking window",
        "Instant sync with Google Calendar, Outlook, or field dispatch boards",
      ],
    },
    {
      id: "missed-call",
      title: "5. Missed-Call Follow-up Systems",
      icon: PhoneForwarded,
      summary: "Instant automated SMS re-engagement for abandoned calls",
      description:
        "Homeowners who disconnect prematurely during peak seasons often dial competitors immediately. We implement proactive SMS follow-up workflows that trigger within seconds of an abandoned call, keeping the lead warm and capturing their service requirements via two-way messaging.",
      deliverables: [
        "Automated text sent under 15 seconds after an abandoned ring",
        "Two-way SMS intake sequence to capture address and service issue",
        "Direct link for the customer to confirm an appointment slot",
        "Dispatcher alert notifying office staff of an active SMS lead",
      ],
    },
    {
      id: "ongoing-support",
      title: "6. Ongoing System Maintenance & Support",
      icon: Activity,
      summary: "Continuous monitoring, prompt tuning, and technical management",
      description:
        "Halvonex is your ongoing technical partner. You never have to worry about broken webhooks, API version shifts, or system maintenance. We continuously audit conversation transcripts, tune prompt accuracy, and adapt your system as your company grows.",
      deliverables: [
        "Weekly call transcript audits and accuracy checks",
        "Prompt tuning for new seasonal promotions or service changes",
        "Carrier connection health monitoring and uptime oversight",
        "Priority technical support and quarterly workflow reviews",
      ],
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-16 pb-20 bg-surface-light border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-blue mb-4">
            <Wrench className="w-3.5 h-3.5" />
            <span>Turnkey Managed Automation</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight max-w-4xl">
            Our Managed AI Automation Services
          </h1>
          <p className="mt-5 text-lg text-muted-dark leading-relaxed max-w-3xl">
            We don’t sell generic software subscriptions. We build, connect, and continuously manage custom AI receptionist systems for HVAC businesses across the United States.
          </p>
          <div className="mt-8 flex justify-start gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-brand-blue text-white hover:bg-brand-hover shadow-sm transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {serviceList.map((svc) => {
            const Icon = svc.icon;
            return (
              <div
                key={svc.id}
                id={svc.id}
                className="p-8 sm:p-10 rounded-2xl bg-surface-light border border-surface-border shadow-subtle scroll-mt-28 space-y-6"
              >
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-surface-border pb-5">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-navy-900 tracking-tight">
                        {svc.title}
                      </h2>
                      <p className="text-xs font-medium text-brand-blue mt-0.5">{svc.summary}</p>
                    </div>
                  </div>
                  <span className="text-xs font-semibold px-3 py-1 rounded-full bg-white border border-surface-border text-navy-900 shrink-0">
                    Fully Managed Service
                  </span>
                </div>

                <p className="text-sm sm:text-base text-muted-dark leading-relaxed">
                  {svc.description}
                </p>

                <div className="pt-2">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900 mb-3">
                    What We Engineer & Deliver:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-navy-900">
                    {svc.deliverables.map((item) => (
                      <div
                        key={item}
                        className="flex items-start gap-2.5 p-3 rounded-lg bg-white border border-surface-border"
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="leading-relaxed font-medium">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Agency Guarantee & Bottom CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <p className="text-xs font-semibold uppercase tracking-widest text-brand-blue">
            No Software Burden For Your Team
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Let us design and manage your HVAC intake system.
          </h2>
          <p className="text-base text-slate-300">
            Schedule a free 15-minute consultation. We’ll review your current phone volume and show you exactly what we can automate.
          </p>
          <div className="pt-2">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white text-navy-900 hover:bg-surface-subtle transition-all"
            >
              <span>Schedule Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-navy-900" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
