import { siteConfig } from "@/lib/site-config";
import FrontDeskPreviewComponent from "@/components/FrontDeskPreviewComponent";
import RevealComponent from "@/components/RevealComponent";

const heroChips = [
  "Patient Records",
  "Billing & Wallet",
  "Appointments",
  "Pharmacy",
  "Lab & Antenatal",
  "Reports",
];

export default function HeroModernComponent() {
  return (
    <section className="relative overflow-hidden bg-brand-900 py-20 md:px-16 lg:py-28">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 -right-32 h-105 w-105 rounded-full bg-brand-500/35 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-brand-500/15 blur-3xl"
      />

      <div className="relative mx-auto flex max-w-6xl flex-col items-center gap-14 lg:flex-row lg:items-center lg:justify-between">
        <RevealComponent className="flex flex-col items-center gap-6 text-center lg:max-w-xl lg:items-start lg:text-left">
          <span className="rounded-full border border-white/25 px-4 py-1.5 text-xs font-semibold tracking-wider text-white/85">
            NIGERIA&apos;S HOSPITAL &amp; EMR PLATFORM
          </span>
          <h1 className="text-[32px] leading-tight font-bold text-white md:text-[44px] md:leading-[1.22]">
            {siteConfig.tagline}
          </h1>
          <p className="max-w-xl text-lg leading-relaxed text-white/78">{siteConfig.description}</p>
          <div className="mt-1 flex flex-wrap justify-center gap-3.5 lg:justify-start">
            <a
              href={siteConfig.links.createAccount}
              className="rounded-[9px] bg-white px-6 py-3.5 text-[15px] font-bold text-brand-900 transition-all duration-200 hover:bg-white/90 hover:-translate-y-0.5 hover:shadow-lg active:translate-y-0 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Create Account
            </a>
            <a
              href={siteConfig.links.openApp}
              className="rounded-[9px] border border-white/35 px-6 py-3.5 text-[15px] font-semibold text-white transition-all duration-200 hover:border-white/60 hover:bg-white/10 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
            >
              Open App
            </a>
          </div>
          <div className="mt-3 flex flex-wrap justify-center gap-2.5 lg:justify-start">
            {heroChips.map((chip) => (
              <span
                key={chip}
                className="rounded-full border border-white/28 px-3.5 py-1.5 text-[13px] text-white/88"
              >
                {chip}
              </span>
            ))}
          </div>
        </RevealComponent>

        <RevealComponent delayMs={150}>
          <FrontDeskPreviewComponent />
        </RevealComponent>
      </div>
    </section>
  );
}
