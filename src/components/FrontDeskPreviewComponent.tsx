interface QueueRow {
  name: string;
  wait: string;
  emergency?: boolean;
}

const queueRows: QueueRow[] = [
  { name: "Adaeze O.", wait: "Waiting · 12m" },
  { name: "Musa I.", wait: "Waiting · 6m" },
  { name: "Chidinma E.", wait: "Promote →", emergency: true },
];

export default function FrontDeskPreviewComponent() {
  return (
    <div className="w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl shadow-black/40 sm:max-w-md">
      <div className="flex items-center justify-between">
        <span className="text-sm font-bold text-ink">Front Desk — Today</span>
        <span className="flex items-center gap-1.5 text-xs text-ink-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-700" />
          Live
        </span>
      </div>

      <div className="mt-4 flex flex-col gap-2.5">
        {queueRows.map((row) => (
          <div
            key={row.name}
            className={`flex items-center justify-between rounded-lg p-3 ${
              row.emergency ? "bg-amber-bg" : "bg-ground"
            }`}
          >
            <span className="flex items-center gap-2 text-sm font-semibold text-ink">
              {row.name}
              {row.emergency && (
                <span className="rounded-md bg-amber-500 px-1.5 py-0.5 text-[10px] font-bold text-white">
                  EMERGENCY
                </span>
              )}
            </span>
            <span className={`text-xs font-medium ${row.emergency ? "text-amber-text" : "text-ink-muted"}`}>
              {row.wait}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <div className="rounded-lg bg-ground p-3">
          <div className="text-[11px] tracking-wide text-ink-muted uppercase">BMI (auto)</div>
          <div className="mt-1 text-xl font-bold text-ink">24.1</div>
        </div>
        <div className="rounded-lg bg-ground p-3">
          <div className="text-[11px] tracking-wide text-ink-muted uppercase">Balance due</div>
          <div className="mt-1 flex items-baseline gap-1.5">
            <span className="text-xl font-bold text-ink">₦12,000</span>
            <span className="rounded-md bg-amber-bg px-1.5 py-0.5 text-[10px] font-bold text-amber-text">
              DEBTOR
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
