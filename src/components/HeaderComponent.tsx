import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

export type NavKey = "home" | "features" | "pricing" | "contact";

interface HeaderComponentProps {
  active: NavKey;
}

interface NavItem {
  key: NavKey;
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { key: "home", label: "Home", href: "/" },
  { key: "features", label: "Features", href: "/features" },
  { key: "pricing", label: "Pricing", href: "/pricing" },
  { key: "contact", label: "Contact", href: "/contact" },
];

export default function HeaderComponent({ active }: HeaderComponentProps) {
  return (
    <header>
      <a
        href={siteConfig.phoneHref}
        className="flex h-9 items-center justify-center gap-2 bg-brand-500 text-center transition-colors duration-200 hover:bg-brand-600 md:px-6"
      >
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinejoin="round"
          />
        </svg>
        <span className="text-[13px] font-medium text-white">
          Contact us, call {siteConfig.phoneDisplay}
        </span>
      </a>

      <div className="flex h-22 items-center justify-between border-b border-line bg-white md:px-16">
        <Link href="/" className="flex items-center transition-opacity duration-200 hover:opacity-80">
          <Image
            src="/hospiman-logo.png"
            alt={siteConfig.name}
            width={900}
            height={200}
            style={{ height: 32, width: "auto" }}
            priority
          />
        </Link>

        <nav className="hidden items-center gap-9 md:flex" aria-label="Primary">
          {navItems.map((item) => (
            <Link
              key={item.key}
              href={item.href}
              className="border-b-2 py-1.5 text-[15px] font-semibold transition-colors duration-200 hover:text-brand-700"
              style={{
                color: item.key === active ? "#5b3e8c" : "#6b6478",
                borderColor: item.key === active ? "#8962bd" : "transparent",
              }}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <a
            href={siteConfig.links.login}
            className="text-sm font-semibold text-ink-muted transition-colors duration-200 hover:text-ink"
          >
            Login
          </a>
          <a
            href={siteConfig.links.createAccount}
            className="rounded-lg bg-brand-500 px-5 py-2.5 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            Create Account
          </a>
        </div>

        <details className="group relative md:hidden">
          <summary
            aria-label="Open menu"
            className="flex h-10 w-10 list-none items-center justify-center rounded-lg border border-line transition-colors duration-200 hover:bg-brand-50 [&::-webkit-details-marker]:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M4 7h16M4 12h16M4 17h16"
                stroke="#1a1523"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </summary>
          <div className="absolute top-12 right-0 z-10 flex w-56 flex-col gap-1 rounded-xl border border-line bg-white p-3 shadow-lg">
            {navItems.map((item) => (
              <Link
                key={item.key}
                href={item.href}
                className="rounded-lg px-3 py-2 text-[15px] font-semibold transition-colors duration-200 hover:bg-brand-50"
                style={{ color: item.key === active ? "#5b3e8c" : "#1a1523" }}
              >
                {item.label}
              </Link>
            ))}
            <a
              href={siteConfig.links.login}
              className="rounded-lg px-3 py-2 text-[15px] font-semibold text-ink-muted transition-colors duration-200 hover:bg-brand-50"
            >
              Login
            </a>
            <a
              href={siteConfig.links.createAccount}
              className="mt-1 rounded-lg bg-brand-500 px-3 py-2.5 text-center text-sm font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95"
            >
              Create Account
            </a>
          </div>
        </details>
      </div>
    </header>
  );
}
