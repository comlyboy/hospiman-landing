import type { ReactNode } from "react";

interface AdminStatCardComponentProps {
  value: string;
  label: string;
  children?: ReactNode;
}

export default function AdminStatCardComponent({ value, label, children }: AdminStatCardComponentProps) {
  return (
    <div className="flex flex-col items-center gap-1 bg-white py-9">
      <span className="text-2xl font-bold text-ink">{value}</span>
      <span className="text-sm text-ink-muted">{label}</span>
      {children && <div className="mt-3">{children}</div>}
    </div>
  );
}
