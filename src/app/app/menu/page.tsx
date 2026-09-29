import type { Metadata } from "next";
import AppMenuComponent from "@/components/AppMenuComponent";

export const metadata: Metadata = {
  title: "Menu",
  description: "All Hospiman app modules.",
  alternates: { canonical: "/app/menu" },
  robots: { index: false, follow: false },
};

export default function AppMenuPageComponent() {
  return <AppMenuComponent />;
}
