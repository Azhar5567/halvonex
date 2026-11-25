"use client";

import React, { useState, useEffect } from "react";
import { CheckCircle2, Play, Pause, RotateCcw } from "lucide-react";

interface CallBeat {
  time: string;
  speaker: "CALLER" | "HALVONEX AI";
  line: string;
}

interface TelephonyScenario {
  id: string;
  badge: string;
  caller: string;
  phone: string;
  address: string;
  issue: string;
  equipment: string;
  urgency: string;
  urgencyTone: "amber" | "red" | "blue";
  crmStatus: string;
  slot: string;
  beats: CallBeat[];
}

const SCENARIOS: TelephonyScenario[] = [
  {
    id: "residential-ac",
    badge: "Residential Urgent",
    caller: "David Miller",
    phone: "+1 (404) 555-0182",
    address: "4412 Brookside Lane, Marietta, GA",
    issue: "AC fan stopped, 92°F inside home",
    equipment: "Goodman 4-Ton Split Heat Pump",
    urgency: "HIGH (Same-Day Emergency)",
    urgencyTone: "amber",
    crmStatus: "Synced to CRM (#WO-8492)",
    slot: "Today, 2:00 PM – 4:00 PM (Tech #3 Brad)",
    beats: [
      {
        time: "00:02",
        speaker: "CALLER",
        line: "Hi, our AC fan stopped running and it's 92 degrees inside.",
      },
      {
        time: "00:14",
        speaker: "HALVONEX AI",
        line: "I can get a technician out today. May I confirm your address?",
      },
      {
        time: "00:26",
        speaker: "CALLER",
        line: "4412 Brookside Lane in Marietta. It's a Goodman 4-ton unit.",
      },
      {
        time: "00:41",
        speaker: "HALVONEX AI",
        line: "Confirmed for 2:00–4:00 PM today. Confirmation text just sent.",
      },
    ],
  },
  {
    id: "furnace-freeze",
    badge: "Heating Failure",
    caller: "Elena Rodriguez",
    phone: "+1 (770) 555-1944",
    address: "1830 Westover Terr, Roswell, GA",
    issue: "Furnace blowing cold air, 26°F outside",
    equipment: "Trane XR95 Natural Gas Furnace",
    urgency: "CRITICAL (Freeze Protocol)",
    urgencyTone: "red",
    crmStatus: "Synced to Dispatch CRM (#TKT-4109)",
    slot: "Immediate Dispatch (Tech #1 Jake)",
    beats: [
      {
        time: "00:02",
        speaker: "CALLER",
        line: "Our furnace is blowing cold air and it's 26 degrees outside.",
      },
      {
        time: "00:12",
        speaker: "HALVONEX AI",
        line: "We prioritize freeze risks. Are you at 1830 Westover Terrace?",
      },
      {
        time: "00:24",
        speaker: "CALLER",
        line: "Yes, that's right. It's a Trane gas furnace that stopped heating.",
      },
      {
        time: "00:38",
        speaker: "HALVONEX AI",
        line: "Priority dispatch confirmed. On-call tech Jake is notified.",
      },
    ],
  },
  {
    id: "commercial-rtu",
    badge: "Commercial RTU",
    caller: "Apex Logistics LLC",
    phone: "+1 (678) 555-4011",
    address: "400 Industrial Pkwy, Norcross, GA",
    issue: "Warehouse RTU #2 compressor fault",
    equipment: "Carrier 10-Ton Rooftop Unit",
    urgency: "Commercial Account Priority",
    urgencyTone: "blue",
    crmStatus: "Synced to Commercial CRM (#EST-4011)",
    slot: "Tomorrow, 9:00 AM – 11:00 AM (Estimator)",
    beats: [
      {
        time: "00:02",
        speaker: "CALLER",
        line: "This is Dan at Apex Logistics. Rooftop unit #2 just faulted.",
      },
      {
        time: "00:15",
        speaker: "HALVONEX AI",
        line: "I see your commercial account on Norcross Industrial Pkwy.",
      },
      {
        time: "00:27",
        speaker: "CALLER",
        line: "Yes, it's the Carrier 10-ton unit over Bay 4.",
      },
      {
        time: "00:36",
        speaker: "HALVONEX AI",
        line: "Logged your details and booked a 9:00 AM estimator visit tomorrow.",
      },
    ],
  },
];

export function HeroTelephonyConsole() {
  const [selected, setSelected] = useState<TelephonyScenario>(SCENARIOS[0]);
  const [beatIndex, setBeatIndex] = useState<number>(3);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);

  useEffect(() => {
    if (!isPlaying) return;
    const timer = setInterval(() => {
      setBeatIndex((prev) => {
        if (prev >= selected.beats.length - 1) {
          setIsPlaying(false);
          return prev;
        }
        return prev + 1;
      });
    }, 2200);
    return () => clearInterval(timer);
  }, [isPlaying, selected]);

  const handleSelectScenario = (sc: TelephonyScenario) => {
    setSelected(sc);
    setBeatIndex(0);
    setIsPlaying(true);
  };

  const handleTogglePlay = () => {
    if (isPlaying) {
      setIsPlaying(false);
    } else {
      if (beatIndex >= selected.beats.length - 1) {
        setBeatIndex(0);
      }
      setIsPlaying(true);
    }
  };

  const handleReset = () => {
    setIsPlaying(false);
    setBeatIndex(0);
  };

  const currentBeat = selected.beats[beatIndex];
  const addressCaptured = beatIndex >= 2;
  const dispatchBooked = beatIndex >= 3;

  return (
    <div className="w-full bg-navy-950 rounded-2xl border border-white/[0.08] ring-1 ring-inset ring-white/[0.05] shadow-dark overflow-hidden text-left font-sans">
      {/* Console Header Bar */}
      <div className="bg-navy-900 px-4 sm:px-5 py-3 border-b border-white/[0.08] flex items-center justify-between text-xs">
        <div className="flex items-center gap-2">
          <span
            className={`w-2 h-2 rounded-full ${
              isPlaying ? "bg-emerald-400 animate-pulse" : "bg-emerald-500"
            }`}
          />
          <span className="font-mono text-slate-300 font-semibold tracking-wider text-[11px] tabular-nums">
            HALVONEX VOICE // TRUNK #US-EAST-04
          </span>
        </div>
        <span className="font-mono text-[10px] text-emerald-400 bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-500/20">
          {isPlaying ? "SIMULATING CALL" : "RING 1 READY"}
        </span>
      </div>

      {/* Scenario Switcher Tabs */}
      <div className="grid grid-cols-3 bg-navy-900/60 border-b border-white/[0.08] text-[11px] font-mono">
        {SCENARIOS.map((sc) => (
          <button
            key={sc.id}
            type="button"
            onClick={() => handleSelectScenario(sc)}
            className={`py-2.5 px-2 text-center transition-colors truncate border-b-2 ${
              selected.id === sc.id
                ? "bg-navy-850 text-white font-semibold border-brand-blue"
                : "text-slate-400 hover:text-slate-200 border-transparent"
            }`}
          >
            {sc.badge}
          </button>
        ))}
      </div>

      {/* Main Console Body */}
      <div className="p-4 sm:p-5 space-y-3.5 text-xs">
        {/* Caller Header & Playback Controls */}
        <div className="flex items-center justify-between bg-navy-900 p-3 rounded-xl border border-white/[0.08]">
          <div className="min-w-0">
            <span className="font-mono text-[10px] text-slate-400 uppercase tracking-wider block">
              Verified Caller ID
            </span>
            <div className="flex flex-wrap items-baseline gap-x-2">
              <span className="text-white font-semibold text-sm truncate">{selected.caller}</span>
              <span className="font-mono text-slate-400 text-[11px] tabular-nums">
                {selected.phone}
              </span>
            </div>
          </div>

          {/* Equalizer & Play/Pause */}
          <div className="flex items-center gap-2.5 shrink-0">
            <div className="flex items-center gap-1 h-6" aria-hidden="true">
              <span
                className={`w-1 bg-brand-blue h-3 rounded-full origin-bottom ${
                  isPlaying ? "animate-eq-1" : "opacity-50"
                }`}
              />
              <span
                className={`w-1 bg-brand-blue h-5 rounded-full origin-bottom ${
                  isPlaying ? "animate-eq-2" : "opacity-60"
                }`}
              />
              <span
                className={`w-1 bg-brand-blue h-4 rounded-full origin-bottom ${
                  isPlaying ? "animate-eq-3" : "opacity-50"
                }`}
              />
              <span
                className={`w-1 bg-brand-blue h-6 rounded-full origin-bottom ${
                  isPlaying ? "animate-eq-4" : "opacity-70"
                }`}
              />
              <span
                className={`w-1 bg-brand-blue h-3.5 rounded-full origin-bottom ${
                  isPlaying ? "animate-eq-5" : "opacity-50"
                }`}
              />
            </div>

            <button
              type="button"
              onClick={handleTogglePlay}
              aria-label={isPlaying ? "Pause call simulation" : "Play call simulation"}
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-brand-blue hover:bg-brand-hover text-white font-mono text-[10px] font-semibold transition-colors shadow-btn-primary"
            >
              {isPlaying ? <Pause className="w-3 h-3" /> : <Play className="w-3 h-3" />}
              <span>{isPlaying ? "PAUSE" : beatIndex >= 3 ? "REPLAY" : "PLAY"}</span>
            </button>
          </div>
        </div>

        {/* Live Conversation Stepper */}
        <div className="p-3 rounded-xl bg-navy-850 border border-white/[0.08] space-y-2">
          <div className="flex items-center justify-between font-mono text-[10px] text-slate-400">
            <span className="tabular-nums">
              TURN {beatIndex + 1}/4 &bull; {currentBeat.time}
            </span>
            <div className="flex items-center gap-1.5">
              {selected.beats.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => {
                    setIsPlaying(false);
                    setBeatIndex(idx);
                  }}
                  aria-label={`Jump to turn ${idx + 1}`}
                  className={`h-1.5 rounded-full transition-all ${
                    idx <= beatIndex ? "w-4 bg-brand-blue" : "w-2 bg-slate-700"
                  }`}
                />
              ))}
              <button
                type="button"
                onClick={handleReset}
                aria-label="Reset call simulation"
                className="ml-1 text-slate-400 hover:text-white transition-colors"
              >
                <RotateCcw className="w-3 h-3" />
              </button>
            </div>
          </div>

          <p className="text-xs text-slate-200 leading-relaxed min-h-[34px]">
            <span
              className={`font-mono text-[10px] font-bold mr-1.5 px-1.5 py-0.5 rounded ${
                currentBeat.speaker === "HALVONEX AI"
                  ? "bg-brand-blue/25 text-teal-300"
                  : "bg-white/10 text-slate-300"
              }`}
            >
              {currentBeat.speaker}
            </span>
            &ldquo;{currentBeat.line}&rdquo;
          </p>
        </div>

        {/* Structured Data Extraction Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 font-mono text-[11px]">
          <div className="p-2.5 rounded-lg bg-navy-900 border border-white/[0.08]">
            <span className="text-slate-400 text-[10px] block uppercase">Service Address</span>
            <span
              className={`font-medium font-sans text-xs truncate block mt-0.5 transition-colors ${
                addressCaptured ? "text-slate-100" : "text-slate-500 italic"
              }`}
            >
              {addressCaptured ? selected.address : "Listening for street address..."}
            </span>
          </div>
          <div className="p-2.5 rounded-lg bg-navy-900 border border-white/[0.08]">
            <span className="text-slate-400 text-[10px] block uppercase">Equipment Type</span>
            <span
              className={`font-medium font-sans text-xs truncate block mt-0.5 transition-colors ${
                addressCaptured ? "text-slate-100" : "text-slate-500 italic"
              }`}
            >
              {addressCaptured ? selected.equipment : "Identifying HVAC unit..."}
            </span>
          </div>
        </div>

        {/* Priority & Dispatch Slot */}
        <div className="p-3 rounded-xl bg-navy-900 border border-white/[0.08] space-y-1.5 font-mono text-[11px]">
          <div className="flex justify-between items-center gap-2">
            <span className="text-slate-400">Lead Priority:</span>
            <span
              className={`font-semibold ${
                selected.urgencyTone === "red"
                  ? "text-rose-400"
                  : selected.urgencyTone === "amber"
                  ? "text-amber-400"
                  : "text-teal-400"
              }`}
            >
              {selected.urgency}
            </span>
          </div>
          <div className="flex justify-between items-center gap-2">
            <span className="text-slate-400">Reserved Window:</span>
            <span
              className={`font-semibold font-sans text-xs transition-colors ${
                dispatchBooked ? "text-emerald-400" : "text-slate-500"
              }`}
            >
              {dispatchBooked ? selected.slot : "Checking technician availability..."}
            </span>
          </div>
        </div>

        {/* CRM Handshake Footer */}
        <div className="pt-2 border-t border-white/[0.08] flex items-center justify-between text-[11px] text-slate-400 font-mono">
          <div
            className={`flex items-center gap-1.5 transition-colors ${
              dispatchBooked ? "text-emerald-400" : "text-slate-400"
            }`}
          >
            <CheckCircle2 className="w-3.5 h-3.5 shrink-0" />
            <span className="truncate">
              {dispatchBooked ? selected.crmStatus : "Preparing CRM payload..."}
            </span>
          </div>
          <span className="text-slate-500 tabular-nums shrink-0">280ms</span>
        </div>
      </div>
    </div>
  );
}
