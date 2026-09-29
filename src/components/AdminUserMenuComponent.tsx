"use client";

import { useState } from "react";

export default function AdminUserMenuComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((open) => !open)}
        aria-label="Account menu"
        className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-xs font-bold text-white transition-colors duration-200 hover:bg-white/25"
      >
        CU
      </button>

      {isOpen && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setIsOpen(false)} aria-hidden="true" />
          <div className="absolute top-11 right-0 z-50 w-56 rounded-xl border border-line bg-white p-2 shadow-xl">
            <div className="mb-1 border-b border-line px-3 py-2.5">
              <div className="truncate text-sm font-bold text-ink">Christian Uzoh</div>
              <div className="truncate text-xs text-ink-muted">genbliz@gmail.com</div>
            </div>
            <button
              type="button"
              className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm font-semibold text-red-500 transition-colors duration-200 hover:bg-red-50"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M10 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2M14 12H3m0 0 3-3m-3 3 3 3"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Logout
            </button>
          </div>
        </>
      )}
    </div>
  );
}
