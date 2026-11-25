import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";
import { ShieldCheck, Mail, ArrowUpRight, Wrench } from "lucide-react";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-900 text-white border-t border-navy-800">
      {/* Top Banner / Value Reminder */}
      <div className="border-b border-navy-800/80 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div>
              <p className="text-xs uppercase tracking-wider text-brand-blue font-semibold">
                AI Automation Agency & Technical Partner
              </p>
              <h3 className="text-xl sm:text-2xl font-semibold text-white tracking-tight mt-1">
                Stop losing HVAC jobs to missed calls. We build & manage your intake system.
              </h3>
            </div>
            <Link
              href="/book-consultation"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold bg-white text-navy-900 hover:bg-surface-subtle transition-colors shadow-subtle shrink-0"
            >
              <span>Book a Free Consultation</span>
              <ArrowUpRight className="w-4 h-4 text-navy-900" />
            </Link>
          </div>
        </div>
      </div>

      {/* Main Footer Navigation Columns */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Col */}
          <div className="lg:col-span-2 space-y-4">
            <Logo variant="light" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Halvonex is an AI automation agency. We build, deploy, integrate, and continuously manage custom AI receptionist and business automation systems for HVAC companies across the United States.
            </p>
            <div className="pt-2 text-xs text-slate-400 space-y-2">
              <div className="flex items-center gap-2 text-slate-400">
                <ShieldCheck className="w-4 h-4 text-brand-blue shrink-0" />
                <span>Fully managed turnkey implementation & ongoing maintenance</span>
              </div>
              <div className="flex items-center gap-2 text-slate-400">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Consultations & Inquiries: inquiries@halvonex.com</span>
              </div>
            </div>
          </div>

          {/* Managed Services Column */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Managed Services
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/services#receptionist" className="text-slate-400 hover:text-white transition-colors">
                  AI Receptionist Implementation
                </Link>
              </li>
              <li>
                <Link href="/services#call-automation" className="text-slate-400 hover:text-white transition-colors">
                  Incoming Call Automation
                </Link>
              </li>
              <li>
                <Link href="/services#lead-crm" className="text-slate-400 hover:text-white transition-colors">
                  Lead Capture & CRM Sync
                </Link>
              </li>
              <li>
                <Link href="/services#appointment-booking" className="text-slate-400 hover:text-white transition-colors">
                  Appointment Booking Automation
                </Link>
              </li>
              <li>
                <Link href="/services#missed-call" className="text-slate-400 hover:text-white transition-colors">
                  Missed-Call Follow-up
                </Link>
              </li>
              <li>
                <Link href="/services#ongoing-support" className="text-slate-400 hover:text-white transition-colors">
                  Ongoing System Maintenance
                </Link>
              </li>
            </ul>
          </div>

          {/* Agency & Delivery */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Agency & Delivery
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/how-it-works" className="text-slate-400 hover:text-white transition-colors">
                  Our 6-Step Process
                </Link>
              </li>
              <li>
                <Link href="/#industries" className="text-slate-400 hover:text-white transition-colors">
                  Industries We Serve
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-slate-400 hover:text-white transition-colors">
                  About Halvonex
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="text-slate-400 hover:text-white transition-colors">
                  Schedule Consultation
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-white transition-colors">
                  Contact Our Team
                </Link>
              </li>
            </ul>
          </div>

          {/* Compliance & Governance */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-4">
              Governance
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/privacy" className="text-slate-400 hover:text-white transition-colors">
                  Privacy Policy (Draft)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-slate-400 hover:text-white transition-colors">
                  Terms of Service (Draft)
                </Link>
              </li>
              <li>
                <span className="inline-block mt-2 text-xs text-slate-400 leading-normal">
                  Turnkey service agency. Works alongside your existing carrier and field service software.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-navy-800 text-xs text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p suppressHydrationWarning>© {currentYear} Halvonex Inc. (halvonex.com). Professional AI Automation Services.</p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-slate-300 transition-colors">
              Privacy
            </Link>
            <Link href="/terms" className="hover:text-slate-300 transition-colors">
              Terms
            </Link>
            <Link href="/contact" className="hover:text-slate-300 transition-colors">
              Support & Inquiries
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
