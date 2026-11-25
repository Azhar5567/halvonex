import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          950: "#070B14",
          900: "#0D1424",
          850: "#141D33",
          800: "#1B263E",
          700: "#24324E",
          600: "#334155",
        },
        brand: {
          cobalt: "#1D4ED8",
          blue: "#2563EB",
          hover: "#1D4ED8",
          light: "#EFF6FF",
          border: "#DBEAFE",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F8FAFC",
          muted: "#F4F6F9",
          border: "rgba(15, 23, 42, 0.08)",
          borderStrong: "#E2E8F0",
          borderDark: "rgba(255, 255, 255, 0.08)",
        },
      },
      fontFamily: {
        sans: [
          "var(--font-inter)",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
        mono: [
          "var(--font-mono)",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      letterSpacing: {
        tightest: "-0.04em",
        tighter: "-0.03em",
        tight: "-0.02em",
      },
      boxShadow: {
        hairline: "0 0 0 1px rgba(15, 23, 42, 0.08)",
        subtle: "0 1px 2px 0 rgba(15, 23, 42, 0.04)",
        card: "0 4px 12px -2px rgba(15, 23, 42, 0.05), 0 1px 3px 0 rgba(15, 23, 42, 0.03)",
        elevated: "0 20px 25px -5px rgba(15, 23, 42, 0.08), 0 8px 10px -6px rgba(15, 23, 42, 0.04)",
        dark: "0 24px 48px -12px rgba(0, 0, 0, 0.5)",
        "btn-primary": "inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(15, 23, 42, 0.12)",
      },
    },
  },
  plugins: [],
};
export default config;
