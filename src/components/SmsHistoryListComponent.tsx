"use client";

import { useState } from "react";
import RevealComponent from "@/components/RevealComponent";
import { smsHistoryEntries } from "@/lib/sms-history-data";

export default function SmsHistoryListComponent() {
  const [query, setQuery] = useState("");

  const filtered = smsHistoryEntries.filter((entry) =>
    `${entry.message} ${entry.date}`.toLowerCase().includes(query.toLowerCase())
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
            placeholder="Search messages…"
            className="w-full rounded-xl border border-line bg-white py-3 pr-4 pl-11 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
        </div>
      </RevealComponent>

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
          <p className="py-10 text-center text-sm text-ink-muted">No messages match your search.</p>
        )}
      </div>
    </div>
  );
}
