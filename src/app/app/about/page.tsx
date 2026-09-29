import type { Metadata } from "next";
import AppAboutComponent from "@/components/AppAboutComponent";

export const metadata: Metadata = {
  title: "About",
  description: "About the Hospiman app.",
  alternates: { canonical: "/app/about" },
  robots: { index: false, follow: false },
};

export default function AppAboutPageComponent() {
  return <AppAboutComponent />;
}
