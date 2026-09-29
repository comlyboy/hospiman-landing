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
    <div className="flex flex-wrap items-center gap-2">
      <label htmlFor="filter-start-date" className="sr-only">
        Start date
      </label>
      <input
        id="filter-start-date"
        type="date"
        value={startDate}
        onChange={(event) => onStartDateChange(event.target.value)}
        className="h-9 rounded-lg border border-line px-2.5 text-sm text-ink-muted transition-colors duration-200 hover:border-ink-faint focus:text-ink focus:outline-2 focus:outline-brand-500"
      />
      <span className="text-sm text-ink-faint">–</span>
      <label htmlFor="filter-end-date" className="sr-only">
        End date
      </label>
      <input
        id="filter-end-date"
        type="date"
        value={endDate}
        onChange={(event) => onEndDateChange(event.target.value)}
        className="h-9 rounded-lg border border-line px-2.5 text-sm text-ink-muted transition-colors duration-200 hover:border-ink-faint focus:text-ink focus:outline-2 focus:outline-brand-500"
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
  );
}
