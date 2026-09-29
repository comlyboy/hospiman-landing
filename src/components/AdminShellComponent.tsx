import type { ReactNode } from "react";
import AdminSidebarComponent from "@/components/AdminSidebarComponent";
import AdminTopBarComponent from "@/components/AdminTopBarComponent";

interface AdminShellComponentProps {
  children: ReactNode;
}

export default function AdminShellComponent({ children }: AdminShellComponentProps) {
  return (
    <div className="flex min-h-screen flex-col bg-brand-50">
      <AdminTopBarComponent hospitalName="CHRIS MED [1000]" />
      <div className="flex flex-1">
        <AdminSidebarComponent />
        <div className="min-w-0 flex-1">{children}</div>
      </div>
    </div>
  );
}
