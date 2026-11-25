import React from "react";
import { BookingForm } from "@/components/BookingForm";
import { CheckCircle2, ShieldCheck, Clock, Calendar, Users, PhoneCall, Wrench, Database } from "lucide-react";

export const metadata = {
  title: "Book a Free Consultation | Halvonex AI Automation Agency",
  description:
    "Schedule a 15-minute consultation with Halvonex. We’ll assess your HVAC call volume, review your phone carrier, and map out a custom automation plan.",
};

export default function BookConsultationPage() {
  return (
    <div className="flex flex-col">
      <section className="pt-16 pb-20 bg-surface-light border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left max-w-3xl">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-blue mb-4">
            <Calendar className="w-3.5 h-3.5" />
            <span>Complimentary 15-Minute Technical Review</span>
          </div>
          <h1 className="text-4xl sm:text-5xl font-extrabold text-navy-900 tracking-tight leading-tight">
            Schedule your free automation consultation.
          </h1>
          <p className="mt-5 text-lg text-muted-dark leading-relaxed">
            Speak directly with an automation engineer. We’ll examine your current phone setup, evaluate your dispatch bottlenecks, and outline the custom system we can build and manage for you.
          </p>
        </div>
      </section>

      <section className="py-20 lg:py-24 bg-white border-b border-surface-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            {/* Left side: What we cover */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-navy-900 tracking-tight">
                  What we cover during our consultation
                </h2>
                <p className="text-sm text-muted-dark mt-2 leading-relaxed">
                  We don’t do high-pressure sales pitches. This is a practical, direct technical review of your HVAC operations.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-surface-light border border-surface-border flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    1
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">Inbound Call & Overflow Analysis</h4>
                    <p className="text-xs text-muted-dark mt-0.5 leading-relaxed">
                      We examine your missed call rates, weekend emergency requests, and peak seasonal call spikes.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-surface-border flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    2
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">Phone Carrier & PBX Forwarding Check</h4>
                    <p className="text-xs text-muted-dark mt-0.5 leading-relaxed">
                      We check your current phone lines (RingCentral, Dialpad, Vonage, AT&T, Spectrum, or local PBX) to ensure seamless zero-downtime routing.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-surface-light border border-surface-border flex items-start gap-3.5">
                  <div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center shrink-0 font-bold text-xs">
                    3
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-navy-900">CRM & Dispatch Integration Mapping</h4>
                    <p className="text-xs text-muted-dark mt-0.5 leading-relaxed">
                      We map how customer addresses, diagnostic notes, and confirmed booking windows will sync into ServiceTitan, Jobber, Housecall Pro, or your calendars.
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-surface-subtle border border-surface-border space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-navy-900">
                  Who should attend this call?
                </h4>
                <div className="space-y-2 text-xs text-muted-dark">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>HVAC Business Owners wanting to stop losing jobs to competitors</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Operations & Dispatch Managers needing relief from repetitive phone intake</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    <span>Customer Service Directors managing peak summer/winter call volumes</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right side: The Consultation Booking Form */}
            <div className="lg:col-span-7">
              <BookingForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
