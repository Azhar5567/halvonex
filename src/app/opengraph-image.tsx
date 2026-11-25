import { ImageResponse } from "next/og";

export const alt = "Halvonex | AI Automation Agency for HVAC Companies";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "space-between",
          backgroundColor: "#0B1014",
          padding: "70px 80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "48px",
              height: "48px",
              borderRadius: "12px",
              backgroundColor: "#11181E",
              border: "1px solid #24324E",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#14B8A6",
              fontSize: "26px",
              fontWeight: "bold",
            }}
          >
            H
          </div>
          <span style={{ fontSize: "32px", fontWeight: "bold", color: "#FFFFFF", letterSpacing: "-0.03em" }}>
            Halvonex
          </span>
          <span
            style={{
              marginLeft: "16px",
              fontSize: "14px",
              fontWeight: "600",
              color: "#2DD4BF",
              backgroundColor: "rgba(15, 118, 110, 0.22)",
              padding: "6px 14px",
              borderRadius: "999px",
              border: "1px solid rgba(20, 184, 166, 0.35)",
            }}
          >
            AI Automation Agency for HVAC
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "18px", maxWidth: "900px" }}>
          <h1
            style={{
              fontSize: "56px",
              fontWeight: 800,
              color: "#FFFFFF",
              lineHeight: 1.15,
              letterSpacing: "-0.02em",
              margin: 0,
            }}
          >
            Never Miss Another HVAC Customer.
          </h1>
          <p style={{ fontSize: "24px", color: "#94A3B8", lineHeight: 1.4, margin: 0 }}>
            We design, build, connect, and manage custom 24/7 AI receptionists and dispatch automation for heating and cooling businesses.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "100%",
            borderTop: "1px solid #1E2B35",
            paddingTop: "24px",
          }}
        >
          <span style={{ fontSize: "16px", color: "#64748B" }}>halvonex.com &bull; Managed AI Services for US HVAC Contractors</span>
          <span style={{ fontSize: "16px", color: "#2DD4BF", fontWeight: 600 }}>Turnkey Implementation &bull; Managed Operations</span>
        </div>
      </div>
    ),
    {
      ...size,
    }
  );
}
