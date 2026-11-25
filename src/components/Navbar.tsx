"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "./Logo";
import { Menu, X, ArrowRight, PhoneCall } from "lucide-react";

const NAV_LINKS = [
  { name: "Services", href: "/services" },
  { name: "Our Process", href: "/how-it-works" },
  { name: "Industries", href: "/#industries" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 12);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-200 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md border-b border-surface-border shadow-subtle"
          : "bg-white border-b border-surface-border"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-3.5">
          {/* Logo & Category indicator */}
          <div className="flex items-center gap-5">
            <Logo size="md" />
            <span className="hidden xl:inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-mono font-medium bg-surface-subtle text-slate-700 border border-surface-border">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
              <span>AI AUTOMATION AGENCY // HVAC</span>
            </span>
          </div>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-1 lg:space-x-2" aria-label="Main Navigation">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 bg-surface-muted font-semibold"
                      : "text-slate-600 hover:text-slate-900 hover:bg-surface-subtle"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>

          {/* Primary Action CTA */}
          <div className="hidden md:flex items-center">
            <Link
              href="/book-consultation"
              className="inline-flex items-center justify-center gap-2 px-4 py-2 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover rounded-lg shadow-btn-primary transition-all duration-150 active:scale-[0.99]"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex md:hidden items-center gap-2">
            <Link
              href="/book-consultation"
              className="px-3 py-1.5 text-xs font-semibold text-white bg-brand-blue rounded-md shadow-btn-primary"
            >
              Consultation
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-700 hover:text-slate-900 hover:bg-surface-subtle"
              aria-expanded={isOpen}
              aria-label="Toggle navigation menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden border-b border-surface-border bg-white px-4 pt-3 pb-6 space-y-3">
          <div className="grid gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-2.5 rounded-lg text-base font-medium transition-colors ${
                    isActive
                      ? "text-slate-900 bg-surface-muted font-semibold"
                      : "text-slate-700 hover:bg-surface-subtle"
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </div>

          <div className="pt-3 border-t border-surface-border space-y-2.5">
            <Link
              href="/contact"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-medium text-slate-900 bg-surface-subtle border border-surface-border rounded-lg"
            >
              <PhoneCall className="w-4 h-4 text-slate-500" />
              <span>Contact Our Team</span>
            </Link>
            <Link
              href="/book-consultation"
              className="flex items-center justify-center gap-2 w-full px-4 py-2.5 text-sm font-semibold text-white bg-brand-blue hover:bg-brand-hover rounded-lg shadow-btn-primary"
            >
              <span>Book a Free Consultation</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
