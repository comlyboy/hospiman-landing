import { ImageResponse } from "next/og";

export const dynamic = "force-static";
export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#8962bd",
        }}
      >
        <div style={{ display: "flex", fontSize: 220, fontWeight: 700, color: "#ffffff" }}>
          Hi
        </div>
      </div>
    ),
    { ...size }
  );
}
