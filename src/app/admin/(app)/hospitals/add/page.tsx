import type { Metadata } from "next";
import AddHospitalFormComponent from "@/components/AddHospitalFormComponent";

export const metadata: Metadata = {
  title: "Add Hospital",
  description: "Register a new hospital on your Hospiman account.",
  alternates: { canonical: "/admin/hospitals/add" },
  robots: { index: false, follow: false },
};

export default function AdminAddHospitalPageComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <AddHospitalFormComponent />
    </div>
  );
}
