import type { ReactNode } from "react";

export interface ModuleItem {
  key: string;
  title: string;
  description: string;
  icon: ReactNode;
  highlight?: boolean;
}

export interface ModuleCategory {
  name: string;
  items: ModuleItem[];
}

const iconProps = {
  width: 17,
  height: 17,
  viewBox: "0 0 24 24",
  fill: "none" as const,
  "aria-hidden": true,
};

export const moduleCategories: ModuleCategory[] = [
  {
    name: "Patient Care",
    items: [
      {
        key: "patient-records",
        title: "Patient Record Management",
        description: "Patient and next-of-kin details, HMO membership, and fast multi-criteria search.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <path
              d="M4 6a2 2 0 0 1 2-2h4l2 2h6a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6Z"
              stroke="#8962bd"
              strokeWidth="1.8"
            />
          </svg>
        ),
      },
      {
        key: "medical-report",
        title: "Medical Report",
        description: "Diagnosis history on the WHO ICPC coding system, with inbuilt predefined treatment.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <path d="M9 4h6M12 4v6m-5 4h10l-1 8H8l-1-8Z" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "dental-report",
        title: "Dental Report",
        description: "A purpose-built dental chart module with inbuilt drug recommendations.",
        icon: (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="8" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M9 12a3 3 0 1 0 6 0" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "psychiatric-report",
        title: "Psychiatric Report",
        description: "A detailed first-time history report module for psychiatric patients.",
        icon: (
          <svg {...iconProps}>
            <path
              d="M12 4c-3 0-5 2-5 5 0 2 1 3 1 5 0 3 2 6 4 6s4-3 4-6c0-2 1-3 1-5 0-3-2-5-5-5Z"
              stroke="#8962bd"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        key: "nurse-notes",
        title: "Nurse Notes",
        description: "Daily shift reports — who does what, and who's on duty.",
        icon: (
          <svg {...iconProps}>
            <path d="M4 5h13l3 3v11H4V5Z" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M8 10h8M8 14h5" stroke="#8962bd" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Scheduling & Queue",
    items: [
      {
        key: "appointments",
        title: "Appointment Scheduling & Management",
        description: "SMS reminders one day, two days or one week before an appointment.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <rect x="4" y="5" width="16" height="15" rx="2" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M4 10h16M8 3v4M16 3v4" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "queue",
        title: "Queue Module",
        description: "First-come, first-served — emergency patients can be promoted.",
        icon: (
          <svg {...iconProps}>
            <circle cx="6" cy="7" r="1.6" fill="#8962bd" />
            <circle cx="6" cy="12" r="1.6" fill="#8962bd" />
            <circle cx="6" cy="17" r="1.6" fill="#8962bd" />
            <path d="M10 7h10M10 12h10M10 17h6" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "predefined-treatment",
        title: "Predefined Treatment",
        description: "Keep a record of treatment patterns, retrievable at any time.",
        icon: (
          <svg {...iconProps}>
            <rect x="5" y="4" width="14" height="17" rx="2" stroke="#8962bd" strokeWidth="1.8" />
            <path
              d="M8.5 10.5 10.5 12.5 15.5 8"
              stroke="#8962bd"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Billing & Finance",
    items: [
      {
        key: "billing",
        title: "Billing Module",
        description: "Bill history and a debtor alert the moment a patient is owing.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <rect x="3" y="7" width="18" height="12" rx="2" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M3 11h18M8 15h3" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "payment",
        title: "Payment Module",
        description: "Payment history, tracked and collated for efficient accounting.",
        icon: (
          <svg {...iconProps}>
            <path d="M4 20V10m6 10V4m6 16v-7" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "wallet",
        title: "Wallet Module",
        description: "Fund a wallet and pay for yourself, or for friends and family.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <rect x="3" y="6" width="18" height="13" rx="2" stroke="#8962bd" strokeWidth="1.8" />
            <circle cx="12" cy="12.5" r="2.4" stroke="#8962bd" strokeWidth="1.6" />
          </svg>
        ),
      },
      {
        key: "reconciliation",
        title: "Automatic Financial Reconciliation",
        description: "Reconciles patient finances automatically.",
        icon: (
          <svg {...iconProps}>
            <path
              d="M4 12a8 8 0 0 1 13.66-5.66M20 12a8 8 0 0 1-13.66 5.66"
              stroke="#8962bd"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
            <path d="M17 3v4h-4M7 21v-4h4" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        key: "discount",
        title: "Discount Module",
        description: "Manage patient discounts.",
        icon: (
          <svg {...iconProps}>
            <circle cx="7" cy="7" r="2.4" stroke="#8962bd" strokeWidth="1.6" />
            <circle cx="17" cy="17" r="2.4" stroke="#8962bd" strokeWidth="1.6" />
            <path d="M18 6 6 18" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "expenditure",
        title: "Expenditure & Expense Tracker",
        description: "Daily, monthly and yearly spend, to help you decide right.",
        icon: (
          <svg {...iconProps}>
            <path d="M4 19V9m6 10V5m6 14v-6" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "debtors",
        title: "Know Your Debtors",
        description: "Keep track of everyone who owes you.",
        icon: (
          <svg {...iconProps}>
            <circle cx="12" cy="12" r="9" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M12 7v5l3 3" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Pharmacy & Inventory",
    items: [
      {
        key: "drug-administration",
        title: "Drug Administration",
        description: "Track how nurses administer drugs — see who did what.",
        icon: (
          <svg {...iconProps}>
            <path
              d="M12 3v5m0 0-3 3m3-3 3 3M5 21h14M7 21V13m10 8V13"
              stroke="#8962bd"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        key: "inventory",
        title: "Inventory Module",
        description: "Drug stock and billing move together, automatically.",
        icon: (
          <svg {...iconProps}>
            <path d="M3 8 12 4l9 4-9 4-9-4Z" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M3 8v8l9 4 9-4V8" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Specialty Care",
    items: [
      {
        key: "labour-summary",
        title: "Labour Summary",
        description: "Birth records, with daily, monthly and yearly statistics.",
        icon: (
          <svg {...iconProps}>
            <path
              d="M12 20c4-3 7-6 7-10a5 5 0 0 0-9-3 5 5 0 0 0-9 3c0 4 3 7 7 10 1.2.9 2.6 0 4 0Z"
              stroke="#8962bd"
              strokeWidth="1.6"
              strokeLinejoin="round"
            />
          </svg>
        ),
      },
      {
        key: "antenatal",
        title: "Pregnancy & Antenatal Management",
        description: "Pregnancy data tracked from conception to delivery.",
        icon: (
          <svg {...iconProps}>
            <circle cx="12" cy="8" r="4" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M12 12v8m-4-4h8" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "lab-test",
        title: "Lab Test & Lab Service Module",
        description: "Lab techs add tests from a doctor's report; doctors act on results.",
        icon: (
          <svg {...iconProps}>
            <path d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
  {
    name: "Reporting & Engagement",
    items: [
      {
        key: "dashboard",
        title: "Dashboard & Statistics",
        description: "Charts across billing, payments, vitals, visits and births.",
        highlight: true,
        icon: (
          <svg {...iconProps}>
            <path d="M4 20V10m6 10V4m6 16v-7" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        ),
      },
      {
        key: "roles",
        title: "Role & Permission Authorisation",
        description: "Administrators control exactly what each user can do.",
        icon: (
          <svg {...iconProps}>
            <path d="m12 3 8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        key: "sms",
        title: "Send Customized SMS",
        description: "Send a custom message to any patient, right from the system.",
        icon: (
          <svg {...iconProps}>
            <path d="M4 5h16v11H8l-4 4V5Z" stroke="#8962bd" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        ),
      },
      {
        key: "engage",
        title: "Engage",
        description: "Automated birthday SMS, plus other personalized messages.",
        icon: (
          <svg {...iconProps}>
            <rect x="4" y="9" width="16" height="11" rx="2" stroke="#8962bd" strokeWidth="1.8" />
            <path d="M4 9l8-5 8 5M12 4v5" stroke="#8962bd" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        ),
      },
    ],
  },
];

export const highlightModules: ModuleItem[] = moduleCategories
  .flatMap((category) => category.items)
  .filter((item) => item.highlight);
