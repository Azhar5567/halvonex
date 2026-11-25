import React from "react";
import Link from "next/link";

interface LogoProps {
  variant?: "light" | "dark";
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function Logo({ variant = "dark", className = "", size = "md" }: LogoProps) {
  const isLight = variant === "light";
  
  const iconSizes = {
    sm: "w-6 h-6",
    md: "w-7 h-7",
    lg: "w-9 h-9",
  };

  const textSizes = {
    sm: "text-lg",
    md: "text-xl",
    lg: "text-2xl",
  };

  return (
    <Link href="/" className={`inline-flex items-center gap-2.5 font-bold tracking-tight select-none group ${className}`}>
      {/* Precision Geometric Symbol: Hexagonal flow mark representing automated dispatch & system intelligence */}
      <div className={`relative flex items-center justify-center ${iconSizes[size]} rounded-lg bg-navy-800 text-white shadow-sm ring-1 ring-white/10 group-hover:ring-brand-blue/50 transition-all duration-200`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-4 h-4 text-brand-blue"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          {/* Subtle geometric H with flow lines */}
          <path d="M6 4v16" className="text-white stroke-white" />
          <path d="M18 4v16" className="text-white stroke-white" />
          <path d="M6 12h12" className="text-brand-blue stroke-[#356DF3]" strokeWidth="2.5" />
          <circle cx="12" cy="12" r="2" fill="#356DF3" className="stroke-[#356DF3]" />
        </svg>
      </div>

      <div className="flex flex-col leading-none">
        <span
          className={`font-semibold tracking-[-0.03em] ${textSizes[size]} ${
            isLight ? "text-white" : "text-navy-900"
          }`}
        >
          Halvonex
        </span>
      </div>
    </Link>
  );
}
