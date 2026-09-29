import type { Metadata } from "next";
import SendSmsFormComponent from "@/components/SendSmsFormComponent";

export const metadata: Metadata = {
  title: "Send SMS",
  description: "Send a custom SMS message to one or more phone numbers.",
  alternates: { canonical: "/admin/hospitals/send-sms" },
  robots: { index: false, follow: false },
};

export default function AdminSendSmsPageComponent() {
  return (
    <div className="mx-auto flex max-w-2xl flex-col gap-6 p-4">
      <SendSmsFormComponent />
    </div>
  );
}
