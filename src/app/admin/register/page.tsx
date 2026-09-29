import type { Metadata } from "next";
import AuthLayoutComponent from "@/components/AuthLayoutComponent";
import RegisterFormComponent from "@/components/RegisterFormComponent";

export const metadata: Metadata = {
  title: "Register",
  description: "Create a Hospiman account for your hospital or clinic.",
  alternates: { canonical: "/admin/register" },
  robots: { index: false, follow: false },
};

export default function AdminRegisterPageComponent() {
  return (
    <AuthLayoutComponent eyebrow="GET STARTED" title="Create your account">
      <RegisterFormComponent />
    </AuthLayoutComponent>
  );
}
