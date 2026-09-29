export interface LicensePlanEntry {
  name: string;
  amount: string;
  durationMonths: number;
  maxPatientSize: string;
  description: string;
}

export const licensePlanEntries: LicensePlanEntry[] = [
  {
    name: "PREMIER BI-ANNUAL",
    amount: "450,000",
    durationMonths: 12,
    maxPatientSize: "20,000",
    description: "Hosting and license inclusive",
  },
  {
    name: "PREMIER - ANNUAL",
    amount: "800,000",
    durationMonths: 12,
    maxPatientSize: "20,000",
    description: "Hosting and license inclusive",
  },
  {
    name: "STANDARD BI-ANNUAL",
    amount: "300,000",
    durationMonths: 6,
    maxPatientSize: "10,000",
    description: "License and Hosting inclusive",
  },
  {
    name: "STANDARD - ANNUAL",
    amount: "500,000",
    durationMonths: 12,
    maxPatientSize: "10,000",
    description: "License and Hosting inclusive",
  },
];
