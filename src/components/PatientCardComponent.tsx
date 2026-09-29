import type { PatientRecord } from "@/lib/patients-data";

function FieldRow({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2 text-[13px] text-ink-muted">
      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-ground text-ink-faint">{icon}</span>
      {value}
    </div>
  );
}

function PersonIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" />
    </svg>
  );
}

function ActionChip({ label }: { label: string }) {
  return (
    <button
      type="button"
      className="rounded-full border border-brand-100 px-3 py-1 text-[11.5px] font-bold text-brand-700 transition-colors duration-200 hover:border-brand-300 hover:bg-brand-50"
    >
      {label}
    </button>
  );
}

export default function PatientCardComponent({ patient }: { patient: PatientRecord }) {
  return (
    <div className="group rounded-xl border border-line bg-white p-4 transition-all duration-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-900/10">
      <div className="flex items-start gap-3.5">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-brand-50 text-sm font-bold text-brand-700 transition-transform duration-200 group-hover:scale-110">
          {patient.avatarInitials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-start justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[14.5px] font-bold text-brand-700">
                {patient.name.toUpperCase()} [{patient.patientId}]
              </span>
              <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[10.5px] font-bold text-brand-700">{patient.gender}</span>
            </div>

            <div className="flex shrink-0 items-center gap-1.5">
              <ActionChip label="Check-In" />
              <ActionChip label="View" />
              <ActionChip label="Edit" />
            </div>
          </div>

          <div className="mt-2.5 grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
            <div className="flex flex-col gap-1.5">
              <FieldRow icon={<PersonIcon />} value={`${patient.dob} · ${patient.age} years`} />
              {patient.email && <FieldRow icon={<MailIcon />} value={patient.email} />}
            </div>
            <div className="flex flex-col gap-1.5">
              {patient.phone && <FieldRow icon={<PhoneIcon />} value={patient.phone} />}
              {patient.address && <FieldRow icon={<HomeIcon />} value={patient.address} />}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
