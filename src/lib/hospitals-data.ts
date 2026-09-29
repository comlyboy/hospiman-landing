export interface HospitalEntry {
  name: string;
  createdDate: string;
  email: string;
  phone: string;
  shortCode: string;
  address: string;
  website: string;
  licenseExpireDate: string;
  licenseStatus: string;
  licensePlan: string;
  clientToken: string;
}

export const hospitalEntries: HospitalEntry[] = [
  {
    name: "CHRIS MED",
    createdDate: "September 09, 2019",
    email: "genbliz@gmail.com",
    phone: "+2348036355545",
    shortCode: "1000",
    address: "7, Imagbon Street, Yaba",
    website: "N/A",
    licenseExpireDate: "December 31, 2026",
    licenseStatus: "Activated",
    licensePlan: "Standard - Annual",
    // Not a real credential: base64 of "fake-token-for-demo-purposes-only".
    // The real screenshot showed what looked like a live client token, which
    // this static demo deliberately never embeds.
    clientToken: "client_tk_ZmFrZS10b2tlbi1mb3ItZGVtby1wdXJwb3Nlcy1vbmx5",
  },
];
