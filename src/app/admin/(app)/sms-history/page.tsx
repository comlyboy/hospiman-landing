import type { Metadata } from "next";
import SmsHistoryListComponent from "@/components/SmsHistoryListComponent";

export const metadata: Metadata = {
  title: "SMS Sent History",
  description: "History of SMS messages sent from your Hospiman account.",
  alternates: { canonical: "/admin/sms-history" },
  robots: { index: false, follow: false },
};

export default function AdminSmsHistoryPageComponent() {
  return <SmsHistoryListComponent />;
}
