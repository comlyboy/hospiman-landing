"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import AdminSideMenuComponent from "@/components/AdminSideMenuComponent";
import HospitalSwitcherModalComponent from "@/components/HospitalSwitcherModalComponent";

interface AdminTopBarComponentProps {
  hospitalName: string;
}

interface PageConfig {
  title: string;
  showSearch?: boolean;
  leftAction?: "menu" | "back";
}

const pageConfig: Record<string, PageConfig> = {
  "/admin/dashboard": { title: "Dashboard" },
  "/admin/invoices": { title: "Invoices", showSearch: true, leftAction: "back" },
  "/admin/sms-history": { title: "SMS Sent History", showSearch: true },
};

export default function AdminTopBarComponent({ hospitalName }: AdminTopBarComponentProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { title, showSearch, leftAction = "menu" } = pageConfig[pathname] ?? { title: "Hospiman" };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  return (
    <>
      <div className="flex h-18 items-center justify-between bg-brand-500 px-3">
        {leftAction === "back" ? (
          <button
            type="button"
            aria-label="Go back"
            onClick={() => router.push("/admin/dashboard")}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M15 19 8 12l7-7" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMenuOpen(true)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>
        )}

        <button
          type="button"
          onClick={() => setIsSwitcherOpen(true)}
          className="flex flex-col items-center gap-0.5 rounded-lg px-4 py-1.5 transition-colors duration-200 hover:bg-white/10"
        >
          <span className="text-[10px] font-bold tracking-widest text-white/70 uppercase">{title}</span>
          <span className="flex items-center gap-1.5 text-[15px] font-bold text-white">
            {hospitalName}
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="m6 9 6 6 6-6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </button>

        {showSearch ? (
          <button
            type="button"
            aria-label="Search"
            onClick={() => document.getElementById("admin-search-input")?.focus()}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
          >
            <svg width="19" height="19" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="11" cy="11" r="7" stroke="#ffffff" strokeWidth="1.8" />
              <path d="m20 20-3.5-3.5" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        ) : (
          <span className="h-9 w-9 shrink-0" aria-hidden="true" />
        )}
      </div>

      <AdminSideMenuComponent isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />
      <HospitalSwitcherModalComponent isOpen={isSwitcherOpen} onClose={() => setIsSwitcherOpen(false)} />
    </>
  );
}
