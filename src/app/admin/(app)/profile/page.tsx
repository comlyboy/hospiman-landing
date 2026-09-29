import type { Metadata } from "next";
import ProfileFormComponent from "@/components/ProfileFormComponent";

export const metadata: Metadata = {
  title: "My Profile",
  description: "Manage your Hospiman account profile.",
  alternates: { canonical: "/admin/profile" },
  robots: { index: false, follow: false },
};

export default function AdminProfilePageComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <ProfileFormComponent />
    </div>
  );
}
