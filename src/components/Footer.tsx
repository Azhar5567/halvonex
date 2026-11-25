import React from "react";
import Link from "next/link";
import { Logo } from "./Logo";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy-950 text-white border-t border-white/[0.08]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div className="md:col-span-2 space-y-3">
            <Logo variant="light" size="md" />
            <p className="text-sm text-slate-400 max-w-sm leading-relaxed">
              Halvonex builds, deploys, and manages AI receptionist and lead capture systems for HVAC companies across the United States.
            </p>
            <div className="text-xs text-slate-400 pt-1 space-y-1">
              <p>Location: United States</p>
              <p>
                Phone:{" "}
                <a href="tel:+14056488273" className="hover:text-white transition-colors tabular-nums">
                  +1 (405) 648-8273
                </a>
              </p>
              <p>
                Email:{" "}
                <a href="mailto:inquiries@halvonex.com" className="hover:text-white transition-colors">
                  inquiries@halvonex.com
                </a>
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Company
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  Our Process
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
              <li>
                <Link href="/book-consultation" className="hover:text-white transition-colors">
                  Book Consultation
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-300 mb-3">
              Legal
            </h4>
            <ul className="space-y-2 text-sm text-slate-400">
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy (Draft)
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms of Service (Draft)
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/[0.08] text-xs text-slate-500 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p suppressHydrationWarning>© {currentYear} Halvonex Inc. All rights reserved.</p>
          <p>AI Automation Services for US HVAC Contractors</p>
        </div>
      </div>
    </footer>
  );
}
