"use client";

import { useState } from "react";
import RevealComponent from "@/components/RevealComponent";
import DateRangeFilterComponent from "@/components/DateRangeFilterComponent";
import ViewModeToggleComponent, { type ViewMode } from "@/components/ViewModeToggleComponent";
import { isDateWithinRange } from "@/lib/date-filter";
import { paymentEntries } from "@/lib/payments-data";

export default function PaymentListComponent() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("card");

  const filtered = paymentEntries.filter((entry) => isDateWithinRange(entry.date, startDate, endDate));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4">
      <RevealComponent className="flex flex-wrap items-center justify-between gap-3">
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
        <ViewModeToggleComponent viewMode={viewMode} onChange={setViewMode} />
      </RevealComponent>

      {viewMode === "card" ? (
        <div className="flex flex-col gap-4">
          {filtered.map((entry, index) => (
            <RevealComponent key={`${entry.date}-${index}`} delayMs={Math.min(index * 40, 300)}>
              <div className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/10">
                <div className="grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-4">
                  <div>
                    <div className="text-[11px] text-ink-muted">Date</div>
                    <div className="text-sm font-semibold text-ink">{entry.date}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-ink-muted">Amount</div>
                    <div className="text-sm font-semibold text-ink">₦{entry.amount}</div>
                  </div>
                  <div>
                    <div className="text-[11px] text-ink-muted">Category</div>
                    <span className="inline-block rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-700">
                      {entry.category.replace("_", " ")}
                    </span>
                  </div>
                  <div>
                    <div className="text-[11px] text-ink-muted">Remark</div>
                    <div className="text-sm font-semibold text-ink">{entry.remark}</div>
                  </div>
                </div>
              </div>
            </RevealComponent>
          ))}

          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-ink-muted">No payments in this date range.</p>
          )}
        </div>
      ) : (
        <RevealComponent>
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-150 text-sm">
              <thead>
                <tr className="border-b border-line bg-brand-50/50 text-left text-xs font-bold tracking-wide text-ink-muted uppercase">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Category</th>
                  <th className="px-4 py-3">Remark</th>
                  <th className="px-4 py-3 text-right">Amount</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((entry, index) => (
                  <tr key={`${entry.date}-${index}`} className="transition-colors duration-150 hover:bg-brand-50/40">
                    <td className="px-4 py-3 whitespace-nowrap text-ink-muted">{entry.date}</td>
                    <td className="px-4 py-3">
                      <span className="rounded-md bg-sky-50 px-2 py-0.5 text-[11px] font-bold text-sky-700">
                        {entry.category.replace("_", " ")}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-ink-muted">{entry.remark}</td>
                    <td className="px-4 py-3 text-right font-semibold text-ink">₦{entry.amount}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-muted">No payments in this date range.</p>
            )}
          </div>
        </RevealComponent>
      )}
    </div>
  );
}
