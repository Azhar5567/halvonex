import React from "react";
import Link from "next/link";
import {
  PhoneCall,
  ArrowRight,
  ShieldCheck,
  Users,
  Timer,
  CheckCircle2,
  Calendar,
  Database,
  Bell,
  PhoneForwarded,
  Sparkles,
  Layers,
  Wrench,
  Building2,
  Home,
  CheckCircle,
  Clock,
  Settings2,
  Activity,
  Headphones,
  Sliders,
  Radio,
  TestTube2,
  Rocket,
  Flame,
  Snowflake,
  AlertCircle,
  X,
  Minus,
} from "lucide-react";
import { HeroTelephonyConsole } from "@/components/HeroTelephonyConsole";
import { HeroProductVisualization } from "@/components/HeroProductVisualization";
import { ProductDashboardPreview } from "@/components/ProductDashboardPreview";
import { OpportunityEstimator } from "@/components/OpportunityEstimator";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  const services = [
    {
      code: "SVC_01 // VOICE_ENG",
      title: "AI Receptionist Implementation",
      description:
        "We build and script a natural voice receptionist trained on your specific services, pricing policies, service territory, and emergency safety protocols.",
      icon: PhoneCall,
      deliverables: ["Custom trade terminology", "Brand-tailored greetings", "Emergency gas/water triage"],
    },
    {
      code: "SVC_02 // CARRIER_GW",
      title: "Incoming Call Automation",
      description:
        "We configure carrier-grade forwarding on your existing business lines for 24/7 coverage, after-hours overflow, or peak daytime surge handling on Ring 1.",
      icon: Radio,
      deliverables: ["Ring 1 instant handshake", "Unlimited concurrent capacity", "Warm transfer to technicians"],
    },
    {
      code: "SVC_03 // CRM_SYNC",
      title: "Lead Capture & CRM Integration",
      description:
        "We connect your phone intake directly with your field service software (ServiceTitan, Jobber, Housecall Pro, or custom CRMs) with zero manual data entry.",
      icon: Database,
      deliverables: ["Full address & spelling check", "Transcripts & audio link", "Instant dispatcher tickets"],
    },
    {
      code: "SVC_04 // DISPATCH_CAL",
      title: "Appointment Booking Automation",
      description:
        "We establish automated booking logic that checks real-time technician routes and confirms service windows directly with callers while on the line.",
      icon: Calendar,
      deliverables: ["Live technician availability", "Route density protection", "Automated SMS confirmations"],
    },
    {
      code: "SVC_05 // RECOVERY_SMS",
      title: "Missed-Call Follow-up Systems",
      description:
        "We implement instant automated SMS sequences that message abandoned callers within seconds of a hang-up, preventing competitor leakage.",
      icon: PhoneForwarded,
      deliverables: ["< 15-second response time", "Two-way text qualification", "Customer self-booking link"],
    },
    {
      code: "SVC_06 // MNGD_SUPPORT",
      title: "Ongoing System Maintenance",
      description:
        "You never have to manage software or troubleshoot code. We provide proactive monitoring, carrier health checks, prompt tuning, and ongoing adjustments.",
      icon: Activity,
      deliverables: ["Weekly transcript audits", "Seasonal schedule shifts", "Dedicated engineering partner"],
    },
  ];

  const processSteps = [
    {
      code: "PHASE 01 // DISCOVERY",
      name: "Discovery",
      summary: "Understand your business",
      description:
        "We review your historical call patterns, carrier setup, dispatch zones, business hours, and primary field service software.",
    },
    {
      code: "PHASE 02 // CUSTOM SETUP",
      name: "Custom Setup",
      summary: "Build your automation",
      description:
        "We script and configure your conversational AI receptionist with HVAC-specific qualification questions, service zones, and emergency escalation paths.",
    },
    {
      code: "PHASE 03 // INTEGRATION",
      name: "Integration",
      summary: "Connect your tools",
      description:
        "Our engineers establish secure API and webhook connections to your CRM, dispatch calendar, and phone lines without altering your published phone numbers.",
    },
    {
      code: "PHASE 04 // TESTING",
      name: "Testing",
      summary: "Rigorous scenario checks",
      description:
        "We run structured simulated calls across noisy environments, urgent repair requests, edge cases, and after-hours emergency flows.",
    },
    {
      code: "PHASE 05 // LAUNCH",
      name: "Launch",
      summary: "Coordinated go-live",
      description:
        "We activate your live call forwarding schedule and conduct real-time monitoring on initial production conversations to ensure flawless operation.",
    },
    {
      code: "PHASE 06 // ONGOING SUPPORT",
      name: "Ongoing Support",
      summary: "Continuous maintenance",
      description:
        "We handle prompt adjustments, seasonal schedule shifts, CRM updates, and technical maintenance so your intake never misses a beat.",
    },
  ];

  const industries = [
    {
      title: "Residential HVAC Contractors",
      badge: "PRIMARY SPECIALIZATION",
      description:
        "Serving homeowners needing urgent AC repair in summer, furnace repair in winter, seasonal maintenance tune-ups, and equipment replacement quotes.",
      points: [
        "24/7 emergency dispatch qualification",
        "Homeowner address and gate code collection",
        "Seasonal tune-up calendar scheduling",
      ],
      icon: Home,
    },
    {
      title: "Commercial Mechanical & Refrigeration",
      badge: "COMMERCIAL FOCUS",
      description:
        "Handling facility managers, property managers, and commercial building operators who require rapid response times and formal work orders.",
      points: [
        "Commercial rooftop unit (RTU) qualification",
        "Routing to commercial estimators & on-call supervisors",
        "Multi-location service dispatch support",
      ],
      icon: Building2,
    },
    {
      title: "Multi-Trade Service Companies",
      badge: "EXPANDED TRADES",
      description:
        "Specialized automation for contractors who combine HVAC with plumbing, electrical, and indoor air quality services under one roof.",
      points: [
        "Multi-trade department call routing",
        "Trade-specific diagnostic question trees",
        "Unified dispatch CRM synchronization",
      ],
      icon: Wrench,
    },
  ];

  return (
    <div className="flex flex-col text-left">
      {/* 1. HERO SECTION (55/45 ASYMMETRICAL COMMAND CONSOLE SPLIT) */}
      <section className="relative pt-12 pb-20 lg:pt-20 lg:pb-28 bg-white border-b border-surface-border overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern pointer-events-none opacity-50" />
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-light/40 rounded-full blur-3xl pointer-events-none" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (7 Cols) */}
            <div className="lg:col-span-7 space-y-6 text-left">
              {/* Technical Monospace Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-medium bg-surface-subtle border border-surface-border text-slate-800 shadow-xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>HALVONEX VOICE ENGINE // HVAC SPECIALIZATION</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Never Miss Another <span className="text-brand-blue">HVAC Customer.</span>
              </h1>

              {/* Subheadlines */}
              <p className="text-lg sm:text-xl text-slate-600 max-w-2xl leading-relaxed">
                Your AI receptionist answers incoming calls, captures customer details and helps book service appointments — even when your team is busy or your office is closed.
              </p>

              <p className="text-sm font-medium text-brand-cobalt max-w-2xl">
                Halvonex designs, configures, connects and manages custom AI receptionist systems for HVAC businesses. We handle the entire technical implementation.
              </p>

              {/* CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-3.5">
                <Link
                  href="/book-consultation"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover rounded-xl shadow-btn-primary transition-all active:scale-[0.99]"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  href="#services"
                  className="inline-flex items-center justify-center gap-2 px-7 py-3.5 text-sm font-semibold text-slate-800 bg-surface-subtle hover:bg-surface-muted border border-surface-borderStrong rounded-xl transition-all"
                >
                  <span>Explore Our Services</span>
                </Link>
              </div>

              {/* Carrier & Compatibility Hairline Strip */}
              <div className="pt-6 border-t border-surface-border text-xs text-slate-500 space-y-2">
                <span className="font-mono text-[11px] uppercase tracking-wider text-slate-400 block font-semibold">
                  Carrier & Dispatch Compatibility
                </span>
                <div className="flex flex-wrap items-center gap-x-5 gap-y-2 font-mono text-[11px] text-slate-600">
                  <span>&bull; RingCentral</span>
                  <span>&bull; Dialpad</span>
                  <span>&bull; Vonage</span>
                  <span>&bull; AT&T / Spectrum</span>
                  <span>&bull; ServiceTitan</span>
                  <span>&bull; Jobber</span>
                  <span>&bull; Housecall Pro</span>
                </div>
              </div>
            </div>

            {/* Right Column (5 Cols): Live Telephony Console */}
            <div className="lg:col-span-5 relative">
              <div
                className="absolute -inset-4 bg-brand-blue/10 rounded-3xl blur-2xl pointer-events-none"
                aria-hidden="true"
              />
              <div className="relative">
                <HeroTelephonyConsole />
              </div>
            </div>
          </div>

          {/* Product Lifecycle Inspection Widget */}
          <div className="mt-20 pt-8 border-t border-surface-border">
            <div className="text-left mb-4">
              <span className="font-mono text-xs uppercase tracking-wider text-slate-500 font-semibold">
                SYSTEM DEPLOYMENT PREVIEW // 4-STAGE CALL ARCHITECTURE
              </span>
            </div>
            <HeroProductVisualization />
          </div>
        </div>
      </section>

      {/* 2. PROBLEM SECTION: HAIRLINE BENTO GRID + COMPARISON MATRIX */}
      <section className="py-20 lg:py-28 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              THE REALITY OF HVAC PHONE OPERATIONS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Every missed call could be a missed job.
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed max-w-[65ch]">
              HVAC contractors lose high-ticket repair and replacement jobs every month because phone lines are busy or unanswered after 5:00 PM. Generic chatbots and third-party call centers rarely solve the problem.
            </p>
          </div>

          {/* Hairline Connected Grid (Monochrome Slate + Cobalt Discipline) */}
          <div className="grid grid-cols-1 md:grid-cols-3 border border-surface-border rounded-2xl bg-white overflow-hidden shadow-subtle divide-y md:divide-y-0 md:divide-x divide-surface-border">
            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-muted text-slate-800 flex items-center justify-center mb-6 border border-surface-borderStrong font-mono font-bold text-xs tabular-nums">
                  01
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Missed Calls & Lost Jobs
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Homeowners call competitors the moment nobody answers. Voicemail rarely converts during extreme weather surges when families need heating or cooling right away.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border text-xs text-slate-700 font-mono flex items-center gap-2">
                <AlertCircle className="w-4 h-4 text-brand-cobalt shrink-0" />
                <span>Callers dial competitors in &lt; 3 mins</span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-muted text-slate-800 flex items-center justify-center mb-6 border border-surface-borderStrong font-mono font-bold text-xs tabular-nums">
                  02
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  Overwhelmed Office Staff
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Dispatchers cannot answer every incoming line while ordering parts, managing technician schedules, and coordinating customer service.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border text-xs text-slate-700 font-mono flex items-center gap-2">
                <Users className="w-4 h-4 text-brand-cobalt shrink-0" />
                <span>Peak surges flood office lines simultaneously</span>
              </div>
            </div>

            <div className="p-8 flex flex-col justify-between">
              <div>
                <div className="w-10 h-10 rounded-lg bg-surface-muted text-slate-800 flex items-center justify-center mb-6 border border-surface-borderStrong font-mono font-bold text-xs tabular-nums">
                  03
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-2">
                  The DIY Software Dilemma
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  Contractors do not have 40 hours to configure complex AI platforms, prompt engineer bots, or debug webhook errors. You need a trusted partner who manages it for you.
                </p>
              </div>
              <div className="mt-6 pt-4 border-t border-surface-border text-xs text-slate-700 font-mono flex items-center gap-2">
                <Settings2 className="w-4 h-4 text-brand-cobalt shrink-0" />
                <span>Halvonex is a managed service, not a SaaS burden</span>
              </div>
            </div>
          </div>

          {/* 3-Way Operational Comparison Matrix */}
          <div className="mt-14 bg-white rounded-2xl border border-surface-border shadow-subtle overflow-hidden">
            <div className="px-6 py-4 bg-surface-muted border-b border-surface-border flex flex-wrap items-center justify-between gap-2">
              <span className="font-mono text-xs font-semibold text-slate-800 uppercase tracking-wider">
                OPERATIONAL COMPARISON // CALL HANDLING OPTIONS
              </span>
              <span className="font-mono text-[11px] text-slate-500">
                HVAC DISPATCH EVALUATION
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse text-xs sm:text-sm">
                <thead>
                  <tr className="border-b border-surface-border bg-surface-subtle/60 font-mono text-[11px] uppercase tracking-wider text-slate-500">
                    <th className="py-3.5 px-6 font-semibold">Operational Capability</th>
                    <th className="py-3.5 px-6 font-semibold">Standard Voicemail</th>
                    <th className="py-3.5 px-6 font-semibold">Generic Answering Service</th>
                    <th className="py-3.5 px-6 font-semibold text-brand-cobalt bg-brand-light/40">
                      Halvonex Managed System
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-border text-slate-700">
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-900">Ring 1 Pickup Speed</td>
                    <td className="py-4 px-6 text-slate-500">
                      <span className="inline-flex items-center gap-1.5">
                        <X className="w-3.5 h-3.5 text-slate-400" />
                        Drops after 4–5 rings
                      </span>
                    </td>
                    <td className="py-4 px-6 text-slate-600">
                      <span className="inline-flex items-center gap-1.5">
                        <Minus className="w-3.5 h-3.5 text-slate-400" />
                        Hold queues during storms
                      </span>
                    </td>
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-brand-light/20">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        Instant answer on Ring 1 (24/7)
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-900">HVAC Terminology & Triage</td>
                    <td className="py-4 px-6 text-slate-500">None</td>
                    <td className="py-4 px-6 text-slate-600">Reads generic message script</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-brand-light/20">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        Trained on HVAC equipment & urgency
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-900">Direct Calendar Booking</td>
                    <td className="py-4 px-6 text-slate-500">None (Caller calls competitor)</td>
                    <td className="py-4 px-6 text-slate-600">Takes message for morning callback</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-brand-light/20">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        Books verified arrival windows live
                      </span>
                    </td>
                  </tr>
                  <tr>
                    <td className="py-4 px-6 font-semibold text-slate-900">CRM & Dispatch Sync</td>
                    <td className="py-4 px-6 text-slate-500">Manual voicemail playback</td>
                    <td className="py-4 px-6 text-slate-600">Emailed notes; manual re-entry</td>
                    <td className="py-4 px-6 font-semibold text-slate-900 bg-brand-light/20">
                      <span className="inline-flex items-center gap-1.5">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        Structured ticket + audio synced
                      </span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      {/* 3. DEDICATED SERVICES: HAIRLINE BENTO GRID */}
      <section id="services" className="py-20 lg:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              TURNKEY AGENCY CAPABILITIES
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our Managed Automation Services
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We design, build, connect, and continuously manage complete AI reception and dispatch workflows for your HVAC company.
            </p>
          </div>

          {/* 6-Part Hairline Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-surface-border rounded-2xl bg-white overflow-hidden shadow-subtle divide-y md:divide-y-0 md:divide-x lg:divide-x-0 divide-surface-border">
            {services.map((svc, idx) => {
              const Icon = svc.icon;
              return (
                <div
                  key={svc.code}
                  className={`p-7 flex flex-col justify-between border-surface-border ${
                    idx < 3 ? "lg:border-b" : ""
                  } ${idx % 3 !== 2 ? "lg:border-r" : ""}`}
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-950 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-400 bg-surface-subtle px-2 py-0.5 rounded border border-surface-border">
                        {svc.code}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 mb-2">{svc.title}</h3>
                    <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                      {svc.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-1.5 font-mono text-[11px] text-slate-700">
                    {svc.deliverables.map((item) => (
                      <div key={item} className="flex items-center gap-1.5">
                        <span className="text-brand-blue">&bull;</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-10 text-left">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-xs sm:text-sm font-semibold text-brand-blue hover:text-brand-hover font-mono"
            >
              <span>EXPLORE ALL SERVICES & TECHNICAL ARCHITECTURE</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. INTERACTIVE OPPORTUNITY RECOVERY ESTIMATOR */}
      <section className="py-20 lg:py-24 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-10">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              OPERATIONAL ROI BENCHMARK
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Calculate Your Unrecovered Revenue
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Use our interactive model to estimate the monthly and annual revenue lost to unanswered after-hours and overflow calls.
            </p>
          </div>

          <OpportunityEstimator />
        </div>
      </section>

      {/* 5. OUR PROCESS: CONNECTED PIPELINE */}
      <section id="process" className="py-20 lg:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              ENGINEERING LIFECYCLE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Our 6-Stage Implementation Process
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              We handle the entire engineering, integration, and operational verification lifecycle. You never have to build or configure software yourself.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {processSteps.map((step) => (
              <div
                key={step.code}
                className="bg-white p-7 rounded-2xl border border-surface-border shadow-subtle flex flex-col justify-between hover:border-slate-300 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-xs font-bold text-brand-blue bg-brand-light px-2.5 py-1 rounded">
                      {step.code}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-slate-900 mb-2">{step.name}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-surface-subtle border border-surface-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <ShieldCheck className="w-6 h-6 text-emerald-600 shrink-0" />
              <p className="text-xs sm:text-sm text-slate-800 font-medium">
                Every system undergoes rigorous simulated stress-testing before touching live customer phone lines.
              </p>
            </div>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-brand-blue hover:text-brand-hover shrink-0"
            >
              <span>VIEW FULL IMPLEMENTATION WALKTHROUGH</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      {/* 6. INDUSTRIES SECTION */}
      <section id="industries" className="py-20 lg:py-28 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              TARGET MARKETS & OPERATIONAL FIT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Industries We Serve
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              While we serve home service trade companies across North America, HVAC remains our core operational specialization.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-surface-border rounded-2xl bg-white overflow-hidden shadow-subtle divide-y md:divide-y-0 md:divide-x divide-surface-border">
            {industries.map((ind) => {
              const Icon = ind.icon;
              return (
                <div key={ind.title} className="p-8 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-lg bg-navy-950 text-white flex items-center justify-center">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-mono text-[10px] text-slate-600 bg-surface-subtle border border-surface-border px-2 py-0.5 rounded">
                        {ind.badge}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{ind.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed mb-6">{ind.description}</p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    {ind.points.map((point) => (
                      <div key={point} className="flex items-center gap-2 text-xs text-slate-700">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 7. SAMPLE CLIENT OPERATIONS DASHBOARD */}
      <section className="py-20 lg:py-28 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl text-left mb-14">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block mb-2">
              REAL-TIME OPERATIONAL OVERSIGHT
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              The Intake Console We Configure & Maintain For You
            </h2>
            <p className="mt-3 text-base text-slate-600 leading-relaxed">
              Enjoy complete visibility into incoming opportunities, call transcripts, diagnostic notes, and confirmed bookings without having to manage the underlying telecommunications infrastructure.
            </p>
          </div>

          <ProductDashboardPreview />
        </div>
      </section>

      {/* 8. ABOUT HALVONEX SECTION */}
      <section className="py-20 lg:py-24 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-left">
          <div className="max-w-3xl space-y-3">
            <span className="font-mono text-xs font-semibold uppercase tracking-wider text-slate-500 block">
              OUR MISSION & PERSPECTIVE
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Technology should make running an HVAC business easier.
            </h2>
            <p className="text-base text-slate-600 leading-relaxed">
              Halvonex is a specialized AI automation agency. We partner with heating, ventilation, and air conditioning companies to solve one of the most frustrating bottlenecks in the service trades: <strong>missed calls and slow customer response times</strong>.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed">
              Instead of selling you software licenses and leaving your staff to figure out prompt engineering, carrier SIP forwarding, or webhook synchronization, we take full responsibility for the build, launch, and ongoing maintenance of your automated phone systems.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 border border-surface-border rounded-2xl bg-white overflow-hidden shadow-subtle divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
            <div className="p-7">
              <span className="font-mono text-xs text-brand-blue font-bold block mb-1">01 // AGENCY MODEL</span>
              <h4 className="font-bold text-slate-900 text-sm">Dedicated Agency Model</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Full-service implementation. We write the prompts, wire the integrations, and test the workflows.
              </p>
            </div>
            <div className="p-7">
              <span className="font-mono text-xs text-brand-blue font-bold block mb-1">02 // DOMAIN FOCUS</span>
              <h4 className="font-bold text-slate-900 text-sm">Trade-Specific Focus</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                Engineered around actual HVAC trade realities: compressors, heat pumps, filters, and emergency dispatch.
              </p>
            </div>
            <div className="p-7">
              <span className="font-mono text-xs text-brand-blue font-bold block mb-1">03 // ACTIVE SUPPORT</span>
              <h4 className="font-bold text-slate-900 text-sm">Long-Term Partner</h4>
              <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                We continuously monitor call audio, tune system accuracy, and adapt your system as your company grows.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 9. FAQ SECTION */}
      <FAQSection />

      {/* 10. FINAL CTA SECTION (COMMAND BANNER) */}
      <section className="py-20 lg:py-24 bg-navy-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern-dark pointer-events-none opacity-40" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-6">
          <p className="font-mono text-xs uppercase tracking-widest text-brand-blue font-semibold">
            ENGINEERING CONSULTATION // ZERO OBLIGATION
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight max-w-3xl leading-tight">
            Stop losing customers to missed calls. Let us build your automation.
          </h2>
          <p className="text-base sm:text-lg text-slate-400 max-w-2xl leading-relaxed">
            Book a 15-minute consultation with our engineering team. We’ll review your existing phone setup, evaluate your dispatch workflows, and show you exactly what we can automate.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center justify-start gap-4">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 text-sm font-semibold text-slate-950 bg-white hover:bg-slate-100 rounded-xl shadow-elevated transition-all active:scale-[0.99]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4 text-slate-950" />
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-7 py-4 text-sm font-semibold text-slate-200 hover:text-white bg-navy-900 hover:bg-navy-850 border border-navy-800 rounded-xl transition-all"
            >
              <span>Contact Our Team</span>
            </Link>
          </div>

          <p className="font-mono text-xs text-slate-500 pt-2">
            Practical technical review &bull; Zero software setup required by your staff &bull; Carrier compatible
          </p>
        </div>
      </section>
    </div>
  );
}
