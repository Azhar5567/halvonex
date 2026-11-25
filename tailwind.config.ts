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
          950: "#0B1014",
          900: "#11181E",
          850: "#172129",
          800: "#1E2B35",
          700: "#293A47",
          600: "#3B4F5E",
        },
        brand: {
          cobalt: "#115E59",
          blue: "#0F766E",
          hover: "#115E59",
          light: "#F0FDFA",
          border: "#CCFBF1",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          subtle: "#F5F7F8",
          muted: "#EEF2F4",
          border: "rgba(15, 20, 25, 0.08)",
          borderStrong: "#DCE3E8",
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
        hairline: "0 0 0 1px rgba(15, 20, 25, 0.08)",
        subtle: "0 1px 2px 0 rgba(15, 20, 25, 0.04)",
        card: "0 4px 12px -2px rgba(15, 20, 25, 0.05), 0 1px 3px 0 rgba(15, 20, 25, 0.03)",
        elevated: "0 20px 25px -5px rgba(15, 20, 25, 0.08), 0 8px 10px -6px rgba(15, 20, 25, 0.04)",
        dark: "0 24px 48px -12px rgba(0, 0, 0, 0.5)",
        "btn-primary": "inset 0 1px 0 rgba(255, 255, 255, 0.18), 0 1px 2px rgba(15, 20, 25, 0.14)",
      },
    },
  },
  plugins: [],
};
export default config;
