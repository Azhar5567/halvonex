"use client";

import React, { useState } from "react";
import { PhoneCall, UserCheck, CalendarCheck, Database, CheckCircle2, AlertCircle, ArrowRight, Clock, MapPin, Wrench } from "lucide-react";

export function HeroProductVisualization() {
  const [activeStep, setActiveStep] = useState<number>(0);

  const steps = [
    {
      id: "call",
      title: "1. Incoming Call",
      subtitle: "Zero wait time",
      icon: PhoneCall,
    },
    {
      id: "ai",
      title: "2. Voice Answering",
      subtitle: "Natural qualification",
      icon: UserCheck,
    },
    {
      id: "capture",
      title: "3. Data Extraction",
      subtitle: "Address & issue verified",
      icon: Database,
    },
    {
      id: "booking",
      title: "4. CRM & Dispatch",
      subtitle: "Calendar slot confirmed",
      icon: CalendarCheck,
    },
  ];

  return (
    <div className="w-full max-w-5xl mx-auto mt-12 bg-navy-900 rounded-2xl border border-navy-700/80 shadow-elevated overflow-hidden text-left">
      {/* Product Window Header */}
      <div className="flex flex-wrap items-center justify-between px-4 sm:px-6 py-3.5 bg-navy-850 border-b border-navy-700/70 gap-3">
        <div className="flex items-center gap-2.5">
          <div className="flex items-center gap-1.5">
            <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
          </div>
          <span className="text-xs font-mono text-slate-400 pl-2 border-l border-slate-700">
            Halvonex Voice Gateway &bull; Session #HVAC-8492
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Live Call In Progress
          </span>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">01:42</span>
        </div>
      </div>

      {/* Step Navigation Pill Bar */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-navy-850/60 border-b border-navy-700/70 text-xs">
        {steps.map((step, idx) => {
          const Icon = step.icon;
          const isActive = activeStep === idx;
          return (
            <button
              key={step.id}
              type="button"
              onClick={() => setActiveStep(idx)}
              className={`flex items-center gap-2.5 px-4 py-3 text-left transition-all border-b-2 ${
                isActive
                  ? "bg-navy-800 text-white border-brand-blue"
                  : "text-slate-400 hover:text-slate-200 hover:bg-navy-800/40 border-transparent"
              }`}
            >
              <div
                className={`p-1.5 rounded-md ${
                  isActive ? "bg-brand-blue text-white" : "bg-navy-700 text-slate-400"
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
              </div>
              <div>
                <p className="font-semibold leading-tight">{step.title}</p>
                <p className="text-[11px] text-slate-400 hidden sm:block">{step.subtitle}</p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Dynamic Content Panel */}
      <div className="p-5 sm:p-7 bg-navy-900 text-white">
        {activeStep === 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-blue uppercase tracking-wider">
                <PhoneCall className="w-3.5 h-3.5" />
                <span>Call Routing &bull; Direct Carrier Handshake</span>
              </div>
              <h4 className="text-lg sm:text-xl font-semibold text-white">
                Customer calls your main HVAC office line
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                When your office phones are occupied, after 5:00 PM, or on weekends, Halvonex answers instantly on ring one. Zero voicemail drop-offs, zero busy signals.
              </p>

              <div className="p-3.5 rounded-lg bg-navy-800/90 border border-navy-700 text-xs space-y-2">
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium text-white">Caller ID:</span>
                  <span className="font-mono text-slate-300">+1 (404) 555-0182 (Atlanta, GA)</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium text-white">Carrier Route:</span>
                  <span>Primary Trunk &rarr; Halvonex Voice Node #US-EAST</span>
                </div>
                <div className="flex items-center justify-between text-slate-300">
                  <span className="font-medium text-white">Wait Time:</span>
                  <span className="text-emerald-400 font-semibold">0.4 seconds (1st ring)</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-850 p-4 rounded-xl border border-navy-700/80 space-y-3">
              <div className="flex items-center justify-between text-xs text-slate-400 border-b border-navy-700/60 pb-2">
                <span>Inbound Audio Stream</span>
                <span className="text-emerald-400 font-mono">16kHz G.711</span>
              </div>
              <div className="flex items-center gap-1.5 py-2 justify-center">
                <span className="w-1 bg-brand-blue h-6 rounded-full animate-pulse" />
                <span className="w-1 bg-brand-blue h-10 rounded-full animate-pulse delay-75" />
                <span className="w-1 bg-brand-blue h-4 rounded-full animate-pulse delay-100" />
                <span className="w-1 bg-brand-blue h-8 rounded-full animate-pulse delay-150" />
                <span className="w-1 bg-brand-blue h-12 rounded-full animate-pulse delay-200" />
                <span className="w-1 bg-brand-blue h-7 rounded-full animate-pulse delay-100" />
                <span className="w-1 bg-brand-blue h-9 rounded-full animate-pulse delay-75" />
                <span className="w-1 bg-brand-blue h-5 rounded-full animate-pulse" />
              </div>
              <p className="text-xs text-slate-400 text-center italic">
                &ldquo;Hi, our AC unit is blowing hot air and it’s 92 degrees inside. Can someone come out today?&rdquo;
              </p>
            </div>
          </div>
        )}

        {activeStep === 1 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-blue uppercase tracking-wider">
                <UserCheck className="w-3.5 h-3.5" />
                <span>Conversational Speech Engine</span>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Human-like phone interaction with HVAC service knowledge
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                The receptionist speaks with calm, natural pacing. It knows HVAC terminology (condensers, heat pumps, refrigerant leaks, pilot lights) and collects full details without robotic menus.
              </p>

              {/* Transcript snippet */}
              <div className="space-y-2.5 pt-2">
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="px-2 py-0.5 rounded bg-brand-blue/20 text-brand-blue font-semibold shrink-0">
                    Halvonex AI:
                  </span>
                  <span className="text-slate-200">
                    &ldquo;I’m so sorry to hear that — with temperatures this high, we’ll prioritize getting this looked at. May I have your full name and service address please?&rdquo;
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="px-2 py-0.5 rounded bg-navy-700 text-slate-300 font-semibold shrink-0">
                    Caller:
                  </span>
                  <span className="text-slate-300">
                    &ldquo;Yes, it’s David Miller at 4412 Brookside Lane in Marietta.&rdquo;
                  </span>
                </div>
                <div className="flex items-start gap-2.5 text-xs">
                  <span className="px-2 py-0.5 rounded bg-brand-blue/20 text-brand-blue font-semibold shrink-0">
                    Halvonex AI:
                  </span>
                  <span className="text-slate-200">
                    &ldquo;Thank you, Mr. Miller. Is this for a residential home, and do you hear any strange noises coming from the outside condenser unit?&rdquo;
                  </span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-850 p-4 rounded-xl border border-navy-700/80 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide block border-b border-navy-700/60 pb-2">
                Real-Time Intent Parser
              </span>
              <div className="space-y-2 text-xs">
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Detected Intent:</span>
                  <span className="text-emerald-400 font-medium">Emergency AC Repair</span>
                </div>
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Confidence Score:</span>
                  <span className="text-white font-mono">99.4%</span>
                </div>
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Customer Tone:</span>
                  <span className="text-amber-400 font-medium">Urgent / Frustrated with Heat</span>
                </div>
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Classification:</span>
                  <span className="text-white font-medium">Residential &bull; Existing System</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 2 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-brand-blue uppercase tracking-wider">
                <Database className="w-3.5 h-3.5" />
                <span>Structured Information Extraction</span>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Every field your dispatcher needs is recorded accurately
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                No incomplete scratch notes. Halvonex systematically captures name, callback phone number, service address, property type, HVAC symptoms, and gate/access instructions.
              </p>

              <div className="grid grid-cols-2 gap-3 text-xs">
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700">
                  <p className="text-slate-400 flex items-center gap-1.5 mb-1">
                    <UserCheck className="w-3.5 h-3.5 text-brand-blue" /> Full Name
                  </p>
                  <p className="font-semibold text-white text-sm">David Miller</p>
                </div>
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700">
                  <p className="text-slate-400 flex items-center gap-1.5 mb-1">
                    <PhoneCall className="w-3.5 h-3.5 text-brand-blue" /> Verified Phone
                  </p>
                  <p className="font-semibold text-white text-sm">+1 (404) 555-0182</p>
                </div>
                <div className="p-3 rounded-lg bg-navy-850 border border-navy-700 col-span-2">
                  <p className="text-slate-400 flex items-center gap-1.5 mb-1">
                    <MapPin className="w-3.5 h-3.5 text-brand-blue" /> Service Address
                  </p>
                  <p className="font-semibold text-white text-sm">4412 Brookside Lane, Marietta, GA 30067</p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-850 p-4 rounded-xl border border-navy-700/80 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide block border-b border-navy-700/60 pb-2">
                Extracted Job Scope
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-navy-800 border border-navy-700">
                  <div className="flex items-center gap-1.5 text-amber-400 font-semibold mb-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Priority: Same-Day Emergency</span>
                  </div>
                  <p className="text-slate-300 leading-relaxed text-[11px]">
                    No cooling, outside fan motor humming but not spinning. Temperature inside house is 92°F.
                  </p>
                </div>
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Equipment Type:</span>
                  <span className="text-white font-mono">Central Heat Pump (4-Ton)</span>
                </div>
                <div className="flex justify-between items-center bg-navy-800 p-2 rounded">
                  <span className="text-slate-400">Homeowner Present:</span>
                  <span className="text-emerald-400 font-medium">Yes &bull; Available after 1:00 PM</span>
                </div>
              </div>
            </div>
          </div>
        )}

        {activeStep === 3 && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Appointment Booked & Dispatch Alerted</span>
              </div>
              <h4 className="text-lg font-semibold text-white">
                Synchronized directly into your calendar & CRM
              </h4>
              <p className="text-sm text-slate-300 leading-relaxed">
                Halvonex checks technician route availability in real time, reserves the optimal service window, delivers immediate SMS confirmation to the customer, and notifies your dispatch team.
              </p>

              <div className="p-3.5 rounded-lg bg-emerald-950/40 border border-emerald-500/30 text-xs space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <CalendarCheck className="w-4 h-4 text-emerald-400" /> Scheduled Window:
                  </span>
                  <span className="text-white font-medium">Today, 2:00 PM – 4:00 PM EST</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-300 font-semibold flex items-center gap-1.5">
                    <Wrench className="w-4 h-4 text-emerald-400" /> Assigned Zone / Tech:
                  </span>
                  <span className="text-white font-medium">North Metro Zone &bull; Tech #3 Brad</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-navy-850 p-4 rounded-xl border border-navy-700/80 space-y-3">
              <span className="text-xs font-semibold text-slate-300 uppercase tracking-wide block border-b border-navy-700/60 pb-2">
                Outbound Automated Actions
              </span>
              <div className="space-y-2 text-xs">
                <div className="p-2.5 rounded bg-navy-800 border border-emerald-500/30 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Customer SMS Confirmation Sent</p>
                    <p className="text-[11px] text-slate-400">
                      &ldquo;Hi David, your HVAC repair is confirmed for today between 2-4 PM...&rdquo;
                    </p>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-navy-800 border border-navy-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">CRM Lead & Work Order Created</p>
                    <p className="text-[11px] text-slate-400">Synced to field service software with call recording</p>
                  </div>
                </div>
                <div className="p-2.5 rounded bg-navy-800 border border-navy-700 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-blue shrink-0 mt-0.5" />
                  <div>
                    <p className="font-semibold text-white">Dispatcher Push Notification</p>
                    <p className="text-[11px] text-slate-400">Lead flagged as high priority in dispatcher inbox</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Product Footer Bar */}
      <div className="px-5 py-3 bg-navy-850 border-t border-navy-700/70 flex flex-wrap items-center justify-between text-xs text-slate-400 gap-3">
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-slate-300">
            <Clock className="w-3.5 h-3.5 text-brand-blue" /> Average call duration: 1m 45s
          </span>
          <span className="text-slate-400 hidden sm:inline">&bull;</span>
          <span className="text-slate-300 hidden sm:inline">100% field details collected</span>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-brand-blue/20 hover:bg-brand-blue/30 text-brand-blue font-medium transition-colors"
          >
            <span>Next Stage</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
