import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  UserCheck,
  FileText,
  Database,
  BellRing,
  CalendarCheck,
  ArrowRight,
  CheckCircle2,
  Settings,
  Radio,
  TestTube2,
  Rocket,
  ShieldCheck,
  Search,
  Sliders,
  Activity,
} from "lucide-react";

export const metadata = {
  title: "Our Process | Discovery to Ongoing Support | Halvonex",
  description:
    "See our complete 6-stage agency delivery process (Discovery → Custom Setup → Integration → Testing → Launch → Ongoing Support) and caller workflow.",
};

export default function HowItWorksPage() {
  const processSteps = [
    {
      num: "01",
      name: "Discovery",
      tagline: "Evaluating your business requirements",
      description:
        "We review your historical call patterns, peak hour volumes, existing phone system, service territory zip codes, and field service management software.",
      deliverables: "Call flow audit, service territory definition, carrier compatibility check.",
      icon: Search,
    },
    {
      num: "02",
      name: "Custom Setup",
      tagline: "Engineering your voice receptionist",
      description:
        "Our engineers build and script your custom AI receptionist. We train it on your heating and AC services, diagnostic triage trees, property qualification logic, and emergency escalation protocols (gas leaks, freeze hazards).",
      deliverables: "Custom voice scripts, trade vocabulary training, emergency routing rules.",
      icon: Sliders,
    },
    {
      num: "03",
      name: "Integration",
      tagline: "Connecting your tools and telephony",
      description:
        "We configure conditional call forwarding on your existing business phone lines and build secure API/webhook connections into your CRM and dispatch calendars.",
      deliverables: "Carrier forward routing, CRM contact mapping, real-time dispatch calendar sync.",
      icon: Database,
    },
    {
      num: "04",
      name: "Testing",
      tagline: "Multi-scenario verification",
      description:
        "We subject the system to rigorous simulated call scenarios: emergency night calls, heavy background noise, ambiguous addresses, rate inquiries, and human transfer requests to ensure 100% accuracy before go-live.",
      deliverables: "Scenario test suite, audio quality verification, edge-case tuning.",
      icon: TestTube2,
    },
    {
      num: "05",
      name: "Launch",
      tagline: "Coordinated go-live with live monitoring",
      description:
        "We activate your live call forwarding schedule and conduct real-time oversight during the first batch of live customer calls, ensuring every lead is captured and dispatchers are notified immediately.",
      deliverables: "Production cutover, live audio monitoring, dispatcher orientation.",
      icon: Rocket,
    },
    {
      num: "06",
      name: "Ongoing Support",
      tagline: "Continuous maintenance & partner oversight",
      description:
        "Halvonex manages your system on an ongoing basis. We audit call transcripts weekly, tune prompt responses, adjust seasonal scheduling, and handle all technical maintenance so you never have to worry about software.",
      deliverables: "Weekly transcript audits, seasonal schedule updates, dedicated engineering support.",
      icon: Activity,
    },
  ];

  const workflowSteps = [
    {
      num: "01",
      title: "Customer Call",
      description: "Homeowner dials your primary business number. If busy or after-hours, carrier forwarding engages on Ring 1.",
      icon: PhoneCall,
    },
    {
      num: "02",
      title: "AI Receptionist Handshake",
      description: "Speaks naturally with your company greeting, asks how they can help, and collects HVAC symptoms.",
      icon: UserCheck,
    },
    {
      num: "03",
      title: "Data & Address Capture",
      description: "Validates caller name, callback number, and service address within your service zone.",
      icon: FileText,
    },
    {
      num: "04",
      title: "CRM Synchronization",
      description: "Syncs customer record, notes, and call audio link directly into your dispatch software.",
      icon: Database,
    },
    {
      num: "05",
      title: "Business Alert",
      description: "Dispatches immediate SMS and email alerts to on-call managers with priority tags.",
      icon: BellRing,
    },
    {
      num: "06",
      title: "Appointment Booking",
      description: "Confirms technician arrival window based on live calendar availability and sends customer confirmation text.",
      icon: CalendarCheck,
    },
  ];

  return (
    <div className="flex flex-col">
      {/* Header */}
      <section className="pt-16 pb-20 bg-surface-light border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-brand-light text-brand-cobalt border border-brand-border mb-4">
            <Activity className="w-3.5 h-3.5" />
            <span>TURNKEY ENGINEERING & CLIENT JOURNEY</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-tight max-w-4xl">
            Our Implementation & Management Process
          </h1>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed max-w-3xl">
            We don’t hand you a software login and expect you to build an AI system. Halvonex engineers, integrates, tests, and continuously manages your automated phone operations.
          </p>

          {/* Signal-Flow Architecture Diagram */}
          <div className="mt-10 p-5 sm:p-6 rounded-2xl bg-navy-950 border border-white/[0.08] ring-1 ring-inset ring-white/[0.05] text-white shadow-dark">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-3 mb-5 text-[11px] font-mono text-slate-400">
              <span>TELEPHONY SIGNAL-FLOW ARCHITECTURE</span>
              <span className="text-emerald-400">● ZERO CARRIER CHANGE</span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-3 items-stretch">
              <div className="p-3.5 rounded-xl bg-navy-900 border border-white/[0.08] flex flex-col justify-between">
                <span className="font-mono text-[10px] text-slate-400">01 // INBOUND PSTN</span>
                <p className="text-xs font-semibold text-white mt-1">Existing Business Line</p>
                <p className="text-[11px] text-slate-400 mt-1">Existing VoIP, Mobile, or Landline</p>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900 border border-white/[0.08] flex flex-col justify-between">
                <span className="font-mono text-[10px] text-blue-400">02 // ROUTING RULE</span>
                <p className="text-xs font-semibold text-white mt-1">Conditional Forwarding</p>
                <p className="text-[11px] text-slate-400 mt-1">Triggers on busy, after-hours, or 24/7</p>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-850 border border-brand-blue/50 flex flex-col justify-between">
                <span className="font-mono text-[10px] text-emerald-400">03 // VOICE ENGINE</span>
                <p className="text-xs font-semibold text-white mt-1">Halvonex Voice Node</p>
                <p className="text-[11px] text-slate-300 mt-1">Ring 1 answer, triage & address verification</p>
              </div>
              <div className="p-3.5 rounded-xl bg-navy-900 border border-white/[0.08] flex flex-col justify-between">
                <span className="font-mono text-[10px] text-emerald-400">04 // WEBHOOK SYNC</span>
                <p className="text-xs font-semibold text-white mt-1">CRM & Dispatch Calendar</p>
                <p className="text-[11px] text-slate-400 mt-1">Work order + slot + SMS confirmation</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Part 1: The 6-Stage Delivery Process */}
      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
          <div className="text-left max-w-3xl">
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
              Discovery &rarr; Setup &rarr; Integration &rarr; Testing &rarr; Launch &rarr; Support
            </h2>
            <p className="mt-3 text-sm text-muted">
              A structured, risk-free methodology engineered for service trade contractors.
            </p>
          </div>

          <div className="space-y-6">
            {processSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="p-6 sm:p-8 rounded-2xl bg-surface-light border border-surface-border shadow-subtle flex flex-col md:flex-row items-start gap-6"
                >
                  <div className="w-12 h-12 rounded-xl bg-navy-900 text-white flex items-center justify-center shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>

                  <div className="flex-1 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono font-bold text-brand-blue bg-brand-light px-2.5 py-1 rounded">
                          Phase {step.num}
                        </span>
                        <h3 className="text-xl font-bold text-navy-900">{step.name}</h3>
                      </div>
                      <span className="text-xs font-medium text-muted">{step.tagline}</span>
                    </div>

                    <p className="text-sm text-muted-dark leading-relaxed">
                      {step.description}
                    </p>

                    <div className="pt-2 text-xs text-navy-900 flex items-start gap-2">
                      <strong className="text-slate-700 shrink-0">Deliverables:</strong>
                      <span className="text-muted-dark">{step.deliverables}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Part 2: What happens on each customer call */}
      <section className="py-20 lg:py-24 bg-surface-light border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
              The Live Caller Journey
            </h2>
            <p className="mt-3 text-sm text-muted">
              What your customers experience when calling your business once the system is active.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {workflowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div
                  key={step.num}
                  className="bg-white p-7 rounded-2xl border border-surface-border shadow-subtle"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-lg bg-navy-900 text-white flex items-center justify-center">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-xs font-mono font-bold text-brand-blue bg-brand-light px-2 py-0.5 rounded">
                      Step {step.num}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-navy-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-dark leading-relaxed">{step.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-navy-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Schedule a Free Consultation
          </h2>
          <p className="text-base text-slate-300">
            Let&apos;s review your current call volumes and discuss how Halvonex can build and manage this complete intake automation for your business.
          </p>
          <div className="pt-2">
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold bg-white text-navy-900 hover:bg-surface-subtle transition-all"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-navy-900" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
