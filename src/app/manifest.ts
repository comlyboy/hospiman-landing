import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/site-config";

export const dynamic = "force-static";

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
      {
        src: "/hospiman-mark.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
