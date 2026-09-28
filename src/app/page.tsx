import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import HeroClassicComponent from "@/components/HeroClassicComponent";
import ModuleCardComponent from "@/components/ModuleCardComponent";
import ClientsMarqueeComponent from "@/components/ClientsMarqueeComponent";
import { highlightModules } from "@/lib/modules-data";
import { siteConfig } from "@/lib/site-config";

// No `title` here: the home page shares the root layout's route segment, so a
// layout-level title.template never applies to it (see Next.js metadata
// docs). Falling through to the root layout's `default` title keeps the
// " | Hospiman" suffix consistent with every other page.
export const metadata: Metadata = {
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePageComponent() {
  return (
    <>
      <HeaderComponent active="home" />

      <main>
        {/* Default hero is the classic layout; add ?hero=1 to the URL to preview the modern one. */}
        <Suspense fallback={<HeroClassicComponent />}>
          <HeroComponent />
        </Suspense>

        <section className="flex flex-col gap-11 px-6 py-24 md:px-16">
          <div className="mx-auto flex max-w-2xl flex-col items-center gap-3.5 text-center">
            <span className="text-xs font-bold tracking-wider text-brand-500">MODULES</span>
            <h2 className="text-[34px] font-bold tracking-tight">One system, every department.</h2>
            <p className="text-ink-muted">
              Twenty-plus modules covering the front desk, the ward and the back office — all in one login.
            </p>
          </div>

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlightModules.map((module) => (
              <ModuleCardComponent
                key={module.key}
                icon={module.icon}
                title={module.title}
                description={module.description}
              />
            ))}
          </div>

          <Link href="/features" className="mx-auto flex items-center gap-1.5 text-[15px] font-bold text-brand-700">
            View all modules
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M5 12h14m-6-6 6 6-6 6"
                stroke="#5b3e8c"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </section>

        <section className="flex flex-col gap-6 bg-brand-50 py-10">
          <h2 className="text-center text-xs font-bold tracking-wider text-ink-muted">OUR CLIENTS</h2>
          <ClientsMarqueeComponent />
        </section>

        <section className="flex flex-col items-center gap-6 bg-brand-900 px-6 py-20 text-center md:px-16">
          <h2 className="text-[32px] leading-snug font-bold text-white">
            Be productive. Be more efficient.
            <br />
            Save time. Save money.
          </h2>
          <a
            href={siteConfig.links.createAccount}
            className="rounded-[9px] bg-white px-7 py-3.5 text-[15px] font-bold text-brand-900"
          >
            Create Account
          </a>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
