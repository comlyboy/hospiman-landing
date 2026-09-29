import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppLoginFormComponent from "@/components/AppLoginFormComponent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "App Login",
  description: "Login to the Hospiman app.",
  alternates: { canonical: "/app/login" },
  robots: { index: false, follow: false },
};

export default function AppLoginPageComponent() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-ground px-6 py-12">
      <Link
        href="/app"
        className="mb-8 flex items-center gap-2 rounded-lg bg-brand-900 px-4 py-2.5 transition-opacity duration-200 hover:opacity-85"
      >
        <Image src="/hospiman-mark.png" alt="" width={22} height={22} className="rounded-md" />
        <span className="font-display text-lg font-extrabold text-white">{siteConfig.name}</span>
      </Link>

      <div className="w-full max-w-md rounded-[20px] border border-line bg-white p-8 shadow-[0_20px_50px_rgba(46,33,64,0.12)]">
        <div className="mb-7 flex flex-col gap-1.5 text-center">
          <span className="text-xs font-bold tracking-wider text-[#4f99ff]">WELCOME BACK</span>
          <h1 className="text-2xl font-bold tracking-tight text-ink">Login to Hospiman</h1>
          <p className="mt-1 text-sm text-ink-muted">This is a demo: enter any email and password to continue.</p>
        </div>

        <AppLoginFormComponent />
      </div>

      <p className="mt-8 text-xs text-ink-faint">
        © {new Date().getFullYear()} {siteConfig.legalName}. All Rights Reserved.
      </p>
    </div>
  );
}
