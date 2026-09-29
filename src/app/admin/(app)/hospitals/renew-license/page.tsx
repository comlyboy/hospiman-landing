import type { Metadata } from "next";
import RevealComponent from "@/components/RevealComponent";
import { licensePlanEntries } from "@/lib/license-plans-data";

export const metadata: Metadata = {
  title: "Choose License Plan",
  description: "License plans available to renew your Hospiman subscription.",
  alternates: { canonical: "/admin/hospitals/renew-license" },
  robots: { index: false, follow: false },
};

export default function AdminRenewLicensePageComponent() {
  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4">
      <RevealComponent>
        <div>
          <h1 className="text-xl font-bold text-ink">Choose License Plan</h1>
          <p className="mt-1 text-sm text-ink-muted">Pick the plan that fits CHRIS MED [1000].</p>
        </div>
      </RevealComponent>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        {licensePlanEntries.map((plan, index) => (
          <RevealComponent key={plan.name} delayMs={index * 60}>
            <div className="flex h-full flex-col overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/10">
              <div className="flex flex-1 flex-col gap-3 p-5">
                <div>
                  <div className="text-[11px] text-ink-muted">Name</div>
                  <div className="text-[15px] font-bold text-ink">{plan.name}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Amount (NGN)</div>
                  <div className="text-sm font-semibold text-ink">₦{plan.amount}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Duration (Months)</div>
                  <div className="text-sm font-semibold text-ink">{plan.durationMonths}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Max Patient Size</div>
                  <div className="text-sm font-semibold text-ink">{plan.maxPatientSize}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Description</div>
                  <div className="text-sm font-semibold text-ink">{plan.description}</div>
                </div>
              </div>
              <button
                type="button"
                className="w-full bg-brand-500 py-3.5 text-sm font-bold text-white transition-colors duration-200 hover:bg-brand-600"
              >
                Proceed to Payment
              </button>
            </div>
          </RevealComponent>
        ))}
      </div>
    </div>
  );
}
