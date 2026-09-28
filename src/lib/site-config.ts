export interface SiteConfig {
  name: string;
  legalName: string;
  tagline: string;
  description: string;
  siteUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappHref: string;
  whatsappPhoneDigits: string;
  email: string;
  addressLine: string;
  keywords: string[];
  social: {
    whatsapp: string;
    facebook: string;
    twitter: string;
    instagram: string;
  };
  links: {
    login: string;
    createAccount: string;
    openApp: string;
  };
}

// Set NEXT_PUBLIC_SITE_URL to override this once a permanent domain is picked.
// Deliberately not defaulting to hospiman.com: this project is an independent
// redesign concept, not the company's own deployment.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://hospiman.netlify.app";

export const siteConfig: SiteConfig = {
  name: "Hospiman",
  legalName: "Hospiman Solutions",
  tagline: "Top Hospital Management Information System, Medical Practice, and EMR Platform",
  description:
    "Efficient, easy to use, cost-effective hospital, clinic and EMR management platform that lets you focus on what matters to you.",
  siteUrl,
  phoneDisplay: "+234 706 729 5663",
  phoneHref: "tel:+2347067295663",
  whatsappHref: "https://wa.me/2347067295663",
  whatsappPhoneDigits: "2347067295663",
  email: "info@hospiman.com",
  addressLine: "10 Hughes Avenue, Yaba, Lagos",
  keywords: [
    "Hospiman",
    "HMS",
    "EMR",
    "EHR",
    "Hospital Software",
    "Hospital Management",
    "Hospital Management System",
    "Hospital Management Software",
    "Hospital Information Management System",
    "Hospital Information Management System in Nigeria",
    "Hospital Management Information System",
    "Best Hospital Management Software",
    "Best Hospital Management Software in Nigeria",
    "Medical Practice Platform",
    "Medical Practice Software",
    "Nigeria Health Software",
    "Nigeria Hospital Management",
    "Dental Practice Software",
    "Psychiatric Practice Software",
    "Electronic Medical Record",
    "Electronic Health Record",
    "African Medical Software",
  ],
  social: {
    whatsapp: "https://wa.me/2347067295663",
    facebook: "https://facebook.com/hospiman",
    twitter: "https://x.com/hospiman",
    instagram: "https://instagram.com/hospimanhq",
  },
  links: {
    login: "https://admin.hospiman.com/login",
    createAccount: "https://admin.hospiman.com/register",
    openApp: "https://app.hospiman.com",
  },
};
