"use client";

import { useState } from "react";
import Link from "next/link";
import { menuTiles } from "@/lib/app-menu-data";

interface AppDrawerComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const navItems = [
  { label: "Home", href: "/app/menu", icon: <HomeIcon /> },
  { label: "About", href: "/app/about", icon: <AboutIcon /> },
  ...menuTiles.map((tile) => ({ label: tile.label, href: tile.href, icon: tile.icon })),
].sort((a, b) => a.label.localeCompare(b.label));

function HomeIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function AboutIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8" />
      <path d="M12 11v5m0-8v.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );
}

export default function AppDrawerComponent({ isOpen, onClose }: AppDrawerComponentProps) {
  const [query, setQuery] = useState("");

  const filtered = navItems.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

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
        className={`fixed top-0 left-0 z-50 flex h-full w-80 max-w-[85vw] flex-col bg-white shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-14 shrink-0 items-center gap-3 bg-brand-500 px-4">
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
          <span className="text-base font-bold text-white">Menu</span>
        </div>

        <div className="shrink-0 border-b border-line p-3">
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Type to filter menu"
            className="w-full rounded-lg border border-line bg-ground px-3.5 py-2.5 text-sm text-ink placeholder-ink-faint transition-colors duration-200 focus:outline-2 focus:outline-brand-500"
          />
        </div>

        <nav className="flex-1 divide-y divide-line overflow-y-auto">
          {filtered.map((item) =>
            item.href ? (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="flex items-center justify-between px-5 py-3.5 text-[14.5px] font-medium text-ink transition-colors duration-200 hover:bg-brand-50"
              >
                {item.label}
                <span className="text-ink-muted">{item.icon}</span>
              </Link>
            ) : (
              <div
                key={item.label}
                className="flex items-center justify-between px-5 py-3.5 text-[14.5px] font-medium text-ink-faint"
              >
                {item.label}
                <span className="text-ink-faint">{item.icon}</span>
              </div>
            ),
          )}

          {filtered.length === 0 && <p className="px-5 py-6 text-center text-sm text-ink-muted">No matches.</p>}
        </nav>

        <div className="flex shrink-0 items-center gap-3 bg-brand-500 px-4 py-3.5">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/15 text-sm font-bold text-white">
            D
          </div>
          <div className="min-w-0">
            <div className="truncate text-sm font-bold text-white">Demo User</div>
            <div className="truncate text-xs text-white/70">demo@hospiman.com</div>
          </div>
        </div>
      </div>
    </>
  );
}
