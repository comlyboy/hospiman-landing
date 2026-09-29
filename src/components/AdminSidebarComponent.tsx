"use client";

import type { ReactNode } from "react";
import Link from "next/link";

interface AdminSidebarComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

interface MenuItem {
  label: string;
  href?: string;
  icon: ReactNode;
}

const iconProps = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none" as const, "aria-hidden": true };

const menuItems: MenuItem[] = [
  {
    label: "Home",
    href: "/",
    icon: (
      <svg {...iconProps}>
        <path d="M4 11.5 12 4l8 7.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 10v9h12v-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "Dashboard",
    href: "/admin/dashboard",
    icon: (
      <svg {...iconProps}>
        <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Invoices",
    href: "/admin/invoices",
    icon: (
      <svg {...iconProps}>
        <path d="M6 3h9l3 3v15H6V3Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 10h6M9 14h6M9 18h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "My Hospitals",
    icon: (
      <svg {...iconProps}>
        <path d="M4 21V7l8-4 8 4v14" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
        <path d="M9 21v-6h6v6M9 11h.01M15 11h.01M9 15h.01M15 15h.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "My Profile",
    icon: (
      <svg {...iconProps}>
        <circle cx="12" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.8" />
        <path d="M4.5 20c1.4-4 4.4-6 7.5-6s6.1 2 7.5 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    label: "Payments",
    href: "/admin/payments",
    icon: (
      <svg {...iconProps}>
        <rect x="3" y="6" width="18" height="13" rx="2" stroke="currentColor" strokeWidth="1.8" />
        <path d="M3 10h18" stroke="currentColor" strokeWidth="1.8" />
      </svg>
    ),
  },
  {
    label: "Sms Sent History",
    href: "/admin/sms-history",
    icon: (
      <svg {...iconProps}>
        <path d="M4 5h16v11H8l-4 4V5Z" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function AdminSidebarComponent({ isOpen, onClose }: AdminSidebarComponentProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-brand-900/40 backdrop-blur-[2px] transition-opacity duration-300 xl:hidden ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        aria-hidden={!isOpen}
        className={`fixed top-0 left-0 z-50 flex h-full w-64 shrink-0 flex-col bg-white shadow-2xl transition-transform duration-300 xl:static xl:h-auto xl:w-56 xl:translate-x-0 xl:self-stretch xl:border-r xl:border-line xl:shadow-none ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-18 shrink-0 items-center justify-end border-b border-line px-4 xl:hidden">
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            className="flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200 hover:bg-brand-50"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="#1a1523" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-col gap-1 overflow-y-auto p-3">
          {menuItems.map((item) => {
            const className =
              "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 [&_svg]:text-ink-muted hover:[&_svg]:text-brand-500";
            return item.href ? (
              <Link key={item.label} href={item.href} onClick={onClose} className={className}>
                {item.icon}
                {item.label}
              </Link>
            ) : (
              <button key={item.label} type="button" onClick={onClose} className={`text-left ${className}`}>
                {item.icon}
                {item.label}
              </button>
            );
          })}
        </nav>
      </div>
    </>
  );
}
