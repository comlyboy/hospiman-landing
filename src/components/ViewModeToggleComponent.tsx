export type ViewMode = "card" | "table";

interface ViewModeToggleComponentProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export default function ViewModeToggleComponent({ viewMode, onChange }: ViewModeToggleComponentProps) {
  return (
    <div className="inline-flex shrink-0 rounded-lg border border-line bg-white p-1">
      <button
        type="button"
        onClick={() => onChange("card")}
        aria-label="Card view"
        aria-pressed={viewMode === "card"}
        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200 ${
          viewMode === "card" ? "bg-brand-500 text-white" : "text-ink-muted hover:bg-brand-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
      <button
        type="button"
        onClick={() => onChange("table")}
        aria-label="Table view"
        aria-pressed={viewMode === "table"}
        className={`flex h-8 w-8 items-center justify-center rounded-md transition-colors duration-200 ${
          viewMode === "table" ? "bg-brand-500 text-white" : "text-ink-muted hover:bg-brand-50"
        }`}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M3 10h18M9 10v10" stroke="currentColor" strokeWidth="1.8" />
        </svg>
      </button>
    </div>
  );
}
