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
    <div className="flex h-screen flex-col bg-brand-50">
      <AdminTopBarComponent hospitalName="CHRIS MED [1000]" onOpenSidebar={() => setIsSidebarOpen(true)} />
      <div className="flex flex-1 overflow-hidden">
        <AdminSidebarComponent isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
        <div className="min-w-0 flex-1 overflow-y-auto pt-8">{children}</div>
      </div>
    </div>
  );
}
