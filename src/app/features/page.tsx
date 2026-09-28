import type { Metadata } from "next";
import Image from "next/image";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import ModuleRowComponent from "@/components/ModuleRowComponent";
import { moduleCategories } from "@/lib/modules-data";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Twenty-four modules across patient care, billing, pharmacy and specialty wards, all in one hospital management platform.",
  alternates: { canonical: "/features" },
};

export default function FeaturesPageComponent() {
  return (
    <>
      <HeaderComponent active="features" />

      <main>
        <section className="flex flex-col items-center gap-3 px-6 pt-14 pb-4 text-center md:px-16">
          <span className="text-xs font-bold tracking-wider text-brand-500">FEATURES</span>
          <h1 className="text-[34px] font-bold tracking-tight">
            Everything your hospital needs, in one platform.
          </h1>
          <p className="max-w-xl text-ink-muted">
            Twenty-four modules across patient care, money, pharmacy and specialty wards.
          </p>
        </section>

        <section className="mx-auto flex max-w-6xl flex-col gap-7 px-6 py-20 md:px-16">
          {moduleCategories.map((category) => (
            <div key={category.name} className="flex flex-col gap-3">
              <h2 className="text-[13px] font-bold tracking-wider text-brand-500 uppercase">
                {category.name}
              </h2>
              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                {category.items.map((item, index) => {
                  const isLastOdd = category.items.length % 2 === 1 && index === category.items.length - 1;
                  return (
                    <ModuleRowComponent
                      key={item.key}
                      icon={item.icon}
                      title={item.title}
                      description={item.description}
                      fullWidth={isLastOdd}
                    />
                  );
                })}
              </div>
            </div>
          ))}
        </section>

        <section className="flex flex-col items-center gap-4 bg-brand-50 px-6 py-8 text-center md:px-16">
          <span className="text-xs font-bold tracking-wider text-ink-muted">OUR CLIENTS</span>
          <Image src="/hospiman-logo.png" alt={siteConfig.name} width={149} height={24} style={{ height: 26, width: "auto", opacity: 0.85 }} />
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
