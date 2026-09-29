"use client";

import { useState } from "react";
import RevealComponent from "@/components/RevealComponent";
import ListToolbarComponent, { type ViewMode } from "@/components/ListToolbarComponent";
import { isDateWithinRange } from "@/lib/date-filter";
import { smsHistoryEntries } from "@/lib/sms-history-data";

export default function SmsHistoryListComponent() {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [viewMode, setViewMode] = useState<ViewMode>("card");

  const filtered = smsHistoryEntries.filter((entry) => isDateWithinRange(entry.date, startDate, endDate));

  return (
    <div className="mx-auto flex max-w-4xl flex-col gap-6 p-4">
      <RevealComponent>
        <ListToolbarComponent
          startDate={startDate}
          endDate={endDate}
          onStartDateChange={setStartDate}
          onEndDateChange={setEndDate}
          onClear={() => {
            setStartDate("");
            setEndDate("");
          }}
          viewMode={viewMode}
          onViewModeChange={setViewMode}
        />
      </RevealComponent>

      {viewMode === "card" ? (
        <div className="flex flex-col gap-4">
          {filtered.map((entry, index) => (
            <RevealComponent key={`${entry.date}-${index}`} delayMs={Math.min(index * 40, 300)}>
              <div className="rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/10">
                <p className="text-[14.5px] leading-relaxed text-ink">{entry.message}</p>
                <div className="mt-4 flex flex-wrap gap-x-6 gap-y-1 border-t border-line pt-3 text-xs text-ink-muted">
                  <span>
                    Recipients: <span className="font-semibold text-ink">{entry.recipients}</span>
                  </span>
                  <span>
                    Pages: <span className="font-semibold text-ink">{entry.pages}</span>
                  </span>
                  <span>
                    Date: <span className="font-semibold text-ink">{entry.date}</span>
                  </span>
                </div>
              </div>
            </RevealComponent>
          ))}

          {filtered.length === 0 && (
            <p className="py-10 text-center text-sm text-ink-muted">No messages in this date range.</p>
          )}
        </div>
      ) : (
        <RevealComponent>
          <div className="overflow-x-auto rounded-2xl border border-line bg-white">
            <table className="w-full min-w-150 text-sm">
              <thead>
                <tr className="border-b border-line bg-brand-50/50 text-left text-xs font-bold tracking-wide text-ink-muted uppercase">
                  <th className="px-4 py-3">Date</th>
                  <th className="px-4 py-3">Message</th>
                  <th className="px-4 py-3 text-right">Recipients</th>
                  <th className="px-4 py-3 text-right">Pages</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-line">
                {filtered.map((entry, index) => (
                  <tr key={`${entry.date}-${index}`} className="transition-colors duration-150 hover:bg-brand-50/40">
                    <td className="px-4 py-3 whitespace-nowrap text-ink-muted">{entry.date}</td>
                    <td className="max-w-xs truncate px-4 py-3 text-ink" title={entry.message}>
                      {entry.message}
                    </td>
                    <td className="px-4 py-3 text-right font-semibold text-ink">{entry.recipients}</td>
                    <td className="px-4 py-3 text-right font-semibold text-ink">{entry.pages}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filtered.length === 0 && (
              <p className="py-10 text-center text-sm text-ink-muted">No messages in this date range.</p>
            )}
          </div>
        </RevealComponent>
      )}
    </div>
  );
}
