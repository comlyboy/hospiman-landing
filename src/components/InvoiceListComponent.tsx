"use client";

import { useState } from "react";
import RevealComponent from "@/components/RevealComponent";
import { invoiceEntries, type InvoiceStatus, type InvoiceCategory } from "@/lib/invoices-data";

const statusStyles: Record<InvoiceStatus, string> = {
  ON_TRANSACTION: "bg-amber-50 text-amber-700",
  PAID: "bg-emerald-50 text-emerald-700",
};

const categoryStyles: Record<InvoiceCategory, string> = {
  HOSPIMAN_LICENSE: "bg-brand-50 text-brand-700",
  SMS_RECHARGE: "bg-sky-50 text-sky-700",
};

export default function InvoiceListComponent() {
  const [query, setQuery] = useState("");

  const filtered = invoiceEntries.filter((entry) =>
    `${entry.invoiceNo} ${entry.category} ${entry.date}`.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="mx-auto flex max-w-3xl flex-col gap-6 px-6 py-8">
      <RevealComponent>
        <div className="relative">
          <svg
            width="17"
            height="17"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-4 -translate-y-1/2 text-ink-faint"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="m20 20-3.5-3.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            id="admin-search-input"
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search invoices…"
            className="w-full rounded-xl border border-line bg-white py-3 pr-4 pl-11 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
        </div>
      </RevealComponent>

      <div className="flex flex-col gap-4">
        {filtered.map((entry, index) => (
          <RevealComponent key={`${entry.invoiceNo}-${index}`} delayMs={Math.min(index * 40, 300)}>
            <div className="overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/10">
              <div className="flex flex-col gap-3 p-5">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="text-[15px] font-bold text-ink">Invoice #{entry.invoiceNo}</div>
                    <div className="text-xs text-ink-muted">{entry.date}</div>
                  </div>
                  <span className={`rounded-full px-3 py-1 text-[11px] font-bold ${statusStyles[entry.status]}`}>
                    {entry.status.replace("_", " ")}
                  </span>
                </div>

                <div className="flex flex-wrap items-center gap-2">
                  <span className={`rounded-md px-2.5 py-1 text-[11px] font-bold ${categoryStyles[entry.category]}`}>
                    {entry.category.replace("_", " ")}
                  </span>
                  <span className="text-xs text-ink-muted">Remark: {entry.remark}</span>
                </div>
              </div>

              <div className="border-t border-line bg-brand-50/50 px-5 py-2 text-[11px] font-bold tracking-wide text-ink-muted uppercase">
                Invoice Items (1)
              </div>
              <div className="grid grid-cols-3 gap-2 px-5 py-3 text-sm">
                <div>
                  <div className="text-[11px] text-ink-muted">Amount</div>
                  <div className="font-semibold text-ink">₦{entry.amount}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Quantity</div>
                  <div className="font-semibold text-ink">{entry.quantity}</div>
                </div>
                <div>
                  <div className="text-[11px] text-ink-muted">Description</div>
                  <div className="font-semibold text-ink">{entry.description}</div>
                </div>
              </div>
            </div>
          </RevealComponent>
        ))}

        {filtered.length === 0 && (
          <p className="py-10 text-center text-sm text-ink-muted">No invoices match your search.</p>
        )}
      </div>
    </div>
  );
}
