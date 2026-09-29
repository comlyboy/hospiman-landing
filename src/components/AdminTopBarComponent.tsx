"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import HospitalSwitcherModalComponent from "@/components/HospitalSwitcherModalComponent";
import AdminUserMenuComponent from "@/components/AdminUserMenuComponent";

interface AdminTopBarComponentProps {
  hospitalName: string;
  onOpenSidebar: () => void;
}

export default function AdminTopBarComponent({ hospitalName, onOpenSidebar }: AdminTopBarComponentProps) {
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  return (
    <>
      <div className="relative flex h-18 items-center justify-between bg-brand-500 px-4">
        <div className="flex items-center gap-2">
          <button
            type="button"
            aria-label="Open menu"
            onClick={onOpenSidebar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10 xl:hidden"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <Link href="/admin/dashboard" className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-80">
            <Image src="/hospiman-mark.png" alt="" width={30} height={30} className="rounded-md" />
            <span className="hidden font-display text-base font-bold text-white sm:inline">Hospiman</span>
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsSwitcherOpen(true)}
          className="absolute left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full border border-white/25 px-4 py-2 text-[15px] font-bold text-white transition-colors duration-200 hover:bg-white/10"
        >
          {hospitalName}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="m6 9 6 6 6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <AdminUserMenuComponent />
      </div>

      <HospitalSwitcherModalComponent isOpen={isSwitcherOpen} onClose={() => setIsSwitcherOpen(false)} />
    </>
  );
}
