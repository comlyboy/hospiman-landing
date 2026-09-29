"use client";

import { useState, type ReactNode } from "react";
import Link from "next/link";

interface MenuTile {
  label: string;
  icon: ReactNode;
  gradient: string;
}

function TileIcon({ d, circles }: { d: string; circles?: { cx: number; cy: number; r: number }[] }) {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="#ffffff" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
      {circles?.map((c, index) => (
        <circle key={index} cx={c.cx} cy={c.cy} r={c.r} fill="#ffffff" />
      ))}
    </svg>
  );
}

const gradients = [
  "from-indigo-500 to-brand-700",
  "from-teal-500 to-brand-800",
  "from-sky-500 to-indigo-700",
  "from-slate-600 to-slate-800",
];

const menuTiles: MenuTile[] = [
  { label: "Dashboard", icon: <TileIcon d="M4 19h16M6 19V9m6 10V5m6 14v-7" /> },
  { label: "Patient", icon: <TileIcon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" circles={[{ cx: 18, cy: 8, r: 2 }]} /> },
  { label: "Med Report", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6 2 2 4-4M9 15h6" /> },
  { label: "My Appointments", icon: <TileIcon d="M4 8h16M7 3v4m10-4v4M5 6h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z" circles={[{ cx: 15, cy: 15, r: 3 }]} /> },
  { label: "Vital Sign", icon: <TileIcon d="M3 12h4l2-6 4 12 2-6h6" /> },
  { label: "Payment", icon: <TileIcon d="M3 6h18v12H3V6Zm4 12s2-4 5-4 5 4 5 4" /> },
  { label: "Billing", icon: <TileIcon d="M3 15c4 3 14 3 18 0M12 3v10m0 0-3-3m3 3 3-3" /> },
  { label: "Financial Status", icon: <TileIcon d="M12 3v18M6 9l6-4 6 4M4 9h4v6a2 2 0 0 1-4 0V9Zm12 0h4v6a2 2 0 0 1-4 0V9Z" /> },
  { label: "Group Payment", icon: <TileIcon d="M3 6h14v12H3V6Zm2 12s2-4 5-4 5 4 5 4" circles={[{ cx: 20, cy: 5, r: 2 }]} /> },
  { label: "Discount", icon: <TileIcon d="m20 9-9-9H4v7l9 9 7-7Z" circles={[{ cx: 8.5, cy: 4.5, r: 1.4 }]} /> },
  { label: "Expenditure", icon: <TileIcon d="M3 7h18v12H3V7Zm0 0 2-3h14l2 3M16 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /> },
  { label: "Payment Destination", icon: <TileIcon d="M3 6h14v12H3V6Zm2 12s2-4 5-4 5 4 5 4M21 10v8" /> },
  { label: "Pregnancy", icon: <TileIcon d="M10 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6c-3 0-5 2.5-5 6v6h10v-6c0-3.5-2-6-5-6Z" /> },
  { label: "Labour Summary", icon: <TileIcon d="M4 16a4 4 0 0 1 4-4h1m11 4a4 4 0 0 0-4-4h-1M9 12V8a3 3 0 0 1 6 0v4" circles={[{ cx: 19, cy: 9, r: 1.6 }]} /> },
  { label: "Admissions", icon: <TileIcon d="M3 19V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9M3 19h18M6 9V6a2 2 0 0 1 2-2h2m0 0a2 2 0 1 1 0 4" circles={[{ cx: 18, cy: 5, r: 1.6 }]} /> },
  { label: "Lab Services", icon: <TileIcon d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" /> },
  { label: "Report Note", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6h6m-6 4h6m-6 4h3" /> },
  { label: "Queue", icon: <TileIcon d="M4 20a5 5 0 0 1 10 0m1-4a4 4 0 0 1 4 4" circles={[{ cx: 9, cy: 8, r: 3 }, { cx: 17, cy: 9, r: 2.4 }]} /> },
  { label: "HMO Provider", icon: <TileIcon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" circles={[{ cx: 18, cy: 4, r: 1.6 }]} /> },
  { label: "Lab Test", icon: <TileIcon d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M9 14h6" circles={[{ cx: 10.5, cy: 17.5, r: 0.9 }, { cx: 13, cy: 19, r: 0.9 }]} /> },
  { label: "Lab Test Recommendation", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 9 2 2 4-4" /> },
  { label: "In House Store", icon: <TileIcon d="M4 9 5 4h14l1 5M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16M9 13h6v7H9v-7Z" /> },
  { label: "Inventory", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6h6m-6 4 1 1 2-2m-3 6 1 1 2-2" /> },
  { label: "Send Bulk SMS", icon: <TileIcon d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" /> },
  { label: "Family Group", icon: <TileIcon d="M4 20a5 5 0 0 1 10 0m1-4a4 4 0 0 1 4 4" circles={[{ cx: 9, cy: 8, r: 3 }, { cx: 17, cy: 9, r: 2.4 }]} /> },
  { label: "Billing Group", icon: <TileIcon d="M4 20a5 5 0 0 1 10 0" circles={[{ cx: 9, cy: 8, r: 3 }, { cx: 18, cy: 15, r: 3 }]} /> },
  { label: "Attendance", icon: <TileIcon d="M4 20a5 5 0 0 1 10 0M15 8l2 2 4-4" circles={[{ cx: 9, cy: 8, r: 3 }]} /> },
  { label: "Work Shift", icon: <TileIcon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 3" /> },
  { label: "Nurse Note", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 13 6-6 2 2-6 6-2 .5.5-2Z" /> },
  { label: "Rosters", icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 7h6m-6 4h6m-6 4h4" /> },
  { label: "Imaging", icon: <TileIcon d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v9M8 13h8m-5 4-3 4m5-4 3 4" /> },
  { label: "Imaging Service", icon: <TileIcon d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v9M8 13h8m-5 4-3 4m5-4 3 4" circles={[{ cx: 19, cy: 5, r: 1.6 }]} /> },
  { label: "Guest Log", icon: <TileIcon d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0v4h4M9 13h6m-6 4h6" /> },
  { label: "Pricing", icon: <TileIcon d="m20 9-9-9H4v7l9 9 7-7Z" circles={[{ cx: 8.5, cy: 4.5, r: 1.4 }]} /> },
  { label: "Wallet", icon: <TileIcon d="M3 7h18v12H3V7Zm0 0 2-3h14l2 3M16 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" /> },
].map((tile, index) => ({ ...tile, gradient: gradients[index % gradients.length] }));

export default function AppMenuComponent() {
  const [query, setQuery] = useState("");

  const filtered = menuTiles.filter((tile) => tile.label.toLowerCase().includes(query.toLowerCase()));

  return (
    <div className="flex min-h-screen flex-col bg-brand-50">
      <div className="flex h-18 shrink-0 items-center justify-between bg-brand-500 px-4">
        <Link
          href="/app"
          aria-label="Back"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </Link>

        <div className="flex items-center gap-4 text-white">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            {[0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => <circle key={`${row}-${col}`} cx={5 + col * 7} cy={5 + row * 7} r="1.6" />))}
          </svg>
        </div>
      </div>

      <div className="flex flex-1 flex-col items-center gap-6 px-4 py-10 sm:px-8">
        <button
          type="button"
          className="flex items-center gap-2.5 rounded-full bg-brand-500 px-7 py-3.5 text-base font-bold text-white shadow-[0_10px_24px_rgba(137,98,189,0.35)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-brand-600 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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

        <div className="grid w-full max-w-5xl grid-cols-2 gap-3.5 sm:grid-cols-3 lg:grid-cols-4">
          {filtered.map((tile) => (
            <div
              key={tile.label}
              className={`flex min-h-28 flex-col justify-between rounded-2xl bg-gradient-to-br ${tile.gradient} p-4 shadow-[0_8px_20px_rgba(0,0,0,0.2)] transition-transform duration-200 hover:-translate-y-0.5`}
            >
              <span className="text-[13.5px] leading-tight font-bold tracking-wide text-white uppercase">{tile.label}</span>
              <div className="self-end">{tile.icon}</div>
            </div>
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
    </div>
  );
}
