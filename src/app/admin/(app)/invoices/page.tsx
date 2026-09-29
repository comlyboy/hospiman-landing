import type { Metadata } from "next";
import InvoiceListComponent from "@/components/InvoiceListComponent";

export const metadata: Metadata = {
  title: "Invoices",
  description: "Billing history for your Hospiman account.",
  alternates: { canonical: "/admin/invoices" },
  robots: { index: false, follow: false },
};

export default function AdminInvoicesPageComponent() {
  return <InvoiceListComponent />;
}
