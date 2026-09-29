"use client";

import { useState } from "react";
import RevealComponent from "@/components/RevealComponent";
import DateRangeFilterComponent from "@/components/DateRangeFilterComponent";
import ViewModeToggleComponent, { type ViewMode } from "@/components/ViewModeToggleComponent";
import { isDateWithinRange } from "@/lib/date-filter";
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
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("card");

  const filtered = invoiceEntries.filter((entry) => isDateWithinRange(entry.date, startDate, endDate));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 px-6 py-8">
      <RevealComponent className="flex flex-col gap-4 sm:flex-row sm:items-end">
        <div className="flex-1">
          <DateRangeFilterComponent
            startDate={startDate}
            endDate={endDate}
            onStartDateChange={setStartDate}
            onEndDateChange={setEndDate}
            onClear={() => {
              setStartDate("");
              setEndDate("");
            }}
          />
        </div>
        <ViewModeToggleComponent viewMode={viewMode} onChange={setViewMode} />
      </RevealComponent>

      {viewMode === "card" ? (
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
            <p className="py-10 text-center text-sm text-ink-muted">No invoices in this date range.</p>
          )}
        </div>
      ) : (
        <RevealComponent>
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-150 text-sm">
              <thead>
                <tr className="border-b border-line bg-brand-50/50 text-left text-xs font-bold tracking-wide text-ink-muted uppercase">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Invoice No</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Status</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((entry, index) => (
                  <tr key={`${entry.invoiceNo}-${index}`} className="transition-colors duration-150 hover:bg-brand-50/40">
                    <td className="px-4 py-3 whitespace-nowrap text-ink-muted">{entry.date}</td>
                    <td className="px-4 py-3 font-semibold text-ink">#{entry.invoiceNo}</td>
                    <td className="px-4 py-3">
                      <span className={`rounded-md px-2 py-0.5 text-[11px] font-bold ${categoryStyles[entry.category]}`}>
                        {entry.category.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <span className={`rounded-full px-2 py-0.5 text-[11px] font-bold ${statusStyles[entry.status]}`}>
                        {entry.status.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-ink">₦{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-muted">No invoices in this date range.</p>
            )}
          </div>
        </RevealComponent>
      )}
    </div>
  );
}
