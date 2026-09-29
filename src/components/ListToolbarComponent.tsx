export type ViewMode = "card" | "table";

interface ListToolbarComponentProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onClear: () => void;
  viewMode: ViewMode;
  onViewModeChange: (mode: ViewMode) => void;
}

const dateInputClass =
  "w-28 border-none bg-transparent text-sm text-ink-muted outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:transition-opacity [&::-webkit-calendar-picker-indicator]:hover:opacity-100";

export default function ListToolbarComponent({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClear,
  viewMode,
  onViewModeChange,
}: ListToolbarComponentProps) {
  const hasFilter = Boolean(startDate || endDate);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 rounded-xl border border-line bg-white px-3 py-2">
      <div className="flex flex-wrap items-center gap-2">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true" className="shrink-0 text-ink-faint">
          <rect x="4" y="5" width="16" height="15" rx="2" stroke="currentColor" strokeWidth="1.8" />
          <path d="M4 10h16M8 3v4M16 3v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
        </svg>

        <label htmlFor="filter-start-date" className="sr-only">
          Start date
        </label>
        <input
          id="filter-start-date"
          type="date"
          aria-label="Start date"
          value={startDate}
          onChange={(event) => onStartDateChange(event.target.value)}
          className={dateInputClass}
        />
        <span className="text-sm text-ink-faint">–</span>
        <label htmlFor="filter-end-date" className="sr-only">
          End date
        </label>
        <input
          id="filter-end-date"
          type="date"
          aria-label="End date"
          value={endDate}
          onChange={(event) => onEndDateChange(event.target.value)}
          className={dateInputClass}
        />

        {hasFilter && (
          <button
            type="button"
            onClick={onClear}
            className="text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
          >
            Clear
          </button>
        )}
      </div>

      <div className="flex items-center gap-1 rounded-lg bg-ground p-1">
        <button
          type="button"
          onClick={() => onViewModeChange("card")}
          aria-label="Card view"
          aria-pressed={viewMode === "card"}
          className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200 ${
            viewMode === "card" ? "bg-brand-500 text-white" : "text-ink-muted hover:bg-white"
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="4" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="13" y="4" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="4" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
            <rect x="13" y="13" width="7" height="7" rx="1.5" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
        <button
          type="button"
          onClick={() => onViewModeChange("table")}
          aria-label="Table view"
          aria-pressed={viewMode === "table"}
          className={`flex h-7 w-7 items-center justify-center rounded-md transition-colors duration-200 ${
            viewMode === "table" ? "bg-brand-500 text-white" : "text-ink-muted hover:bg-white"
          }`}
        >
          <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <rect x="3" y="4" width="18" height="16" rx="2" stroke="currentColor" strokeWidth="1.8" />
            <path d="M3 10h18M9 10v10" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        </button>
      </div>
    </div>
  );
}
