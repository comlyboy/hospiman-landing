interface AppTopBarComponentProps {
  title: string;
  onOpenDrawer: () => void;
  showAddPerson?: boolean;
}

export default function AppTopBarComponent({ title, onOpenDrawer, showAddPerson = false }: AppTopBarComponentProps) {
  return (
    <div className="relative flex h-14 shrink-0 items-center justify-between bg-brand-500 px-4">
      <button
        type="button"
        onClick={onOpenDrawer}
        aria-label="Open menu"
        className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>

      <span className="absolute left-1/2 -translate-x-1/2 text-sm font-bold tracking-[0.2em] text-white/85 uppercase">
        {title}
      </span>

      <div className="flex items-center gap-4 text-white">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M18 8a6 6 0 1 0-12 0c0 7-3 9-3 9h18s-3-2-3-9ZM13.73 21a2 2 0 0 1-3.46 0"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path
            d="M21 11.5a8.38 8.38 0 0 1-8.5 8.5 8.5 8.5 0 0 1-4-1L3 20l1-5.5A8.38 8.38 0 0 1 12.5 3 8.38 8.38 0 0 1 21 11.5Z"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {showAddPerson && (
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="9" cy="8" r="3.2" stroke="currentColor" strokeWidth="1.8" />
            <path
              d="M3 20a6 6 0 0 1 12 0M18 8v6m3-3h-6"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
          {[0, 1, 2].flatMap((row) => [0, 1, 2].map((col) => <circle key={`${row}-${col}`} cx={5 + col * 7} cy={5 + row * 7} r="1.6" />))}
        </svg>
      </div>
    </div>
  );
}
