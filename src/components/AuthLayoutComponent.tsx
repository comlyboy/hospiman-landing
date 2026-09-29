import type { ReactNode } from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

interface AuthLayoutComponentProps {
  eyebrow: string;
  title: string;
  subtitle?: string;
  children: ReactNode;
}

export default function AuthLayoutComponent({ eyebrow, title, subtitle, children }: AuthLayoutComponentProps) {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden bg-brand-50 px-6 py-12">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 -left-24 h-80 w-80 rounded-full bg-brand-500/25 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -right-28 -bottom-32 h-96 w-96 rounded-full bg-brand-700/20 blur-3xl"
      />

      <Link href="/" className="relative mb-8 flex items-center transition-opacity duration-200 hover:opacity-80">
        <Image src="/hospiman-logo.png" alt={siteConfig.name} width={900} height={200} style={{ height: 36, width: "auto" }} priority />
      </Link>

      <div className="relative w-full max-w-md rounded-[20px] border border-line bg-white p-8 shadow-[0_20px_50px_rgba(46,33,64,0.12)]">
        <div className="mb-7 flex flex-col gap-1.5 text-center">
          <span className="text-xs font-bold tracking-wider text-brand-500">{eyebrow}</span>
          <h1 className="text-2xl font-bold tracking-tight text-ink">{title}</h1>
          {subtitle && <p className="mt-1 text-sm text-ink-muted">{subtitle}</p>}
        </div>

        {children}
      </div>

      <p className="relative mt-8 text-xs text-ink-faint">
        © {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.
      </p>
    </div>
  );
}
