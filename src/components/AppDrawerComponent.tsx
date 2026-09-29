"use client";

import Link from "next/link";

interface AppDrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AppDrawerComponent({ isOpen, onClose }: AppDrawerComponentProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-brand-900/40 backdrop-blur-[2px] transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-50 flex h-full w-72 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 shrink-0 items-center gap-3 bg-brand-500 px-4">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
          <span className="text-lg font-bold text-white">Menu</span>
        </div>

        <nav className="flex flex-col divide-y divide-line">
          <Link
            href="/app"
            onClick={onClose}
            className="flex items-center justify-between px-5 py-4 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-50"
          >
            Home
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" />
            </svg>
          </Link>

          <button
            type="button"
            className="flex items-center justify-between px-5 py-4 text-left text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-50"
          >
            About
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm1 15h-2v-6h2v6Zm0-8h-2V7h2v2Z" />
            </svg>
          </button>

          <Link
            href="/app/login"
            onClick={onClose}
            className="flex items-center justify-between px-5 py-4 text-[15px] font-medium text-ink transition-colors duration-200 hover:bg-brand-50"
          >
            Login
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M14 12H3m0 0 3-3m-3 3 3 3M10 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2"
                stroke="#4f99ff"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </nav>
      </div>
    </>
  );
}
