import type { Metadata } from "next";
import Image from "next/image";
import AdminTopBarComponent from "@/components/AdminTopBarComponent";
import AdminStatCardComponent from "@/components/AdminStatCardComponent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hospiman admin dashboard.",
  alternates: { canonical: "/admin/dashboard" },
  robots: { index: false, follow: false },
};

export default function AdminDashboardPageComponent() {
  return (
    <div className="min-h-screen bg-brand-50">
      <AdminTopBarComponent title="Dashboard" />

      <div className="mx-auto flex max-w-xl flex-col px-4 py-10">
        <Image
          src="/hospiman-logo.png"
          alt={siteConfig.name}
          width={900}
          height={200}
          style={{ height: 44, width: "auto" }}
          className="mx-auto mb-8 opacity-45"
        />

        <button
          type="button"
          className="mb-6 flex items-center justify-between rounded-xl border border-line bg-white px-5 py-4 text-left text-[15px] font-semibold text-ink transition-colors duration-200 hover:border-ink-faint"
        >
          CHRIS MED [1000]
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6" stroke="#1a1523" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <div className="flex flex-col divide-y divide-line border border-line">
          <AdminStatCardComponent value="31 DEC, 2026" label="License Expires" />
          <AdminStatCardComponent value="STANDARD - ANNUAL" label="Current License Plan" />
          <AdminStatCardComponent value="8" label="No of Registered Patients" />
          <AdminStatCardComponent value="4,917" label="Current Wallet (NGN)">
            <button
              type="button"
              className="rounded-md bg-brand-500 px-5 py-2 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95"
            >
              Fund
            </button>
          </AdminStatCardComponent>
        </div>
      </div>
    </div>
  );
}
