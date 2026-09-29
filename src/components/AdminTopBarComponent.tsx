"use client";

import { useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import HospitalSwitcherModalComponent from "@/components/HospitalSwitcherModalComponent";
import AdminUserMenuComponent from "@/components/AdminUserMenuComponent";

interface AdminTopBarComponentProps {
  hospitalName: string;
  onOpenSidebar: () => void;
}

interface PageConfig {
  title: string;
  leftAction?: "menu" | "back";
}

const pageConfig: Record<string, PageConfig> = {
  "/admin/dashboard": { title: "Dashboard" },
  "/admin/invoices": { title: "Invoices", leftAction: "back" },
  "/admin/sms-history": { title: "SMS Sent History", leftAction: "back" },
};

export default function AdminTopBarComponent({ hospitalName, onOpenSidebar }: AdminTopBarComponentProps) {
  const pathname = usePathname();
  const router = useRouter();
  const { title, leftAction = "menu" } = pageConfig[pathname] ?? { title: "Hospiman" };

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
            onClick={onOpenSidebar}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10 md:hidden"
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

        <AdminUserMenuComponent />
      </div>

      <HospitalSwitcherModalComponent isOpen={isSwitcherOpen} onClose={() => setIsSwitcherOpen(false)} />
    </>
  );
}
