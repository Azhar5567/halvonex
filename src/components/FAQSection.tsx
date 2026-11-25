"use client";

import React, { useState } from "react";
import { ChevronDown, HelpCircle } from "lucide-react";

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
    question: "Does the AI receptionist answer calls after business hours and on weekends?",
    answer:
      "Yes. We configure your automated receptionist according to your operational preferences: 24/7/365 around the clock, strictly after hours and weekends, or during daytime overflow when your office dispatchers are on other calls.",
  },
  {
    question: "Does this replace our existing phone number or carrier?",
    answer:
      "No. You keep your existing business phone number, carrier, and phone system. We simply configure conditional call forwarding so incoming calls roll over to your Halvonex voice system when needed.",
  },
  {
    question: "Can the system transfer emergency calls to a human technician?",
    answer:
      "Yes. During our custom setup phase, we program explicit safety and emergency transfer triggers. If a caller reports a gas leak, water line break, or carbon monoxide alarm, or specifically asks for an on-call manager, Halvonex immediately warm-transfers the call to your designated emergency line.",
  },
  {
    question: "Which CRMs and scheduling software do you integrate with?",
    answer:
      "We integrate with standard field service management platforms, CRMs, and business calendars via secure API and webhook connections so leads and appointments sync directly.",
  },
  {
    question: "How long does implementation and setup take?",
    answer:
      "Because we handle the technical build for you, typical onboarding takes between 5 to 10 business days. This includes discovery, custom prompt scripting, carrier forwarding configuration, CRM connection, and scenario testing.",
  },
  {
    question: "Who manages and maintains the system after launch?",
    answer:
      "Halvonex does. As an ongoing technology partner, we monitor call health, review sample transcriptions, update seasonal schedules, and make prompt or workflow adjustments whenever your service offerings or technician rosters change.",
  },
  {
    question: "How does pricing work for Halvonex services?",
    answer:
      "Our services consist of an initial implementation and setup fee covering custom engineering, integration, and testing, followed by a managed monthly service plan covering continuous call capacity, telephony infrastructure, and ongoing technical maintenance. We provide a transparent scope during your free consultation.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-20 bg-surface-light border-y border-surface-border">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-left">
        <div className="max-w-2xl mb-12 text-left">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-brand-light text-brand-blue mb-3">
            <HelpCircle className="w-3.5 h-3.5" />
            <span>Service & Implementation FAQ</span>
          </div>
          <h2 className="text-3xl font-bold text-navy-900 tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-muted mt-3 text-base">
            Clear, honest answers about our managed AI automation services and partnership model.
          </p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={faq.question}
                className="bg-white rounded-xl border border-surface-border overflow-hidden transition-all duration-150"
              >
                <button
                  type="button"
                  onClick={() => toggle(idx)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 font-semibold text-navy-900 hover:text-brand-blue transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="text-base sm:text-lg">{faq.question}</span>
                  <ChevronDown
                    className={`w-5 h-5 text-muted shrink-0 transition-transform duration-200 ${
                      isOpen ? "transform rotate-180 text-brand-blue" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 text-sm text-muted-dark leading-relaxed border-t border-surface-subtle">
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
