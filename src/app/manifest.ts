import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

const anyIconSizes = [48, 72, 96, 128, 144, 152, 192, 384, 512];
const maskableIconSizes = [192, 512];

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.legalName,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#fbfafd",
    theme_color: "#2e2140",
    icons: [
      ...anyIconSizes.map((size) => ({
        src: `/icons/icon-${size}.png`,
        sizes: `${size}x${size}`,
        type: "image/png",
        purpose: "any" as const,
      })),
      ...maskableIconSizes.map((size) => ({
        src: `/icons/icon-maskable-${size}.png`,
        sizes: `${size}x${size}`,
        type: "image/png",
        purpose: "maskable" as const,
      })),
    ],
  };
}
