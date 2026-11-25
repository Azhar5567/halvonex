"use client";

import React, { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function OpportunityEstimator() {
  const [missedPerWeek, setMissedPerWeek] = useState<number>(10);
  const [avgTicket, setAvgTicket] = useState<number>(650);

  const monthlyCalls = missedPerWeek * 4.33;
  const capturedJobsMonthly = Math.round(monthlyCalls * 0.38);
  const estimatedRecoveredRevenue = capturedJobsMonthly * avgTicket;

  return (
    <div className="w-full bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden text-left">
      {/* Header telemetry strip */}
      <div className="bg-surface-subtle px-6 py-3 border-b border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 font-mono text-slate-700">
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span className="font-semibold text-slate-900">HVAC OPPORTUNITY LOSS MODEL</span>
          <span className="text-slate-400 hidden sm:inline">&bull; Illustrative Benchmark</span>
        </div>
        <span className="font-mono text-[11px] text-slate-500">MODEL_REV // V2.4</span>
      </div>

      <div className="p-6 sm:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Sliders and Controls */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <h3 className="text-xl font-bold text-slate-900 tracking-tight">
              Estimate Your Uncaptured Revenue
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 mt-1.5 leading-relaxed max-w-[60ch]">
              When lines ring busy or roll over to voicemail after 5:00 PM, homeowners dial the next contractor on Google. Estimate what immediate answering recovers.
            </p>
          </div>

          {/* Slider 1: Missed Calls per week */}
          <div className="space-y-2.5">
            <div className="flex justify-between items-center text-xs">
              <label htmlFor="missed-calls-slider" className="font-medium text-slate-700">
                Estimated Unanswered Calls / Week:
              </label>
              <span className="font-mono font-bold text-brand-cobalt text-sm px-2.5 py-0.5 rounded bg-brand-light border border-brand-border tabular-nums">
                {missedPerWeek} calls / week
              </span>
            </div>
            <input
              id="missed-calls-slider"
              type="range"
              min={3}
              max={35}
              step={1}
              value={missedPerWeek}
              onChange={(e) => setMissedPerWeek(Number(e.target.value))}
              aria-label="Estimated unanswered calls per week"
              className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-blue"
            />
            <div className="flex justify-between text-[11px] text-slate-500 font-mono tabular-nums">
              <span>3 calls (Solo truck)</span>
              <span>18 calls (5–10 trucks)</span>
              <span>35+ calls (High volume)</span>
            </div>
          </div>

          {/* Preset Buttons: Average Ticket */}
          <div className="space-y-2.5">
            <span className="font-medium text-slate-700 text-xs block">
              Average Revenue per Dispatched Job:
            </span>
            <div className="grid grid-cols-3 gap-2.5">
              {[
                { label: "Repair / Tune-up", value: 450 },
                { label: "Blended Average", value: 650 },
                { label: "Replacement Focus", value: 1850 },
              ].map((tier) => (
                <button
                  key={tier.label}
                  type="button"
                  onClick={() => setAvgTicket(tier.value)}
                  className={`p-2.5 rounded-xl border text-xs font-semibold text-center transition-all tabular-nums ${
                    avgTicket === tier.value
                      ? "border-brand-blue bg-brand-light text-brand-cobalt shadow-subtle"
                      : "border-surface-border bg-white text-slate-700 hover:border-slate-300"
                  }`}
                >
                  <span className="block text-[11px] font-normal text-slate-500 mb-0.5">
                    {tier.label}
                  </span>
                  <span>${tier.value.toLocaleString("en-US")}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Calculated Revenue Display (3-tier dark depth) */}
        <div className="lg:col-span-5 bg-navy-950 p-6 sm:p-7 rounded-2xl border border-white/[0.08] ring-1 ring-inset ring-white/[0.05] text-white space-y-5 shadow-dark">
          <div className="space-y-1.5">
            <span className="font-mono text-[11px] uppercase tracking-wider text-blue-400 font-semibold">
              Projected Monthly Opportunity
            </span>
            <div className="text-3xl sm:text-4xl font-bold text-white tracking-tight flex items-baseline gap-1.5 font-mono tabular-nums">
              <span className="text-emerald-400">
                ${estimatedRecoveredRevenue.toLocaleString("en-US")}
              </span>
              <span className="text-xs text-slate-400 font-sans font-normal">/ month</span>
            </div>
            <p className="text-xs text-slate-400 pt-1 leading-relaxed tabular-nums">
              Illustrative model based on{" "}
              <strong className="text-slate-200">~{capturedJobsMonthly} jobs/mo</strong> at
              conservative conversion benchmarks.
            </p>
          </div>

          <div className="pt-3 border-t border-white/[0.08] space-y-2 text-xs">
            <div className="flex justify-between items-center text-slate-300">
              <span>Annualized Opportunity:</span>
              <span className="font-mono font-bold text-white tabular-nums">
                ${(estimatedRecoveredRevenue * 12).toLocaleString("en-US")} / yr
              </span>
            </div>
            <div className="flex justify-between items-center text-slate-300">
              <span>Answering Latency:</span>
              <span className="font-mono text-emerald-400 font-semibold tabular-nums">
                &lt; 0.5s (Ring 1)
              </span>
            </div>
          </div>

          <Link
            href="/book-consultation"
            className="w-full py-3 px-4 rounded-xl text-xs font-semibold bg-brand-blue hover:bg-brand-hover text-white transition-all flex items-center justify-center gap-2 shadow-btn-primary text-center"
          >
            <span>Discuss Your Call Routing</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
