import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "ICanPitch Calculator Guides - Free Startup Tools";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          background:
            "linear-gradient(135deg, #4f46e5 0%, #7c3aed 50%, #ec4899 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            background: "rgba(255,255,255,0.95)",
            borderRadius: "24px",
            padding: "48px 64px",
            maxWidth: "1000px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
          }}
        >
          <div
            style={{
              fontSize: "22px",
              fontWeight: 600,
              color: "#7c3aed",
              textAlign: "center",
              textTransform: "uppercase" as const,
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            Calculator Guides
          </div>
          <div
            style={{
              fontSize: "48px",
              fontWeight: 800,
              background: "linear-gradient(90deg, #4f46e5, #7c3aed)",
              backgroundClip: "text",
              color: "transparent",
              textAlign: "center",
              lineHeight: 1.2,
            }}
          >
            Free Startup Calculators
          </div>
          <div
            style={{
              fontSize: "20px",
              color: "#6b7280",
              textAlign: "center",
              marginTop: "16px",
              lineHeight: 1.5,
            }}
          >
            SAFEs, burn rate, equity splits, option pools, and valuations
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
