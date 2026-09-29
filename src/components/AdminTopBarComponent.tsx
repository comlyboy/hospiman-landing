interface AdminTopBarComponentProps {
  title: string;
}

export default function AdminTopBarComponent({ title }: AdminTopBarComponentProps) {
  return (
    <div className="relative flex h-16 items-center justify-center bg-brand-500 px-4">
      <button
        type="button"
        aria-label="Open menu"
        className="absolute left-4 flex h-9 w-9 items-center justify-center rounded-md transition-colors duration-200 hover:bg-white/10"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M4 7h16M4 12h16M4 17h16" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <span className="text-sm font-bold tracking-widest text-white uppercase">{title}</span>
    </div>
  );
}
