import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { HeroTelephonyConsole } from "@/components/HeroTelephonyConsole";
import { ProductDashboardPreview } from "@/components/ProductDashboardPreview";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  const problems = [
    {
      num: "01",
      title: "Missed calls",
      description:
        "Homeowners call the next contractor on Google when nobody answers.",
    },
    {
      num: "02",
      title: "Busy office teams",
      description:
        "Dispatchers cannot answer every line while coordinating technicians and daily operations.",
    },
    {
      num: "03",
      title: "No time for DIY software",
      description:
        "You shouldn't have to configure AI tools yourself. Halvonex builds and manages everything for you.",
    },
  ];

  const services = [
    {
      title: "AI Voice Agents Implementation",
      description:
        "Custom AI Voice Agents trained on your HVAC services, lead qualification criteria, and territory rules.",
    },
    {
      title: "Incoming Call Handling",
      description:
        "24/7 Ring 1 answering and after-hours overflow so every customer call is captured.",
    },
    {
      title: "Lead Capture & Qualification",
      description:
        "Verified caller details, addresses, and service needs collected and qualified automatically.",
    },
    {
      title: "Appointment Booking",
      description:
        "Real-time calendar availability checks and arrival window booking during the call.",
    },
    {
      title: "CRM Management",
      description:
        "Structured lead records, call transcripts, and statuses synced and organized inside your CRM.",
    },
    {
      title: "Automated Follow-ups",
      description:
        "Immediate automated SMS follow-ups for missed calls, appointment confirmations, and reminders.",
    },
  ];

  const processSteps = [
    { num: "01", name: "Discovery", detail: "Review your call volume, hours, and current setup." },
    { num: "02", name: "Custom Setup", detail: "Build and script your custom AI Voice Agents." },
    { num: "03", name: "Integration", detail: "Connect your phone system, calendar, and CRM." },
    { num: "04", name: "Testing", detail: "Verify call flows, lead qualification, and appointment booking." },
    { num: "05", name: "Launch", detail: "Go live with active call monitoring and lead delivery." },
    { num: "06", name: "Ongoing Support", detail: "Continuous tuning and technical maintenance." },
  ];

  const industries = [
    {
      tag: "Primary Specialization",
      title: "Residential HVAC",
      description:
        "Emergency AC and heating repairs, seasonal tune-ups, and system replacement inquiries.",
    },
    {
      tag: "Commercial",
      title: "Commercial Mechanical",
      description:
        "Facility managers, rooftop unit requests, and priority commercial dispatch routing.",
    },
    {
      tag: "Service Trades",
      title: "Multi-Trade Contractors",
      description:
        "Contractors combining HVAC with plumbing or electrical under one dispatch team.",
    },
  ];

  return (
    <div className="flex flex-col text-left">
      {/* 1. MINIMAL HERO */}
      <section className="py-16 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 space-y-6">
              <p className="font-mono text-xs uppercase tracking-wider text-brand-cobalt font-semibold">
                AI Automation Agency Powered by AI Voice Agents
              </p>

              <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 tracking-tight leading-[1.12]">
                Never Miss Another <span className="text-brand-blue">HVAC Customer.</span>
              </h1>

              <p className="text-base sm:text-lg text-slate-600 leading-relaxed max-w-xl">
                We build, configure, and manage custom 24/7 AI Voice Agents for HVAC companies—handling incoming calls, capturing and qualifying leads, booking appointments, managing your CRM, and running automated follow-ups.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-brand-blue hover:bg-brand-hover rounded-lg shadow-btn-primary transition-colors"
                >
                  <span>Book a Free Consultation</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-slate-700 hover:text-slate-900 bg-surface-subtle hover:bg-surface-muted border border-surface-borderStrong rounded-lg transition-colors"
                >
                  Explore Services
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6">
              <HeroTelephonyConsole />
            </div>
          </div>
        </div>
      </section>

      {/* 2. PROBLEM */}
      <section className="py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-12">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
              The Problem
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Every missed call could be a missed job.
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 border border-surface-border rounded-xl bg-white divide-y md:divide-y-0 md:divide-x divide-surface-border">
            {problems.map((item) => (
              <div key={item.num} className="p-7 space-y-2.5">
                <span className="font-mono text-xs text-brand-cobalt font-semibold block">
                  {item.num}
                </span>
                <h3 className="text-base font-semibold text-slate-900">{item.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. SERVICES */}
      <section id="services" className="py-20 bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Services
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Done-for-you AI reception &amp; dispatch automation.
              </h2>
            </div>
            <Link
              href="/services"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cobalt hover:text-brand-hover shrink-0"
            >
              <span>All service details</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 border border-surface-border rounded-xl bg-white overflow-hidden divide-y md:divide-y-0 md:divide-x lg:divide-x-0 divide-surface-border">
            {services.map((svc, idx) => (
              <div
                key={svc.title}
                className={`p-7 border-surface-border ${
                  idx < 3 ? "lg:border-b" : ""
                } ${idx % 3 !== 2 ? "lg:border-r" : ""}`}
              >
                <h3 className="text-base font-semibold text-slate-900 mb-2">{svc.title}</h3>
                <p className="text-sm text-slate-600 leading-relaxed">{svc.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. OUR PROCESS */}
      <section id="process" className="py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
            <div className="max-w-2xl">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Our Process
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                From discovery to ongoing support.
              </h2>
            </div>
            <Link
              href="/how-it-works"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cobalt hover:text-brand-hover shrink-0"
            >
              <span>See how it works</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {processSteps.map((step) => (
              <div
                key={step.num}
                className="p-6 rounded-xl bg-white border border-surface-border space-y-2"
              >
                <span className="font-mono text-xs text-brand-cobalt font-semibold block">
                  {step.num} // {step.name.toUpperCase()}
                </span>
                <p className="text-sm text-slate-600 leading-relaxed">{step.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. INDUSTRIES & ABOUT */}
      <section id="industries" className="py-20 bg-white border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          <div>
            <div className="max-w-2xl mb-10">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                Industries
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Built primarily for HVAC companies.
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 border border-surface-border rounded-xl bg-white divide-y md:divide-y-0 md:divide-x divide-surface-border">
              {industries.map((ind) => (
                <div key={ind.title} className="p-7 space-y-2">
                  <span className="font-mono text-[11px] text-brand-cobalt font-medium block">
                    {ind.tag}
                  </span>
                  <h3 className="text-base font-semibold text-slate-900">{ind.title}</h3>
                  <p className="text-sm text-slate-600 leading-relaxed">{ind.description}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-12 border-t border-surface-border grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            <div className="lg:col-span-5">
              <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
                About Halvonex
              </p>
              <h2 className="text-2xl font-bold text-slate-900 tracking-tight">
                Technology should make running a business easier.
              </h2>
            </div>
            <div className="lg:col-span-7 space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed">
              <p>
                Halvonex is an AI automation service company. Instead of handing you self-service software to figure out on your own, we partner with your team to engineer, connect, test, and maintain your phone intake automation.
              </p>
              <Link
                href="/about"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-cobalt hover:text-brand-hover"
              >
                <span>Read about our approach</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 6. SAMPLE CONSOLE PREVIEW */}
      <section className="py-20 bg-surface-subtle border-b border-surface-border">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10">
            <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
              Sample Visibility
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
              Clear oversight of every call and lead.
            </h2>
          </div>

          <ProductDashboardPreview />
        </div>
      </section>

      {/* 7. FAQ */}
      <FAQSection />

      {/* 8. FINAL CTA */}
      <section className="py-20 bg-navy-950 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-5">
          <p className="font-mono text-xs uppercase tracking-wider text-teal-400">
            Free Consultation
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight max-w-2xl">
            Stop losing customers to missed calls.
          </h2>
          <p className="text-base text-slate-400 max-w-xl leading-relaxed">
            Schedule a 15-minute consultation to review your current phone flow and see what we can automate for your HVAC team.
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-950 bg-white hover:bg-slate-100 rounded-lg transition-colors"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 text-sm font-medium text-slate-200 hover:text-white border border-white/[0.12] rounded-lg transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
