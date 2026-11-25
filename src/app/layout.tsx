import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Halvonex | AI Automation Agency for HVAC Companies",
    template: "%s | Halvonex",
  },
  description:
    "Halvonex is an AI automation agency and technical partner. We build, deploy, and manage 24/7 AI receptionist and lead management systems for HVAC contractors across the United States.",
  keywords: [
    "HVAC AI automation agency",
    "HVAC AI receptionist services",
    "managed HVAC answering service",
    "HVAC intake automation partner",
    "automated appointment booking HVAC",
    "HVAC dispatch automation services",
  ],
  authors: [{ name: "Halvonex Inc." }],
  creator: "Halvonex",
  metadataBase: new URL("https://halvonex.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://halvonex.com",
    siteName: "Halvonex",
    title: "Halvonex | AI Automation Agency for HVAC Companies",
    description:
      "Stop losing HVAC customers to missed calls. We build, configure, deploy, and manage custom 24/7 AI receptionist and lead management systems for HVAC businesses.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Halvonex HVAC AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halvonex | AI Automation Agency for HVAC Companies",
    description:
      "Stop losing HVAC customers to missed calls. We build, deploy, and manage custom AI receptionist systems for HVAC businesses.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Halvonex",
  url: "https://halvonex.com",
  telephone: "+14056488273",
  description:
    "AI automation agency that builds, deploys, and manages 24/7 AI receptionist, call answering, CRM integration, and appointment scheduling systems for HVAC companies in the United States.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "AI Receptionist Implementation",
    "Incoming Call Automation",
    "HVAC Lead Capture and CRM Integration",
    "Appointment Booking Automation",
    "Missed-Call Follow-up Systems",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`} suppressHydrationWarning>
      <body
        className="min-h-screen flex flex-col font-sans antialiased text-slate-900 bg-white selection:bg-brand-blue selection:text-white"
        suppressHydrationWarning
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[100] focus:px-4 focus:py-2 focus:bg-navy-950 focus:text-white focus:rounded-lg focus:text-xs focus:font-semibold"
        >
          Skip to main content
        </a>
        <Navbar />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
