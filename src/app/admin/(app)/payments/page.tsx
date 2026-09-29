import type { Metadata } from "next";
import PaymentListComponent from "@/components/PaymentListComponent";

export const metadata: Metadata = {
  title: "Payments",
  description: "Payment history for your Hospiman account.",
  alternates: { canonical: "/admin/payments" },
  robots: { index: false, follow: false },
};

export default function AdminPaymentsPageComponent() {
  return <PaymentListComponent />;
}
