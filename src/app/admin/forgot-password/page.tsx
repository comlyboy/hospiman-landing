import type { Metadata } from "next";
import AuthLayoutComponent from "@/components/AuthLayoutComponent";
import ForgotPasswordFormComponent from "@/components/ForgotPasswordFormComponent";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset the password for your Hospiman account.",
  alternates: { canonical: "/admin/forgot-password" },
  robots: { index: false, follow: false },
};

export default function AdminForgotPasswordPageComponent() {
  return (
    <AuthLayoutComponent
      eyebrow="FORGOT PASSWORD"
      title="Reset your password"
      subtitle="Enter your email and we'll send you a link to reset it."
    >
      <ForgotPasswordFormComponent />
    </AuthLayoutComponent>
  );
}
