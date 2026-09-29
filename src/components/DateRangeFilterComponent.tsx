interface DateRangeFilterComponentProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onClear: () => void;
}

export default function DateRangeFilterComponent({
  startDate,
  endDate,
  onStartDateChange,
  onEndDateChange,
  onClear,
}: DateRangeFilterComponentProps) {
  const hasFilter = Boolean(startDate || endDate);

  return (
    <div className="flex flex-col gap-3 rounded-xl border border-line bg-white p-4 sm:flex-row sm:items-end">
      <div className="flex flex-1 flex-col gap-1.5">
        <label htmlFor="filter-start-date" className="text-xs font-semibold text-ink-muted">
          Start Date
        </label>
        <input
          id="filter-start-date"
          type="date"
          value={startDate}
          onChange={(event) => onStartDateChange(event.target.value)}
          className="rounded-lg border border-line px-3 py-2 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
        />
      </div>
      <div className="flex flex-1 flex-col gap-1.5">
        <label htmlFor="filter-end-date" className="text-xs font-semibold text-ink-muted">
          End Date
        </label>
        <input
          id="filter-end-date"
          type="date"
          value={endDate}
          onChange={(event) => onEndDateChange(event.target.value)}
          className="rounded-lg border border-line px-3 py-2 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
        />
      </div>
      {hasFilter && (
        <button
          type="button"
          onClick={onClear}
          className="text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800 sm:pb-2.5"
        >
          Clear
        </button>
      )}
    </div>
  );
}
