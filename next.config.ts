import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    // next/image's default loader needs a running server; a static export
    // has none, so images are served as-is instead of being re-encoded.
    unoptimized: true,
  },
};

export default nextConfig;
