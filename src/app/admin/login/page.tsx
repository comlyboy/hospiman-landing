import type { Metadata } from "next";
import { Suspense } from "react";
import AuthLayoutComponent from "@/components/AuthLayoutComponent";
import LoginFormComponent from "@/components/LoginFormComponent";
import AuthFormSkeletonComponent from "@/components/AuthFormSkeletonComponent";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your Hospiman account.",
  alternates: { canonical: "/admin/login" },
  robots: { index: false, follow: false },
};

export default function AdminLoginPageComponent() {
  return (
    <AuthLayoutComponent eyebrow="WELCOME BACK" title="Login to Hospiman">
      <Suspense fallback={<AuthFormSkeletonComponent fieldCount={2} />}>
        <LoginFormComponent />
      </Suspense>
    </AuthLayoutComponent>
  );
}
