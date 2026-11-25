"use client";

import React, { useState } from "react";
import { Phone, Calendar, CheckCircle, Clock, Filter, AlertTriangle, ArrowUpRight, Search, ChevronRight, User, ShieldCheck } from "lucide-react";

interface SampleCall {
  id: string;
  time: string;
  caller: string;
  phone: string;
  category: "Emergency Repair" | "Maintenance" | "Commercial" | "Replacement Quote";
  duration: string;
  status: "Booked" | "Qualified" | "Follow-up Sent";
  address: string;
  assignedTo: string;
  notes: string;
}

const SAMPLE_CALLS: SampleCall[] = [
  {
    id: "CALL-1082",
    time: "12 mins ago",
    caller: "Marcus Vance",
    phone: "(470) 555-8392",
    category: "Emergency Repair",
    duration: "1m 48s",
    status: "Booked",
    address: "712 Highland Ave, Atlanta, GA",
    assignedTo: "Tech 2 (Jake)",
    notes: "Compressor iced over, fan stopped. Reserved 2:00-4:00 PM slot.",
  },
  {
    id: "CALL-1081",
    time: "38 mins ago",
    caller: "Elena Rodriguez",
    phone: "(770) 555-1944",
    category: "Maintenance",
    duration: "2m 10s",
    status: "Booked",
    address: "1830 Westover Terr, Roswell, GA",
    assignedTo: "Tech 4 (Sam)",
    notes: "Pre-season tune-up for 2 heat pumps. Scheduled for Thursday 9:00 AM.",
  },
  {
    id: "CALL-1080",
    time: "1 hour ago",
    caller: "Apex Logistics LLC (Dan)",
    phone: "(678) 555-4011",
    category: "Commercial",
    duration: "3m 04s",
    status: "Qualified",
    address: "400 Industrial Pkwy, Norcross, GA",
    assignedTo: "Senior Estimator",
    notes: "Warehouse rooftop RTU blowing ambient air. Qualified commercial lead.",
  },
  {
    id: "CALL-1079",
    time: "2 hours ago",
    caller: "Patricia Hall",
    phone: "(404) 555-9031",
    category: "Replacement Quote",
    duration: "2m 35s",
    status: "Follow-up Sent",
    address: "249 Peachtree Hills, Atlanta, GA",
    assignedTo: "Sales Desk",
    notes: "18-year-old R-22 system failed inspection. Requested quote callback.",
  },
];

export function ProductDashboardPreview() {
  const [filter, setFilter] = useState<string>("All");
  const [selectedCall, setSelectedCall] = useState<SampleCall>(SAMPLE_CALLS[0]);

  const filteredCalls = filter === "All" 
    ? SAMPLE_CALLS 
    : SAMPLE_CALLS.filter((c) => c.category.includes(filter) || c.status.includes(filter));

  return (
    <div className="w-full bg-white rounded-2xl border border-surface-border shadow-card overflow-hidden text-left">
      {/* Sample data disclosure pill */}
      <div className="bg-surface-subtle px-4 sm:px-6 py-2.5 border-b border-surface-border flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-2 text-slate-700">
          <span className="w-2 h-2 rounded-full bg-brand-blue" />
          <span className="font-semibold text-slate-900">Interactive Sample Dashboard</span>
          <span className="text-slate-500 hidden sm:inline">
            &bull; Illustrative 30-day operating profile
          </span>
        </div>
        <span className="px-2 py-0.5 rounded font-mono text-[11px] font-medium bg-white text-slate-700 border border-surface-border">
          DEMO ENVIRONMENT
        </span>
      </div>

      {/* KPI Metrics Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 border-b border-surface-border divide-y sm:divide-y-0 sm:divide-x divide-surface-border">
        <div className="p-5 sm:p-6 bg-white">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>Total Calls Handled</span>
            <Phone className="w-4 h-4 text-brand-blue" />
          </div>
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">142</span>
            <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              100% ANSWERED
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Sample 30-day volume</p>
        </div>

        <div className="p-5 sm:p-6 bg-white">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>Leads Captured</span>
            <CheckCircle className="w-4 h-4 text-slate-700" />
          </div>
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">129</span>
            <span className="text-xs text-slate-500 font-mono">90.8% qualified</span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Name, address & need verified</p>
        </div>

        <div className="p-5 sm:p-6 bg-white">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>Appointments Booked</span>
            <Calendar className="w-4 h-4 text-brand-blue" />
          </div>
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">84</span>
            <span className="text-[11px] font-mono font-medium text-brand-cobalt bg-brand-light px-1.5 py-0.5 rounded">
              DIRECT SYNC
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Based on route availability</p>
        </div>

        <div className="p-5 sm:p-6 bg-white">
          <div className="flex items-center justify-between text-slate-500 text-xs font-medium mb-1">
            <span>Unanswered Calls</span>
            <Clock className="w-4 h-4 text-slate-400" />
          </div>
          <div className="flex items-baseline gap-2 tabular-nums">
            <span className="text-2xl sm:text-3xl font-bold text-slate-900">0</span>
            <span className="text-[11px] font-mono font-medium text-emerald-700 bg-emerald-500/10 px-1.5 py-0.5 rounded">
              ZERO DROP-OFF
            </span>
          </div>
          <p className="text-[11px] text-slate-500 mt-1">Overnight & peak overflow</p>
        </div>
      </div>

      {/* Main Table + Detail Drawer Section */}
      <div className="grid grid-cols-1 lg:grid-cols-12 bg-white">
        {/* Calls List */}
        <div className="lg:col-span-7 border-r border-surface-border">
          {/* Filter Bar */}
          <div className="p-4 border-b border-surface-border flex flex-wrap items-center justify-between gap-3 bg-surface-light">
            <div className="flex items-center gap-1.5 overflow-x-auto">
              {["All", "Emergency", "Maintenance", "Commercial"].map((item) => (
                <button
                  key={item}
                  type="button"
                  onClick={() => setFilter(item)}
                  className={`px-3 py-1 text-xs font-medium rounded-md transition-colors ${
                    filter === item
                      ? "bg-navy-900 text-white shadow-xs"
                      : "bg-white text-muted hover:text-navy-900 border border-surface-border"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
            <span className="text-xs text-muted">Showing {filteredCalls.length} recent sessions</span>
          </div>

          {/* List items */}
          <div className="divide-y divide-surface-border">
            {filteredCalls.map((call) => {
              const isSelected = selectedCall.id === call.id;
              return (
                <div
                  key={call.id}
                  onClick={() => setSelectedCall(call)}
                  className={`p-4 cursor-pointer transition-all hover:bg-surface-light ${
                    isSelected ? "bg-brand-light/40 border-l-4 border-brand-blue" : ""
                  }`}
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-semibold text-sm text-navy-900">{call.caller}</span>
                      <span className="text-xs text-muted font-mono">{call.phone}</span>
                    </div>
                    <span
                      className={`text-[11px] font-semibold px-2 py-0.5 rounded-full ${
                        call.status === "Booked"
                          ? "bg-emerald-50 text-emerald-700 border border-emerald-200"
                          : call.status === "Qualified"
                          ? "bg-blue-50 text-blue-700 border border-blue-200"
                          : "bg-slate-100 text-slate-700 border border-slate-200"
                      }`}
                    >
                      {call.status}
                    </span>
                  </div>

                  <div className="flex items-center justify-between text-xs text-muted">
                    <div className="flex items-center gap-3">
                      <span className="font-medium text-navy-800">{call.category}</span>
                      <span>&bull;</span>
                      <span>{call.duration}</span>
                    </div>
                    <span className="text-[11px] text-muted">{call.time}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Call Detail Inspector */}
        <div className="lg:col-span-5 p-5 sm:p-6 bg-surface-light/40 space-y-5">
          <div className="flex items-center justify-between border-b border-surface-border pb-3">
            <div>
              <p className="text-xs font-mono text-muted">{selectedCall.id}</p>
              <h4 className="text-base font-semibold text-navy-900 mt-0.5">{selectedCall.caller}</h4>
            </div>
            <span className="px-2.5 py-1 text-xs font-semibold rounded bg-white border border-surface-border text-navy-900 shadow-xs">
              {selectedCall.category}
            </span>
          </div>

          <div className="space-y-3 text-xs">
            <div>
              <span className="text-muted block text-[11px] uppercase tracking-wider font-semibold mb-1">
                Verified Address
              </span>
              <p className="text-navy-900 font-medium bg-white p-2.5 rounded-lg border border-surface-border">
                {selectedCall.address}
              </p>
            </div>

            <div>
              <span className="text-muted block text-[11px] uppercase tracking-wider font-semibold mb-1">
                Dispatch Notes & Diagnosis
              </span>
              <p className="text-navy-900 bg-white p-2.5 rounded-lg border border-surface-border leading-relaxed">
                {selectedCall.notes}
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-1">
              <div className="bg-white p-2.5 rounded-lg border border-surface-border">
                <span className="text-muted text-[11px] block">Dispatcher Assignment</span>
                <span className="text-navy-900 font-semibold mt-0.5 block">{selectedCall.assignedTo}</span>
              </div>
              <div className="bg-white p-2.5 rounded-lg border border-surface-border">
                <span className="text-muted text-[11px] block">Audio Recording</span>
                <span className="text-brand-blue font-semibold mt-0.5 block">Stored & Transcribed</span>
              </div>
            </div>
          </div>

          {/* CRM Handshake Confirmation */}
          <div className="p-3 rounded-lg bg-emerald-50 border border-emerald-200 text-xs text-emerald-900 flex items-start gap-2.5">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Synced with Field Service CRM</p>
              <p className="text-[11px] text-emerald-800/80">
                Contact profile created, job opportunity assigned, and calendar invitation dispatched to customer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
