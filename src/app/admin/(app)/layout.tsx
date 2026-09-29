import type { ReactNode } from "react";
import AdminTopBarComponent from "@/components/AdminTopBarComponent";

interface AdminAppLayoutProps {
  children: ReactNode;
}

export default function AdminAppLayoutComponent({ children }: AdminAppLayoutProps) {
  return (
    <div className="min-h-screen bg-brand-50">
      <AdminTopBarComponent hospitalName="CHRIS MED [1000]" />
      {children}
    </div>
  );
}
