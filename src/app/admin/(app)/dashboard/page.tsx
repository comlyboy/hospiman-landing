import type { Metadata } from "next";
import AdminStatCardComponent from "@/components/AdminStatCardComponent";
import RevealComponent from "@/components/RevealComponent";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Hospiman admin dashboard.",
  alternates: { canonical: "/admin/dashboard" },
  robots: { index: false, follow: false },
};

export default function AdminDashboardPageComponent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-8 p-4">
        <RevealComponent>
          <div>
            <h1 className="text-2xl font-bold text-ink">Overview</h1>
            <p className="mt-1 text-sm text-ink-muted">A quick snapshot of your hospital&apos;s account.</p>
          </div>
        </RevealComponent>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <RevealComponent delayMs={0}>
            <AdminStatCardComponent
              tone="brand"
              value="31 Dec, 2026"
              label="License Expires"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M4 10h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              }
            />
          </RevealComponent>

          <RevealComponent delayMs={60}>
            <AdminStatCardComponent
              tone="blue"
              value="Standard — Annual"
              label="Current License Plan"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path d="m12 3 8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
                  <path d="m8.5 12 2.3 2.3L15.5 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              }
            />
          </RevealComponent>

          <RevealComponent delayMs={120}>
            <AdminStatCardComponent
              tone="emerald"
              value="8"
              label="Registered Patients"
              icon={
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M3 20c1-3.5 3.5-5.5 6-5.5s5 2 6 5.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                  <path d="M16 8.5a3 3 0 1 1 3.5 5.8M19 20c-.5-2-1.5-3.6-3-4.6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                </svg>
              }
            />
          </RevealComponent>
        </div>

        <RevealComponent delayMs={160}>
          <div className="flex flex-col items-start justify-between gap-5 rounded-2xl border border-brand-500/20 bg-brand-50 p-6 sm:flex-row sm:items-center">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-brand-500">
                <svg width="21" height="21" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <rect x="3" y="6" width="18" height="13" rx="2" stroke="#ffffff" strokeWidth="1.8" />
                  <circle cx="16" cy="12.5" r="2.2" stroke="#ffffff" strokeWidth="1.6" />
                </svg>
              </span>
              <div>
                <div className="text-2xl font-bold text-ink">₦4,917</div>
                <div className="text-sm text-ink-muted">Current Wallet Balance (NGN)</div>
              </div>
            </div>
            <button
              type="button"
              className="w-full rounded-[9px] bg-brand-500 px-6 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700 sm:w-auto"
            >
              Fund Wallet
            </button>
          </div>
        </RevealComponent>
    </div>
  );
}
