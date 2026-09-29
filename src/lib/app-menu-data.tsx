import type { ReactNode } from "react";

export interface MenuTile {
  label: string;
  description: string;
  icon: ReactNode;
}

export function TileIcon({ d, circles }: { d: string; circles?: { cx: number; cy: number; r: number }[] }) {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d={d} stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      {circles?.map((c, index) => (
        <circle key={index} cx={c.cx} cy={c.cy} r={c.r} fill="currentColor" />
      ))}
    </svg>
  );
}

export const menuTiles: MenuTile[] = [
  {
    label: "Dashboard",
    description: "A real-time overview of patients, revenue and activity across your hospital.",
    icon: <TileIcon d="M4 19h16M6 19V9m6 10V5m6 14v-7" />,
  },
  {
    label: "Patient",
    description: "Search, register and manage every patient record and next-of-kin detail.",
    icon: <TileIcon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" circles={[{ cx: 18, cy: 8, r: 2 }]} />,
  },
  {
    label: "Med Report",
    description: "Create and review medical reports and diagnosis summaries per visit.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6 2 2 4-4M9 15h6" />,
  },
  {
    label: "My Appointments",
    description: "View and manage upcoming appointments booked across the hospital.",
    icon: (
      <TileIcon
        d="M4 8h16M7 3v4m10-4v4M5 6h14a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1Z"
        circles={[{ cx: 15, cy: 15, r: 3 }]}
      />
    ),
  },
  {
    label: "Vital Sign",
    description: "Record temperature, blood pressure, pulse and other vitals per visit.",
    icon: <TileIcon d="M3 12h4l2-6 4 12 2-6h6" />,
  },
  {
    label: "Payment",
    description: "Take individual patient payments and view itemised transaction history.",
    icon: <TileIcon d="M3 6h18v12H3V6Zm4 12s2-4 5-4 5 4 5 4" />,
  },
  {
    label: "Billing",
    description: "Generate and settle bills for consultations, procedures and admissions.",
    icon: <TileIcon d="M3 15c4 3 14 3 18 0M12 3v10m0 0-3-3m3 3 3-3" />,
  },
  {
    label: "Financial Status",
    description: "Track outstanding balances and overall financial position per patient.",
    icon: <TileIcon d="M12 3v18M6 9l6-4 6 4M4 9h4v6a2 2 0 0 1-4 0V9Zm12 0h4v6a2 2 0 0 1-4 0V9Z" />,
  },
  {
    label: "Group Payment",
    description: "Process a single payment across multiple linked patient accounts.",
    icon: <TileIcon d="M3 6h14v12H3V6Zm2 12s2-4 5-4 5 4 5 4" circles={[{ cx: 20, cy: 5, r: 2 }]} />,
  },
  {
    label: "Discount",
    description: "Apply and manage discount rates on services, bills and packages.",
    icon: <TileIcon d="m20 9-9-9H4v7l9 9 7-7Z" circles={[{ cx: 8.5, cy: 4.5, r: 1.4 }]} />,
  },
  {
    label: "Expenditure",
    description: "Log hospital expenses and track spending against your budget.",
    icon: <TileIcon d="M3 7h18v12H3V7Zm0 0 2-3h14l2 3M16 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />,
  },
  {
    label: "Payment Destination",
    description: "Route incoming payments to the correct bank account, till or wallet.",
    icon: <TileIcon d="M3 6h14v12H3V6Zm2 12s2-4 5-4 5 4 5 4M21 10v8" />,
  },
  {
    label: "Pregnancy",
    description: "Track antenatal visits, gestation milestones and maternal vitals.",
    icon: <TileIcon d="M10 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6c-3 0-5 2.5-5 6v6h10v-6c0-3.5-2-6-5-6Z" />,
  },
  {
    label: "Labour Summary",
    description: "Record labour progress, delivery outcomes and postnatal notes.",
    icon: (
      <TileIcon
        d="M4 16a4 4 0 0 1 4-4h1m11 4a4 4 0 0 0-4-4h-1M9 12V8a3 3 0 0 1 6 0v4"
        circles={[{ cx: 19, cy: 9, r: 1.6 }]}
      />
    ),
  },
  {
    label: "Admissions",
    description: "Admit patients to wards, assign beds and track length of stay.",
    icon: (
      <TileIcon
        d="M3 19V10a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v9M3 19h18M6 9V6a2 2 0 0 1 2-2h2m0 0a2 2 0 1 1 0 4"
        circles={[{ cx: 18, cy: 5, r: 1.6 }]}
      />
    ),
  },
  {
    label: "Lab Services",
    description: "Manage the catalogue of lab tests offered and their pricing.",
    icon: <TileIcon d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3" />,
  },
  {
    label: "Report Note",
    description: "Write and attach clinical notes to a patient's ongoing case file.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6h6m-6 4h6m-6 4h3" />,
  },
  {
    label: "Queue",
    description: "See who's waiting, in what order, and route patients to the next stage.",
    icon: (
      <TileIcon
        d="M4 20a5 5 0 0 1 10 0m1-4a4 4 0 0 1 4 4"
        circles={[
          { cx: 9, cy: 8, r: 3 },
          { cx: 17, cy: 9, r: 2.4 },
        ]}
      />
    ),
  },
  {
    label: "HMO Provider",
    description: "Manage HMO partners, coverage plans and provider details.",
    icon: <TileIcon d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" circles={[{ cx: 18, cy: 4, r: 1.6 }]} />,
  },
  {
    label: "Lab Test",
    description: "Order lab tests and record results against a patient's file.",
    icon: (
      <TileIcon
        d="M9 3h6M10 3v6l-5 9a2 2 0 0 0 2 3h10a2 2 0 0 0 2-3l-5-9V3M9 14h6"
        circles={[
          { cx: 10.5, cy: 17.5, r: 0.9 },
          { cx: 13, cy: 19, r: 0.9 },
        ]}
      />
    ),
  },
  {
    label: "Lab Test Recommendation",
    description: "Suggest and track recommended lab tests based on diagnosis.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 9 2 2 4-4" />,
  },
  {
    label: "In House Store",
    description: "Manage the hospital's internal pharmacy and supply store stock.",
    icon: <TileIcon d="M4 9 5 4h14l1 5M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9M4 9h16M9 13h6v7H9v-7Z" />,
  },
  {
    label: "Inventory",
    description: "Track stock levels, restocking and usage across all store items.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 6h6m-6 4 1 1 2-2m-3 6 1 1 2-2" />,
  },
  {
    label: "Send Bulk SMS",
    description: "Send appointment reminders and announcements to many patients at once.",
    icon: <TileIcon d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z" />,
  },
  {
    label: "Family Group",
    description: "Link related patients under one family account for shared billing.",
    icon: (
      <TileIcon
        d="M4 20a5 5 0 0 1 10 0m1-4a4 4 0 0 1 4 4"
        circles={[
          { cx: 9, cy: 8, r: 3 },
          { cx: 17, cy: 9, r: 2.4 },
        ]}
      />
    ),
  },
  {
    label: "Billing Group",
    description: "Group patients under one billing plan for combined invoicing.",
    icon: (
      <TileIcon
        d="M4 20a5 5 0 0 1 10 0"
        circles={[
          { cx: 9, cy: 8, r: 3 },
          { cx: 18, cy: 15, r: 3 },
        ]}
      />
    ),
  },
  {
    label: "Attendance",
    description: "Track staff clock-in and clock-out times across every shift.",
    icon: <TileIcon d="M4 20a5 5 0 0 1 10 0M15 8l2 2 4-4" circles={[{ cx: 9, cy: 8, r: 3 }]} />,
  },
  {
    label: "Work Shift",
    description: "Define and assign staff working shifts across departments.",
    icon: <TileIcon d="M12 3a9 9 0 1 0 0 18 9 9 0 0 0 0-18Zm0 4v5l3 3" />,
  },
  {
    label: "Nurse Note",
    description: "Record nursing observations and care updates during a patient's stay.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 13 6-6 2 2-6 6-2 .5.5-2Z" />,
  },
  {
    label: "Rosters",
    description: "Plan and publish staff duty rosters across wards and departments.",
    icon: <TileIcon d="M7 3h10a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm2 7h6m-6 4h6m-6 4h4" />,
  },
  {
    label: "Imaging",
    description: "Order and manage X-ray, scan and other imaging requests.",
    icon: <TileIcon d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v9M8 13h8m-5 4-3 4m5-4 3 4" />,
  },
  {
    label: "Imaging Service",
    description: "Maintain the catalogue of imaging services offered and their cost.",
    icon: (
      <TileIcon d="M12 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm0 6v9M8 13h8m-5 4-3 4m5-4 3 4" circles={[{ cx: 19, cy: 5, r: 1.6 }]} />
    ),
  },
  {
    label: "Guest Log",
    description: "Log visitors and guests moving in and out of the hospital.",
    icon: <TileIcon d="M7 3h8l4 4v14a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1Zm8 0v4h4M9 13h6m-6 4h6" />,
  },
  {
    label: "Pricing",
    description: "Set and update prices for services across every department.",
    icon: <TileIcon d="m20 9-9-9H4v7l9 9 7-7Z" circles={[{ cx: 8.5, cy: 4.5, r: 1.4 }]} />,
  },
  {
    label: "Wallet",
    description: "View patient wallet balances and manage top-ups or withdrawals.",
    icon: <TileIcon d="M3 7h18v12H3V7Zm0 0 2-3h14l2 3M16 13a2 2 0 1 0 0 4 2 2 0 0 0 0-4Z" />,
  },
  {
    label: "Accomodation",
    description: "Assign hospital rooms and beds and track occupancy in real time.",
    icon: <TileIcon d="M3 19v-7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2h6a2 2 0 0 1 2 2v3M3 19h18M3 12V6" />,
  },
  {
    label: "Admin",
    description: "Manage staff accounts, roles and permissions across the hospital.",
    icon: <TileIcon d="M12 3l7 3v5c0 4.5-3 8-7 10-4-2-7-5.5-7-10V6l7-3Z" />,
  },
  {
    label: "Asset Register",
    description: "Keep a record of hospital equipment, devices and fixed assets.",
    icon: <TileIcon d="M6 3h11a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H6a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm0 0v18M9 7h6m-6 4h6" />,
  },
  {
    label: "Department",
    description: "Organise staff and services into departments and reporting lines.",
    icon: (
      <TileIcon
        d="M12 7v6m0 0H6v4m6-4h6v4"
        circles={[
          { cx: 12, cy: 5, r: 2 },
          { cx: 6, cy: 19, r: 2 },
          { cx: 18, cy: 19, r: 2 },
        ]}
      />
    ),
  },
  {
    label: "Dialysis Report",
    description: "Record dialysis sessions and track patient treatment history.",
    icon: <TileIcon d="M12 3s6 7 6 11a6 6 0 1 1-12 0c0-4 6-11 6-11Z" />,
  },
];
