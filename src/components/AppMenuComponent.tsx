"use client";

import { useState } from "react";
import ModuleRowComponent from "@/components/ModuleRowComponent";
import AppDrawerComponent from "@/components/AppDrawerComponent";
import AppTopBarComponent from "@/components/AppTopBarComponent";
import { menuTiles } from "@/lib/app-menu-data";

export default function AppMenuComponent() {
  const [query, setQuery] = useState("");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const filtered = menuTiles.filter((tile) => tile.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex min-h-screen flex-col bg-brand-50">
      <AppTopBarComponent title="Home" onOpenDrawer={() => setIsDrawerOpen(true)} />

      <div className="flex flex-1 flex-col items-center gap-6 px-4 py-10 sm:px-8">
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-brand-500 px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(137,98,189,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 active:scale-95"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="8" r="3.2" stroke="#ffffff" strokeWidth="1.8" />
            <path d="M5 20a7 7 0 0 1 14 0" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          Check-In Patient
        </button>

        <input
          type="text"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
          placeholder="Type to filter menu"
          className="w-full max-w-3xl rounded-full border border-line bg-white px-5 py-3 text-sm text-ink placeholder-ink-faint transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
        />

        <div className="grid w-full max-w-5xl grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((tile) => (
            <ModuleRowComponent
              key={tile.label}
              icon={tile.icon}
              title={tile.label}
              description={tile.description}
              href={tile.href}
              elevateOnHover
            />
          ))}

          {filtered.length === 0 && (
            <p className="col-span-full py-10 text-center text-sm text-ink-muted">No modules match &quot;{query}&quot;.</p>
          )}
        </div>

        <button
          type="button"
          aria-label="Settings"
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink-faint transition-colors duration-200 hover:bg-brand-100 hover:text-brand-700"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M12 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8-3a8 8 0 0 0-.1-1.2l2-1.6-2-3.4-2.4 1a8 8 0 0 0-2-1.2L15 3H9l-.5 2.6a8 8 0 0 0-2 1.2l-2.4-1-2 3.4 2 1.6A8 8 0 0 0 4 12c0 .4 0 .8.1 1.2l-2 1.6 2 3.4 2.4-1a8 8 0 0 0 2 1.2L9 21h6l.5-2.6a8 8 0 0 0 2-1.2l2.4 1 2-3.4-2-1.6A8 8 0 0 0 20 12Z"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <AppDrawerComponent isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
