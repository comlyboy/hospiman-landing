import type { ReactNode } from "react";

interface ModuleRowComponentProps {
  icon: ReactNode;
  title: string;
  description: string;
  fullWidth?: boolean;
}

export default function ModuleRowComponent({
  icon,
  title,
  description,
  fullWidth = false,
}: ModuleRowComponentProps) {
  return (
    <div
      className={`flex items-center gap-3 rounded-xl border border-line bg-white p-4 ${
        fullWidth ? "sm:col-span-2" : ""
      }`}
    >
      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-[9px] bg-brand-50">
        {icon}
      </div>
      <div>
        <div className="text-[13.5px] font-bold leading-tight">{title}</div>
        <div className="mt-0.5 text-[12.5px] leading-snug text-ink-muted">{description}</div>
      </div>
    </div>
  );
}
