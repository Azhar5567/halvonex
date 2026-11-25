"use client";

import React, { useState } from "react";
import { CheckCircle2, AlertCircle, Loader2, ArrowRight, Info } from "lucide-react";

interface ContactFormData {
  fullName: string;
  businessName: string;
  businessEmail: string;
  phoneNumber: string;
  message: string;
}

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    fullName: "",
    businessName: "",
    businessEmail: "",
    phoneNumber: "",
    message: "",
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [serverError, setServerError] = useState<string>("");
  const [deliveryMode, setDeliveryMode] = useState<"live" | "preview">("preview");
  const [submittedData, setSubmittedData] = useState<ContactFormData | null>(null);

  const validate = (): boolean => {
    const errs: Partial<Record<keyof ContactFormData, string>> = {};

    if (!formData.fullName.trim()) errs.fullName = "Full name is required";
    if (!formData.businessName.trim()) errs.businessName = "Business name is required";

    if (!formData.businessEmail.trim()) {
      errs.businessEmail = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.businessEmail)) {
      errs.businessEmail = "Enter a valid email address";
    }

    if (!formData.phoneNumber.trim()) {
      errs.phoneNumber = "Phone number is required";
    } else if (formData.phoneNumber.replace(/\D/g, "").length < 10) {
      errs.phoneNumber = "Enter a valid 10-digit phone number";
    }

    if (!formData.message.trim()) {
      errs.message = "Please include a brief message or question";
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("submitting");
    setServerError("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || "Unable to submit message.");
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
      <div className="bg-white p-8 rounded-2xl border border-surface-border shadow-elevated space-y-6">
        <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-700 flex items-center justify-center border border-emerald-500/20">
          <CheckCircle2 className="w-6 h-6" />
        </div>
        <div>
          <h3 className="text-2xl font-bold text-slate-900 tracking-tight">
            {deliveryMode === "live" ? "Message Received" : "Message Validated"}
          </h3>
          <p className="text-sm text-slate-600 mt-2 leading-relaxed">
            Thank you, <strong className="text-slate-900">{submittedData.fullName}</strong>. Your inquiry regarding <strong className="text-slate-900">{submittedData.businessName}</strong> was received.
          </p>
        </div>

        {deliveryMode === "preview" && (
          <div className="p-4 rounded-xl bg-surface-subtle border border-surface-border text-xs space-y-2">
            <div className="flex items-center gap-2 font-semibold text-slate-900">
              <Info className="w-4 h-4 text-brand-blue" />
              <span>Integration Status Notice</span>
            </div>
            <p className="text-slate-600 leading-relaxed">
              The server endpoint validated your inquiry, but no <code className="font-mono">RESEND_API_KEY</code> or <code className="font-mono">LEAD_WEBHOOK_URL</code> environment variable is configured yet.
            </p>
          </div>
        )}

        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setSubmittedData(null);
          }}
          className="text-xs font-semibold text-brand-cobalt hover:text-brand-hover underline"
        >
          &larr; Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 sm:p-8 rounded-2xl border border-surface-border shadow-elevated space-y-5"
      noValidate
    >
      <div>
        <h3 className="text-xl font-bold text-slate-900 tracking-tight">Send Us a Direct Message</h3>
        <p className="text-xs text-slate-600 mt-1">
          Tell us about your HVAC business or request a free consultation below.
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
            placeholder="Sarah Jenkins"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.fullName ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong"
            }`}
          />
          {errors.fullName && <p className="text-xs text-red-600 mt-1">{errors.fullName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Business Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            value={formData.businessName}
            onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
            placeholder="Apex Climate Systems"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.businessName ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong"
            }`}
          />
          {errors.businessName && <p className="text-xs text-red-600 mt-1">{errors.businessName}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Work Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            value={formData.businessEmail}
            onChange={(e) => setFormData({ ...formData, businessEmail: e.target.value })}
            placeholder="sjenkins@apexclimate.com"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.businessEmail ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong"
            }`}
          />
          {errors.businessEmail && <p className="text-xs text-red-600 mt-1">{errors.businessEmail}</p>}
        </div>

        <div>
          <label className="block text-xs font-semibold text-slate-900 mb-1.5">
            Phone Number <span className="text-red-500">*</span>
          </label>
          <input
            type="tel"
            value={formData.phoneNumber}
            onChange={(e) => setFormData({ ...formData, phoneNumber: e.target.value })}
            placeholder="(404) 555-0199"
            className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
              errors.phoneNumber ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong"
            }`}
          />
          {errors.phoneNumber && <p className="text-xs text-red-600 mt-1">{errors.phoneNumber}</p>}
        </div>
      </div>

      <div>
        <label className="block text-xs font-semibold text-slate-900 mb-1.5">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows={4}
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          placeholder="Tell us about your current call handling setup or questions..."
          className={`w-full px-3.5 py-2.5 rounded-lg border text-sm text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-blue/30 focus:border-brand-blue ${
            errors.message ? "border-red-400 bg-red-50/20" : "border-surface-borderStrong"
          }`}
        />
        {errors.message && <p className="text-xs text-red-600 mt-1">{errors.message}</p>}
      </div>

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full py-3.5 px-6 rounded-lg text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover transition-all flex items-center justify-center gap-2 shadow-btn-primary disabled:opacity-70"
      >
        {status === "submitting" ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            <span>Sending Message...</span>
          </>
        ) : (
          <>
            <span>Send Message</span>
            <ArrowRight className="w-4 h-4" />
          </>
        )}
      </button>
    </form>
  );
}
