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
];
