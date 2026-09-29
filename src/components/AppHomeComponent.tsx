"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import AppDrawerComponent from "@/components/AppDrawerComponent";
import { siteConfig } from "@/lib/site-config";

export default function AppHomeComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-900">
      <div
        aria-hidden
        className="absolute inset-0 bg-[radial-gradient(circle,rgba(255,255,255,0.16)_1px,transparent_1px)] bg-size-[22px_22px]"
      />

      <div className="relative flex h-16 shrink-0 items-center bg-brand-500 px-4">
        <button
          type="button"
          onClick={() => setIsDrawerOpen(true)}
          aria-label="Open menu"
          className="flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
          </svg>
        </button>
        <span className="flex-1 text-center text-sm font-bold tracking-[0.2em] text-white/75 uppercase">Home</span>
        <span className="w-9" aria-hidden />
      </div>

      <div className="relative flex flex-1 flex-col items-center justify-center gap-14 px-6 py-14 text-center">
        <Link
          href="/app/login"
          className="flex items-center gap-2.5 rounded-full bg-[#4f99ff] px-8 py-3.5 text-base font-bold text-white shadow-[0_10px_30px_rgba(79,153,255,0.45)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_36px_rgba(79,153,255,0.55)] active:scale-95"
        >
          Login
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M14 12H3m0 0 3-3m-3 3 3 3M10 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-6a2 2 0 0 1-2-2v-2"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>

        <div className="flex flex-col items-center gap-5">
          <div className="flex items-center gap-2 rounded-lg bg-ground px-4 py-2.5 shadow-[0_10px_30px_rgba(0,0,0,0.25)]">
            <Image src="/hospiman-mark.png" alt="" width={28} height={28} className="rounded-md" />
            <span className="font-display text-2xl font-extrabold tracking-tight text-brand-700">HOSPIMAN</span>
          </div>
          <p className="max-w-sm text-[15px] leading-relaxed font-semibold text-white/85">{siteConfig.tagline}</p>
        </div>
      </div>

      <AppDrawerComponent isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
