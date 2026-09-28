import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const chips = ["Patient Records", "Billing & Wallet", "EMR"];

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          background: "linear-gradient(135deg, #2e2140 0%, #1c1530 100%)",
          overflow: "hidden",
        }}
      >
        {/* decorative glows */}
        <div
          style={{
            position: "absolute",
            width: 560,
            height: 560,
            borderRadius: 9999,
            background: "rgba(137,98,189,0.35)",
            top: -220,
            right: -160,
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            width: 420,
            height: 420,
            borderRadius: 9999,
            background: "rgba(137,98,189,0.18)",
            bottom: -200,
            left: -140,
            display: "flex",
          }}
        />

        {/* content */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            padding: "0 96px",
            gap: 26,
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 16,
              marginBottom: 6,
            }}
          >
            <div
              style={{
                width: 72,
                height: 72,
                borderRadius: 18,
                background: "#8962bd",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 38,
                fontWeight: 700,
                color: "#ffffff",
                boxShadow: "0 16px 40px rgba(137,98,189,0.45)",
              }}
            >
              Hi
            </div>
            <div style={{ display: "flex", fontSize: 44, fontWeight: 700, color: "#ffffff" }}>
              {siteConfig.name}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 54,
              fontWeight: 700,
              lineHeight: 1.18,
              color: "#ffffff",
              maxWidth: 880,
            }}
          >
            Hospital, clinic &amp; EMR management, on one platform.
          </div>

          <div
            style={{
              display: "flex",
              fontSize: 26,
              color: "rgba(255,255,255,0.72)",
              maxWidth: 760,
            }}
          >
            {siteConfig.description}
          </div>

          <div style={{ display: "flex", gap: 12, marginTop: 14 }}>
            {chips.map((chip) => (
              <div
                key={chip}
                style={{
                  display: "flex",
                  fontSize: 20,
                  color: "rgba(255,255,255,0.9)",
                  border: "1.5px solid rgba(255,255,255,0.3)",
                  borderRadius: 999,
                  padding: "8px 20px",
                }}
              >
                {chip}
              </div>
            ))}
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
