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

function ViewIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
    </svg>
  );
}

function EditIcon() {
  return (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M16.5 3.5a2.1 2.1 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5Z"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function PatientCardComponent({ patient }: { patient: PatientRecord }) {
  return (
    <div className="group overflow-hidden rounded-xl border border-line bg-white transition-all duration-200 hover:border-brand-500/30 hover:shadow-lg hover:shadow-brand-900/10">
      <div className="flex items-start gap-3.5 p-4">
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-[9px] bg-brand-50 text-sm font-bold text-brand-700 transition-transform duration-200 group-hover:scale-110">
          {patient.avatarInitials}
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-[14.5px] font-bold text-brand-700">
              {patient.name.toUpperCase()} [{patient.patientId}]
            </span>
            <span className="rounded-full bg-brand-100 px-2.5 py-0.5 text-[10.5px] font-bold text-brand-700">{patient.gender}</span>
          </div>

          <div className="mt-2 grid grid-cols-1 gap-x-8 gap-y-1.5 sm:grid-cols-2">
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

      <div className="flex items-center justify-end gap-4 border-t border-line bg-brand-50/40 px-4 py-2.5">
        <button type="button" className="text-[13px] font-bold text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Check-In
        </button>
        <button type="button" aria-label="View" title="View" className="text-brand-700 transition-colors duration-200 hover:text-brand-800">
          <ViewIcon />
        </button>
        <button type="button" aria-label="Edit" title="Edit" className="text-brand-700 transition-colors duration-200 hover:text-brand-800">
          <EditIcon />
        </button>
      </div>
    </div>
  );
}
