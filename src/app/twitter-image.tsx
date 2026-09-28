import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: 512,
          height: 512,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8962bd",
        }}
      >
        <div style={{ display: "flex", position: "relative", width: 512, height: 512 }}>
          <div
            style={{
              position: "absolute",
              left: 148,
              top: 150,
              width: 56,
              height: 212,
              borderRadius: 28,
              background: "#ffffff",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 308,
              top: 150,
              width: 56,
              height: 212,
              borderRadius: 28,
              background: "#ffffff",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 176,
              top: 228,
              width: 160,
              height: 56,
              borderRadius: 28,
              background: "#ffffff",
              display: "flex",
            }}
          />
          <div
            style={{
              position: "absolute",
              left: 366,
              top: 92,
              width: 52,
              height: 52,
              borderRadius: 26,
              background: "#ffffff",
              display: "flex",
            }}
          />
        </div>
      </div>
    ),
    { ...size }
  );
}
