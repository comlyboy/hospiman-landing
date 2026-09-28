import type { ReactNode } from "react";

interface ModuleCardComponentProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ModuleCardComponent({ icon, title, description }: ModuleCardComponentProps) {
  return (
    <div className="flex flex-col gap-3 rounded-2xl border border-line bg-white p-6">
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-50">
        {icon}
      </div>
      <h3 className="text-[17px] font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
