import type { Metadata } from "next";
import AppPatientsComponent from "@/components/AppPatientsComponent";

export const metadata: Metadata = {
  title: "Patients",
  description: "Search and manage hospital patients.",
  alternates: { canonical: "/app/patients" },
  robots: { index: false, follow: false },
};

export default function AppPatientsPageComponent() {
  return <AppPatientsComponent />;
}
