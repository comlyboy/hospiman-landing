import type { ReactNode } from "react";

type Tone = "brand" | "blue" | "emerald";

const toneClasses: Record<Tone, string> = {
  brand: "bg-brand-50 text-brand-500",
  blue: "bg-sky-50 text-sky-600",
  emerald: "bg-emerald-50 text-emerald-600",
};

interface AdminStatCardComponentProps {
  icon: ReactNode;
  value: string;
  label: string;
  tone?: Tone;
}

export default function AdminStatCardComponent({ icon, value, label, tone = "brand" }: AdminStatCardComponentProps) {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:shadow-brand-900/10">
      <div className={`flex h-10 w-10 items-center justify-center rounded-[10px] ${toneClasses[tone]}`}>{icon}</div>
      <div>
        <div className="text-xl font-bold text-ink">{value}</div>
        <div className="mt-0.5 text-sm text-ink-muted">{label}</div>
      </div>
    </div>
  );
}
