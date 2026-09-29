"use client";

interface HospitalSwitcherModalComponentProps {
  isOpen: boolean;
  onClose: () => void;
}

const hospitals = [{ name: "CHRIS MED", code: "1000" }];

export default function HospitalSwitcherModalComponent({ isOpen, onClose }: HospitalSwitcherModalComponentProps) {
  return (
    <>
      <div
        onClick={onClose}
        aria-hidden="true"
        className={`fixed inset-0 z-40 bg-brand-900/40 backdrop-blur-[2px] transition-opacity duration-200 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      />

      <div
        aria-hidden={!isOpen}
        className={`fixed inset-0 z-50 flex items-center justify-center p-4 transition-all duration-200 ${
          isOpen ? "opacity-100" : "pointer-events-none opacity-0"
        }`}
      >
        <div
          className={`w-full max-w-sm rounded-2xl bg-white p-6 shadow-2xl transition-transform duration-200 ${
            isOpen ? "scale-100" : "scale-95"
          }`}
        >
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-lg font-bold text-ink">Select Hospital</h2>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close"
              className="flex h-8 w-8 items-center justify-center rounded-full transition-colors duration-200 hover:bg-brand-50"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M6 6l12 12M18 6 6 18" stroke="#6b6478" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="flex flex-col gap-2">
            {hospitals.map((hospital, index) => (
              <button
                key={hospital.code}
                type="button"
                onClick={onClose}
                className="flex items-center justify-between rounded-xl border border-brand-500/30 bg-brand-50 px-4 py-3 text-left transition-colors duration-200 hover:bg-brand-100"
              >
                <span className="flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-[10px] bg-brand-500 text-xs font-bold text-white">
                    {hospital.name.charAt(0)}
                  </span>
                  <span className="text-[15px] font-semibold text-ink">
                    {hospital.name} [{hospital.code}]
                  </span>
                </span>
                {index === 0 && (
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M5 12.5 10 17 19 7" stroke="#8962bd" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={onClose}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-dashed border-line py-3 text-sm font-bold text-brand-700 transition-colors duration-200 hover:border-brand-500 hover:bg-brand-50"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
            Add Hospital
          </button>
        </div>
      </div>
    </>
  );
}
