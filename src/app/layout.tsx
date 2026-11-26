import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageTransition } from "@/components/PageTransition";

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
    "Halvonex is an AI automation agency powered by AI Voice Agents. We build, deploy, and manage 24/7 incoming call handling, lead capture, qualification, appointment booking, CRM management, and automated follow-ups for HVAC contractors.",
  keywords: [
    "AI automation agency",
    "AI Voice Agents for HVAC",
    "HVAC lead capture automation",
    "automated appointment booking HVAC",
    "HVAC CRM management",
    "automated customer follow-ups",
  ],
  authors: [{ name: "Halvonex Inc." }],
  creator: "Halvonex",
  metadataBase: new URL("https://halvonex.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://halvonex.com",
    siteName: "Halvonex",
    title: "Halvonex | AI Automation Agency Powered by AI Voice Agents",
    description:
      "Stop losing HVAC customers to missed calls. Our AI Voice Agents handle incoming calls, capture and qualify leads, book appointments, manage your CRM, and automate follow-ups.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Halvonex AI Automation Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Halvonex | AI Automation Agency Powered by AI Voice Agents",
    description:
      "Stop losing HVAC customers to missed calls. We build, deploy, and manage custom AI Voice Agents for HVAC businesses.",
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
    "AI automation agency powered by AI Voice Agents that handles incoming calls, lead capture, lead qualification, appointment booking, CRM management, and automated follow-ups for HVAC companies in the United States.",
  areaServed: {
    "@type": "Country",
    name: "United States",
  },
  serviceType: [
    "AI Voice Agents Implementation",
    "Incoming Call Handling",
    "Lead Capture and Qualification",
    "Appointment Booking Automation",
    "CRM Management",
    "Automated Follow-ups",
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
          <PageTransition>{children}</PageTransition>
        </main>
        <Footer />
      </body>
    </html>
  );
}
