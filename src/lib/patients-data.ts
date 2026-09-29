export type PatientGender = "FEMALE" | "MALE";

export interface PatientRecord {
  patientId: string;
  name: string;
  avatarInitials: string;
  dob: string;
  age: number;
  gender: PatientGender;
  phone?: string;
  email?: string;
  address?: string;
  tag?: string;
}

export const patientRecords: PatientRecord[] = [
  {
    patientId: "1008",
    name: "Fomo Fada Koko",
    avatarInitials: "FF",
    dob: "14 Mar 1999",
    age: 27,
    gender: "FEMALE",
    phone: "+2347067295663",
    email: "ek@gmai.com",
    address: "34, dudu ola close",
  },
  {
    patientId: "1007",
    name: "Miracle Okafor",
    avatarInitials: "MO",
    dob: "31 Aug 1989",
    age: 37,
    gender: "FEMALE",
    address: "5 owerri road",
  },
  {
    patientId: "1006",
    name: "Peter Uzoh",
    avatarInitials: "PU",
    dob: "31 Aug 1994",
    age: 32,
    gender: "MALE",
  },
  {
    patientId: "1003",
    name: "Hope Uzoh",
    avatarInitials: "HU",
    dob: "09 Aug 2002",
    age: 24,
    gender: "FEMALE",
    address: "5 imagbon street fadeyi bustop yaba",
    tag: "FAMILY GROUP",
  },
  {
    patientId: "1002",
    name: "Jude Aso",
    avatarInitials: "JA",
    dob: "03 Apr 1990",
    age: 36,
    gender: "MALE",
    email: "genbliz@gmail.com",
    address: "7, imagbon street, yaba",
  },
  {
    patientId: "1001",
    name: "Christian Uzoh",
    avatarInitials: "CU",
    dob: "02 Feb 1994",
    age: 32,
    gender: "MALE",
    email: "genbliz@gmail.com",
    phone: "+2348036355545",
    address: "7, imagbon street, yaba",
    tag: "HMO",
  },
];
