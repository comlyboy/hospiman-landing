import type { Metadata } from "next";
import HeaderComponent from "@/components/HeaderComponent";
import FooterComponent from "@/components/FooterComponent";
import RevealComponent from "@/components/RevealComponent";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Reach the Hospiman team by phone, WhatsApp, email or the contact form.",
  alternates: { canonical: "/contact" },
};

interface ContactDetail {
  label: string;
  value: string;
  icon: React.ReactNode;
}

const contactDetails: ContactDetail[] = [
  {
    label: "Address",
    value: siteConfig.addressLine,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 21s-7-6.1-7-11a7 7 0 0 1 14 0c0 4.9-7 11-7 11Z"
          stroke="#8962bd"
          strokeWidth="1.6"
          strokeLinejoin="round"
        />
        <circle cx="12" cy="10" r="2.4" stroke="#8962bd" strokeWidth="1.6" />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: siteConfig.phoneDisplay,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
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
    label: "WhatsApp",
    value: siteConfig.phoneDisplay,
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M12 3a9 9 0 0 0-7.7 13.6L3 21l4.6-1.2A9 9 0 1 0 12 3Z"
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
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path d="M4 5h16v11H8l-4 4V5Z" stroke="#8962bd" strokeWidth="1.6" strokeLinejoin="round" />
      </svg>
    ),
  },
];

export default function ContactPageComponent() {
  return (
    <>
      <HeaderComponent active="contact" />

      <main>
        <section className="px-6 pt-14 pb-4 md:px-16">
          <RevealComponent className="flex flex-col items-center gap-2.5 text-center">
            <span className="text-xs font-bold tracking-wider text-brand-500">GET IN TOUCH</span>
            <h1 className="text-[32px] font-bold tracking-tight">Contact Us</h1>
          </RevealComponent>
        </section>

        <section className="mx-auto flex max-w-5xl flex-col gap-14 px-6 py-16 md:flex-row md:px-16">
          <RevealComponent className="flex shrink-0 flex-col gap-5 md:w-85">
            {contactDetails.map((detail) => (
              <div key={detail.label} className="group flex items-center gap-3.5">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[11px] bg-brand-50 transition-transform duration-200 group-hover:scale-110">
                  {detail.icon}
                </div>
                <div>
                  <div className="text-xs text-ink-muted">{detail.label}</div>
                  <div className="text-[15px] font-bold">{detail.value}</div>
                </div>
              </div>
            ))}
          </RevealComponent>

          <RevealComponent delayMs={100} className="flex-1">
          <form
            action={`mailto:${siteConfig.email}`}
            method="post"
            encType="text/plain"
            className="flex flex-col gap-4 rounded-[18px] border border-line bg-white p-8"
          >
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="firstName" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                  First Name *
                </label>
                <input
                  id="firstName"
                  name="firstName"
                  type="text"
                  required
                  placeholder="Chidinma"
                  className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="lastName" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                  Last Name *
                </label>
                <input
                  id="lastName"
                  name="lastName"
                  type="text"
                  required
                  placeholder="Eze"
                  className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col">
                <label htmlFor="phone" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                  Phone (international format) *
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+234 800 000 0000"
                  className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                  Email *
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@hospital.com"
                  className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label htmlFor="subject" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                Subject *
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                placeholder="Demo request"
                className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
              />
            </div>

            <div className="flex flex-col">
              <label htmlFor="message" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                placeholder="Tell us about your hospital and what you need."
                className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
              />
            </div>

            <button
              type="submit"
              className="rounded-[9px] bg-brand-700 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-800 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-500"
            >
              SEND MESSAGE
            </button>
            <p className="text-[11.5px] leading-relaxed text-ink-faint">
              This site is protected by reCAPTCHA and the Google Privacy Policy and Terms of Service apply.
            </p>
          </form>
          </RevealComponent>
        </section>
      </main>

      <FooterComponent />
    </>
  );
}
