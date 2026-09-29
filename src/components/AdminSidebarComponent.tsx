import type { ReactNode } from "react";
import Link from "next/link";

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

export default function AdminSidebarComponent() {
  return (
    <div className="flex w-56 shrink-0 flex-col border-r border-line bg-white">
      <nav className="flex flex-col gap-1 p-3">
        {menuItems.map((item) => {
          const className =
            "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-semibold text-ink transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700 [&_svg]:text-ink-muted hover:[&_svg]:text-brand-500";
          return item.href ? (
            <Link key={item.label} href={item.href} className={className}>
              {item.icon}
              {item.label}
            </Link>
          ) : (
            <button key={item.label} type="button" className={`text-left ${className}`}>
              {item.icon}
              {item.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
