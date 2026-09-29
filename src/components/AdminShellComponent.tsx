"use client";

import { useState } from "react";
import type { ReactNode } from "react";
import AdminSidebarComponent from "@/components/AdminSidebarComponent";
import AdminTopBarComponent from "@/components/AdminTopBarComponent";

interface AdminShellComponentProps {
  children: ReactNode;
}

export default function AdminShellComponent({ children }: AdminShellComponentProps) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="flex min-h-screen bg-brand-50">
      <AdminSidebarComponent isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
      <div className="flex min-w-0 flex-1 flex-col">
        <AdminTopBarComponent hospitalName="CHRIS MED [1000]" onOpenSidebar={() => setIsSidebarOpen(true)} />
        {children}
      </div>
    </div>
  );
}
