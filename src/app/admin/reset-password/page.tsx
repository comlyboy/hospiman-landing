import type { Metadata } from "next";
import { Suspense } from "react";
import AuthLayoutComponent from "@/components/AuthLayoutComponent";
import ResetPasswordFormComponent from "@/components/ResetPasswordFormComponent";
import AuthFormSkeletonComponent from "@/components/AuthFormSkeletonComponent";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your Hospiman account.",
  alternates: { canonical: "/admin/reset-password" },
  robots: { index: false, follow: false },
};

export default function AdminResetPasswordPageComponent() {
  return (
    <AuthLayoutComponent eyebrow="RESET PASSWORD" title="Set a new password">
      <Suspense fallback={<AuthFormSkeletonComponent fieldCount={2} />}>
        <ResetPasswordFormComponent />
      </Suspense>
    </AuthLayoutComponent>
  );
}
