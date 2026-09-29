import type { Metadata } from "next";
import AuthLayoutComponent from "@/components/AuthLayoutComponent";
import AppLoginFormComponent from "@/components/AppLoginFormComponent";

export const metadata: Metadata = {
  title: "App Login",
  description: "Login to the Hospiman app.",
  alternates: { canonical: "/app" },
  robots: { index: false, follow: false },
};

export default function AppHomePageComponent() {
  return (
    <AuthLayoutComponent
      eyebrow="WELCOME BACK"
      title="Login to Hospiman"
      subtitle="This is a demo: enter any email and password to continue."
    >
      <AppLoginFormComponent />
    </AuthLayoutComponent>
  );
}
