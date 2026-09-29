import type { Metadata } from "next";
import AppHomeComponent from "@/components/AppHomeComponent";

export const metadata: Metadata = {
  title: "Open App",
  description: "Access the Hospiman app.",
  alternates: { canonical: "/app" },
  robots: { index: false, follow: false },
};

export default function AppHomePageComponent() {
  return <AppHomeComponent />;
}
