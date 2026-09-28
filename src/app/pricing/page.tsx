import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import RevealComponent from "@/components/RevealComponent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Every hospital's setup is different, so Hospiman pricing starts with a short conversation with our sales team.",
  alternates: { canonical: "/pricing" },
};

interface ContactRow {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const contactRows: ContactRow[] = [
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M6.6 10.8c1.4 2.8 3.8 5.1 6.6 6.6l2.2-2.2c.3-.3.7-.4 1-.2 1.1.4 2.3.6 3.6.6.6 0 1 .4 1 1V20c0 .6-.4 1-1 1C10.6 21 3 13.4 3 4c0-.6.4-1 1-1h3.5c.6 0 1 .4 1 1 0 1.2.2 2.4.6 3.6.1.4 0 .8-.2 1L6.6 10.8Z"
          stroke="#8962bd"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
  {
    label: "Email",
    value: siteConfig.email,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16v11H8l-4 4V5Z" stroke="#8962bd" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    icon: (
      <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
          stroke="#8962bd"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
      </svg>
    ),
  },
];

export default function PricingPageComponent() {
  return (
    <>
      <HeaderComponent active="pricing" />

      <main>
        <section className="px-6 pt-14 pb-4 md:px-16">
          <RevealComponent className="flex flex-col items-center gap-2.5 text-center">
            <span className="text-xs font-bold tracking-wider text-brand-500">PRICING</span>
            <h1 className="text-[32px] font-bold tracking-tight">There&apos;s no one-size-fits-all plan.</h1>
          </RevealComponent>
        </section>

        <section className="flex items-center justify-center px-6 py-16 md:px-16">
          <RevealComponent className="flex w-full max-w-lg flex-col gap-2 rounded-[20px] border border-line bg-white p-10 shadow-[0_20px_50px_rgba(46,33,64,0.08)]">
            <span className="text-xs font-bold tracking-wider text-brand-500">CONTACT SALES</span>
            <p className="mt-1.5 mb-2.5 text-[15px] leading-relaxed text-ink-muted">
              Every hospital&apos;s setup is different, so pricing starts with a short conversation about your
              wards, staff and modules.
            </p>

            {contactRows.map((row) => (
              <div
                key={row.label}
                className="group flex items-center gap-3.5 border-b border-line py-4 transition-colors duration-200 last:border-b-0 hover:bg-brand-50/50"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[10px] bg-brand-50 transition-transform duration-200 group-hover:scale-110">
                  {row.icon}
                </div>
                <div>
                  <div className="text-xs text-ink-muted">{row.label}</div>
                  <div className="text-[15px] font-bold">{row.value}</div>
                </div>
              </div>
            ))}

            <a
              href={`mailto:${siteConfig.email}`}
              className="mt-3.5 rounded-[9px] bg-brand-700 py-3.5 text-center text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              Contact Sales
            </a>
          </RevealComponent>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
