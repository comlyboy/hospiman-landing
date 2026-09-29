"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import HospitalSwitcherModalComponent from "@/components/HospitalSwitcherModalComponent";
import AdminUserMenuComponent from "@/components/AdminUserMenuComponent";

interface AdminTopBarComponentProps {
  hospitalName: string;
}

const pageTitles: Record<string, string> = {
  "/admin/dashboard": "Dashboard",
  "/admin/invoices": "Invoices",
  "/admin/sms-history": "SMS Sent History",
};

export default function AdminTopBarComponent({ hospitalName }: AdminTopBarComponentProps) {
  const pathname = usePathname();
  const title = pageTitles[pathname] ?? "Hospiman";

  const [isSwitcherOpen, setIsSwitcherOpen] = useState(false);

  return (
    <>
      <div className="flex h-18 items-center justify-between bg-brand-500 px-4">
        <Link href="/admin/dashboard" className="flex shrink-0 items-center gap-2 transition-opacity duration-200 hover:opacity-80">
          <Image src="/hospiman-mark.png" alt="" width={30} height={30} className="rounded-md" />
          <span className="hidden font-display text-base font-bold text-white sm:inline">Hospiman</span>
        </Link>

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
