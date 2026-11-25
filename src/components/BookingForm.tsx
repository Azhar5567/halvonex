"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ShieldCheck, ArrowRight, Info } from "lucide-react";

interface FormData {
  fullName: string;
  businessName: string;
  businessEmail: string;
  phoneNumber: string;
  website: string;
  numTechnicians: string;
  businessChallenge: string;
  preferredTime: string;
}

export function BookingForm() {
  const [formData, setFormData] = useState<FormData>({
    fullName: "",
    businessName: "",
    businessEmail: "",
    phoneNumber: "",
    website: "",
    numTechnicians: "2-5",
    businessChallenge: "Missed calls after business hours and weekends",
    preferredTime: "Morning (9am - 12pm EST)",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");
  const [deliveryMode, setDeliveryMode] = useState<"live" | "preview">("preview");
  const [submittedData, setSubmittedData] = useState<FormData | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof FormData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = "Work email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = "Enter a valid work email address";
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.replace(/\D/g, "").length < 10) {
      errs.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!formData.numTechnicians) errs.numTechnicians = "Please select team size";
    if (!formData.businessChallenge) errs.businessChallenge = "Please select primary challenge";
    if (!formData.preferredTime) errs.preferredTime = "Please select preferred time";

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/consultation", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to submit consultation request.");
      }

      setDeliveryMode(data.mode === "live" ? "live" : "preview");
      setSubmittedData({ ...formData });
      setStatus("success");
    } catch (err) {
      setServerError(err instanceof Error ? err.message : "Network error occurred.");
      setStatus("error");
    }
  };

  if (status === "success" && submittedData) {
    return (
      <div className="bg-white p-8 rounded-2xl border border-surface-border shadow-elevated text-left space-y-6">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center border border-emerald-500/20">
          <CheckCircle2 className="w-6 h-6" />
        </div>

        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {deliveryMode === "live"
              ? "Consultation Request Received"
              : "Consultation Request Validated"}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. Your consultation request for <strong className="text-slate-900">{submittedData.businessName}</strong> has been processed by <code className="font-mono text-xs">/api/consultation</code>.
          </p>
        </div>

        {deliveryMode === "preview" && (
          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border space-y-2 text-xs">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Info className="w-4 h-4 text-brand-blue" />
              <span>Backend Integration Status Notice</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              The server endpoint validated your submission, but no <code className="font-mono">RESEND_API_KEY</code> or <code className="font-mono">LEAD_WEBHOOK_URL</code> environment variable is configured yet. Add either key in Vercel Project Settings to deliver leads automatically.
            </p>
            <div className="p-2.5 rounded bg-white border border-surface-border font-mono text-[11px] text-slate-700 overflow-x-auto">
              <code>
                {JSON.stringify(
                  {
                    agencyService: "HVAC AI Receptionist & Intake Automation",
                    contact: submittedData.fullName,
                    company: submittedData.businessName,
                    email: submittedData.businessEmail,
                    phone: submittedData.phoneNumber,
                    technicians: submittedData.numTechnicians,
                    operationalFocus: submittedData.businessChallenge,
                    preferredWindow: submittedData.preferredTime,
                  },
                  null,
                  2
                )}
              </code>
            </div>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSubmittedData(null);
          }}
          className="text-xs font-semibold text-brand-cobalt hover:text-brand-hover underline cursor-pointer"
        >
          &larr; Submit another inquiry
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-elevated text-left space-y-5"
      noValidate
    >
      <div className="border-b border-surface-border pb-4">
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">
          Book a Free 15-Minute Automation Consultation
        </h3>
        <p className="text-xs text-slate-600 mt-1 leading-relaxed">
          Speak with our engineering team to review your phone volume, carrier setup, and custom implementation plan.
        </p>
      </div>

      {status === "error" && serverError && (
        <div className="p-3.5 rounded-lg bg-red-50 border border-red-200 text-xs text-red-700 flex items-center gap-2">
          <AlertCircle className="w-4 h-4 shrink-0" />
          <span>{serverError}</span>
        </div>
      )}

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            placeholder="John Miller"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong bg-white"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            HVAC Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Miller Heating & Air"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.businessName ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong bg-white"
            }`}
          />
          {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Work Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="john@millerair.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.businessEmail ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong bg-white"
            }`}
          />
          {errors.businessEmail && <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Direct Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="(555) 234-5678"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.phoneNumber ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong bg-white"
            }`}
          />
          {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Company Website (Optional)
          </label>
          <input
            type="text"
            value={formData.website}
            onChange={(e) => setFormData({ ...formData, website: e.target.value })}
            placeholder="www.millerair.com"
            className="w-full px-3.5 py-2.5 rounded-lg border border-surface-borderStrong bg-white text-sm text-slate-900 placeholder:text-slate-400 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
          />
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Number of Technicians in Field <span className="text-red-500">*</span>
          </label>
          <select
            value={formData.numTechnicians}
            onChange={(e) => setFormData({ ...formData, numTechnicians: e.target.value })}
            className="w-full px-3.5 py-2.5 rounded-lg border border-surface-borderStrong bg-white text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
          >
            <option value="1">Solo Operator (1 technician)</option>
            <option value="2-5">2 to 5 technicians</option>
            <option value="6-15">6 to 15 technicians</option>
            <option value="16-30">16 to 30 technicians</option>
            <option value="30+">30+ technicians (Multi-branch)</option>
          </select>
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-900 mb-1.5">
          Primary Operational Objective <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.businessChallenge}
          onChange={(e) => setFormData({ ...formData, businessChallenge: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-surface-borderStrong bg-white text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
        >
          <option value="Missed calls after business hours and weekends">
            Missed calls after business hours and weekends
          </option>
          <option value="Daytime peak overflow">
            Daytime phone lines ringing busy while staff is on other calls
          </option>
          <option value="Full turnkey managed answering">
            Full turnkey managed answering service (replace third-party call center)
          </option>
          <option value="Direct CRM appointment scheduling">
            Direct CRM appointment scheduling and lead qualification
          </option>
          <option value="Missed-call SMS recovery">
            Instant missed-call SMS recovery and callback sequences
          </option>
        </select>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-900 mb-1.5">
          Preferred Consultation Time <span className="text-red-500">*</span>
        </label>
        <select
          value={formData.preferredTime}
          onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
          className="w-full px-3.5 py-2.5 rounded-lg border border-surface-borderStrong bg-white text-sm text-slate-900 transition-all focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue"
        >
          <option value="Morning (9am - 12pm EST)">Morning (9:00 AM – 12:00 PM EST)</option>
          <option value="Afternoon (12pm - 3pm EST)">Afternoon (12:00 PM – 3:00 PM EST)</option>
          <option value="Late Afternoon (3pm - 6pm EST)">Late Afternoon (3:00 PM – 6:00 PM EST)</option>
          <option value="Earliest Available">Earliest Available Consultation Window</option>
        </select>
      </div>

      <div className="pt-2">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-btn-primary disabled:opacity-75 disabled:cursor-not-allowed"
        >
          {status === "submitting" ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin" />
              <span>Verifying Schedule...</span>
            </>
          ) : (
            <>
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>

      <div className="flex items-center justify-center gap-2 text-xs text-slate-500 pt-1">
        <ShieldCheck className="w-4 h-4 text-emerald-600" />
        <span>No credit card required. A focused engineering consultation for your HVAC operations.</span>
      </div>
    </form>
  );
}
