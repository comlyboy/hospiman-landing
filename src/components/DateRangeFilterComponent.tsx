interface DateRangeFilterComponentProps {
  startDate: string;
  endDate: string;
  onStartDateChange: (value: string) => void;
  onEndDateChange: (value: string) => void;
  onClear: () => void;
}

const dateInputClass =
  "w-28 border-none bg-transparent text-sm text-ink-muted outline-none [&::-webkit-calendar-picker-indicator]:cursor-pointer [&::-webkit-calendar-picker-indicator]:opacity-50 [&::-webkit-calendar-picker-indicator]:transition-opacity [&::-webkit-calendar-picker-indicator]:hover:opacity-100";

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
      <div className="flex h-9 items-center rounded-lg border border-line bg-white pl-3 transition-colors duration-200 hover:border-ink-faint focus-within:border-brand-500">
        <input
          id="filter-start-date"
          type="date"
          aria-label="Start date"
          value={startDate}
          onChange={(event) => onStartDateChange(event.target.value)}
          className={dateInputClass}
        />
        <span className="text-sm text-ink-faint">–</span>
        <input
          id="filter-end-date"
          type="date"
          aria-label="End date"
          value={endDate}
          onChange={(event) => onEndDateChange(event.target.value)}
          className={`${dateInputClass} pr-2`}
        />
      </div>
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
