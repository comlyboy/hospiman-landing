import type { ReactNode } from "react";
import AdminShellComponent from "@/components/AdminShellComponent";

interface AdminAppLayoutProps {
  children: ReactNode;
}

export default function AdminAppLayoutComponent({ children }: AdminAppLayoutProps) {
  return <AdminShellComponent>{children}</AdminShellComponent>;
}
