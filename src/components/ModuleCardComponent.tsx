import type { ReactNode } from "react";

interface ModuleCardComponentProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function ModuleCardComponent({ icon, title, description }: ModuleCardComponentProps) {
  return (
    <div className="group flex flex-col gap-3 rounded-2xl border border-line bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-brand-500/40 hover:shadow-lg hover:shadow-brand-900/10">
      <div className="flex h-10 w-10 items-center justify-center rounded-[10px] bg-brand-50 transition-transform duration-300 group-hover:scale-110">
        {icon}
      </div>
      <h3 className="text-[17px] font-bold">{title}</h3>
      <p className="text-sm leading-relaxed text-ink-muted">{description}</p>
    </div>
  );
}
