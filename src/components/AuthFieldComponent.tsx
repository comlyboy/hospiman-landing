import type { InputHTMLAttributes } from "react";

interface AuthFieldComponentProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export default function AuthFieldComponent({ label, id, ...inputProps }: AuthFieldComponentProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={id} className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
        {label}
      </label>
      <input
        id={id}
        className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
        {...inputProps}
      />
    </div>
  );
}
