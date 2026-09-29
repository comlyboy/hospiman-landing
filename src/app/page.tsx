import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import HeroComponent from "@/components/HeroComponent";
import HeroClassicComponent from "@/components/HeroClassicComponent";
import ModuleCardComponent from "@/components/ModuleCardComponent";
import ClientsMarqueeComponent from "@/components/ClientsMarqueeComponent";
import RevealComponent from "@/components/RevealComponent";
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

        <section className="flex flex-col gap-11 py-24 md:px-16">
          <RevealComponent className="mx-auto flex max-w-2xl flex-col items-center gap-3.5 text-center">
            <span className="text-xs font-bold tracking-wider text-brand-500">MODULES</span>
            <h2 className="text-[34px] font-bold tracking-tight">One system, every department.</h2>
            <p className="text-ink-muted">
              Twenty-plus modules covering the front desk, the ward and the back office — all in one login.
            </p>
          </RevealComponent>

          <div className="mx-auto grid w-full max-w-6xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {highlightModules.map((module, index) => (
              <RevealComponent key={module.key} delayMs={index * 60}>
                <ModuleCardComponent icon={module.icon} title={module.title} description={module.description} />
              </RevealComponent>
            ))}
          </div>

          <Link
            href="/features"
            className="group mx-auto flex items-center gap-1.5 text-[15px] font-bold text-brand-700 transition-colors duration-200 hover:text-brand-800"
          >
            View all modules
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              aria-hidden="true"
              className="transition-transform duration-200 group-hover:translate-x-1"
            >
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

        <section className="bg-brand-50 py-10">
          <RevealComponent className="flex flex-col gap-6">
            <h2 className="text-center text-xs font-bold tracking-wider text-ink-muted">OUR CLIENTS</h2>
            <ClientsMarqueeComponent />
          </RevealComponent>
        </section>

        <section className="bg-brand-900 py-20 md:px-16">
          <RevealComponent className="flex flex-col items-center gap-6 text-center">
            <h2 className="text-[32px] leading-snug font-bold text-white">
              Be productive. Be more efficient.
              <br />
              Save time. Save money.
            </h2>
            <a
              href={siteConfig.links.createAccount}
              className="rounded-[9px] bg-white px-7 py-3.5 text-[15px] font-bold text-brand-900 transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Create Account
            </a>
          </RevealComponent>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
