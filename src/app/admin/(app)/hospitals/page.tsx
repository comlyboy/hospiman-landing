import type { Metadata } from "next";
import Link from "next/link";
import RevealComponent from "@/components/RevealComponent";
import HospitalCardComponent from "@/components/HospitalCardComponent";
import { hospitalEntries } from "@/lib/hospitals-data";

export const metadata: Metadata = {
  title: "My Hospitals",
  description: "Hospitals registered to your Hospiman account.",
  alternates: { canonical: "/admin/hospitals" },
  robots: { index: false, follow: false },
};

export default function AdminHospitalsPageComponent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4">
      <RevealComponent>
        <Link
          href="/admin/hospitals/add"
          className="flex items-center gap-2 self-start rounded-lg px-2 py-1.5 text-sm font-bold text-brand-700 transition-colors duration-200 hover:bg-brand-50"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          </svg>
          Add Hospital
        </Link>
      </RevealComponent>

      <div className="flex flex-col gap-4">
        {hospitalEntries.map((hospital, index) => (
          <RevealComponent key={hospital.shortCode} delayMs={index * 60}>
            <HospitalCardComponent hospital={hospital} />
          </RevealComponent>
        ))}
      </div>
    </div>
  );
}
