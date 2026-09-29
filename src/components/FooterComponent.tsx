import Image from "next/image";
import { siteConfig } from "@/lib/site-config";

interface SocialLink {
  label: string;
  href: string;
  initials: string;
}

const socialLinks: SocialLink[] = [
  { label: "WhatsApp", href: siteConfig.social.whatsapp, initials: "WA" },
  { label: "Facebook", href: siteConfig.social.facebook, initials: "FB" },
  { label: "Twitter", href: siteConfig.social.twitter, initials: "X" },
  { label: "Instagram", href: siteConfig.social.instagram, initials: "IG" },
];

export default function FooterComponent() {
  return (
    <footer className="bg-brand-900 pt-14 pb-8 md:px-16">
      <div className="mx-auto flex max-w-6xl flex-col gap-10 md:flex-row md:justify-between">
        <div className="flex max-w-xs flex-col gap-3.5">
          <div className="flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80">
            <Image src="/hospiman-mark.png" alt="" width={26} height={26} className="rounded-md" />
            <span className="font-display text-lg font-bold text-white">{siteConfig.name}</span>
          </div>
          <p className="text-sm leading-relaxed text-white/60">
            Medical practice, hospital management and EMR platform, built in Lagos.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold tracking-wider text-white/45">CONTACT US</span>
          <div>
            <div className="text-xs text-white/45">Address</div>
            <div className="text-sm text-white/85">{siteConfig.addressLine}</div>
          </div>
          <div>
            <div className="text-xs text-white/45">Phone / WhatsApp</div>
            <div className="text-sm text-white/85">{siteConfig.phoneDisplay}</div>
          </div>
          <div>
            <div className="text-xs text-white/45">Email</div>
            <div className="text-sm text-white/85">{siteConfig.email}</div>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold tracking-wider text-white/45">LINKS</span>
          <a href={siteConfig.links.login} className="text-sm text-white/72 transition-colors duration-200 hover:text-white">
            Login / Manage Account
          </a>
          <a href={siteConfig.links.createAccount} className="text-sm text-white/72 transition-colors duration-200 hover:text-white">
            Create Account
          </a>
          <a href={siteConfig.links.openApp} className="text-sm text-white/72 transition-colors duration-200 hover:text-white">
            Open App
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="text-xs font-bold tracking-wider text-white/45">CONNECT WITH US</span>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              className="group flex items-center gap-2 text-sm text-white/72 transition-colors duration-200 hover:text-white"
            >
              <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-white/12 text-[10px] font-bold text-white transition-all duration-200 group-hover:scale-110">
                {social.initials}
              </span>
              {social.label}
            </a>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 flex max-w-6xl flex-col gap-3 border-t border-white/12 pt-5 text-center md:flex-row md:items-center md:justify-between md:text-left">
        <span className="text-[13px] text-white/50">
          Copyrights © {new Date().getFullYear()} - {siteConfig.legalName}. All Rights Reserved.
        </span>
        <a href="/privacy-policy" className="text-sm text-white/72 transition-colors duration-200 hover:text-white">
          Privacy Policy
        </a>
      </div>
    </footer>
  );
}
