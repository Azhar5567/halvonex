"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

const FAQS: FAQItem[] = [
  {
    question: "Do we have to build or configure the AI system ourselves?",
    answer:
      "No. Halvonex is a full-service AI automation agency, not a self-service software platform. We handle 100% of the build: writing conversational prompts, training trade terminology, configuring your emergency rules, connecting your phone carrier, and testing workflows before launch.",
  },
  {
    question: "Do the AI Voice Agents answer calls after business hours and on weekends?",
    answer:
      "Yes. We configure your AI Voice Agents according to your operational preferences: 24/7/365 around the clock, strictly after hours and weekends, or during daytime overflow when your office team is on other calls.",
  },
  {
    question: "Which CRMs and scheduling software do you integrate with?",
    answer:
      "We integrate with standard field service management platforms, CRMs, and business calendars via secure API and webhook connections so leads and appointments sync directly.",
  },
  {
    question: "How long does implementation and setup take?",
    answer:
      "Because we handle the technical build for you, typical onboarding takes between 5 to 10 business days depending on your existing phone system and workflow complexity.",
  },
  {
    question: "Who manages and maintains the system after launch?",
    answer:
      "Halvonex does. As an ongoing technology partner, we monitor call health, review sample transcriptions, update seasonal schedules, and make prompt or workflow adjustments whenever your service offerings or technician rosters change.",
  },
  {
    question: "How does pricing work for Halvonex services?",
    answer:
      "Our services consist of an initial implementation and setup fee covering custom engineering, integration, and testing, followed by a managed monthly service plan covering continuous call capacity and ongoing maintenance. We provide a transparent scope during your free consultation.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-white border-b border-surface-border">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-4 text-left">
          <p className="font-mono text-xs uppercase tracking-wider text-slate-500 mb-2">
            FAQ
          </p>
          <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
            Common questions.
          </h2>
          <p className="text-sm text-slate-600 mt-3 leading-relaxed">
            Clear answers about our managed AI automation services and implementation model.
          </p>
        </div>

        <div className="lg:col-span-8 divide-y divide-surface-border border-t border-b border-surface-border">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className="py-1">
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full py-4 text-left flex items-center justify-between gap-4 font-medium text-slate-900 hover:text-brand-cobalt transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-sm sm:text-base">{faq.question}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-brand-cobalt" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-5 text-sm text-slate-600 leading-relaxed max-w-2xl">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
