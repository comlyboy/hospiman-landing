import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/site-config";

const stethoscopePattern =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 64 64' fill='none' stroke='%23000000' stroke-width='2' stroke-linecap='round'%3E%3Cpath d='M20 8v14a10 10 0 0 0 20 0V8'/%3E%3Ccircle cx='20' cy='8' r='2.5' fill='%23000000' stroke='none'/%3E%3Ccircle cx='40' cy='8' r='2.5' fill='%23000000' stroke='none'/%3E%3Cpath d='M30 32v8a10 10 0 0 0 20 0v-4'/%3E%3Ccircle cx='50' cy='36' r='5.5'/%3E%3C/svg%3E";

export default function AppAboutComponent() {
  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-brand-50">
      <div className="flex h-18 shrink-0 items-center justify-between bg-brand-500 px-4">
        <Link
          href="/app"
          aria-label="Back"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
        <span className="text-sm font-bold tracking-[0.2em] text-white/85 uppercase">About</span>
        <span className="w-9 shrink-0" aria-hidden />
      </div>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.05]"
        style={{ backgroundImage: `url("${stethoscopePattern}")`, backgroundSize: "150px 150px" }}
      />

      <div className="relative flex flex-1 flex-col items-center gap-5 px-6 pt-16 text-center">
        <div className="flex h-26 w-26 items-center justify-center rounded-2xl bg-brand-500 shadow-[0_10px_30px_rgba(137,98,189,0.35)]">
          <Image src="/icons/icon-192.png" alt="" width={104} height={104} className="rounded-2xl" />
        </div>
        <span className="font-display text-3xl font-extrabold tracking-tight text-brand-500/15">HOSPIMAN</span>
        <p className="text-base font-bold text-ink">An application for hospital management</p>
        <p className="text-base font-bold text-ink">© {siteConfig.legalName}</p>
      </div>
    </div>
  );
}
