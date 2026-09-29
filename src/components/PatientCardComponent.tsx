import type { PatientRecord } from "@/lib/patients-data";

function FieldRow({ icon, value }: { icon: React.ReactNode; value: string }) {
  return (
    <div className="flex items-center gap-2 text-sm text-ink">
      <span className="text-ink-faint">{icon}</span>
      {value}
    </div>
  );
}

function PersonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm-7 8a7 7 0 0 1 14 0" />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6h16v12H4V6Zm0 0 8 7 8-7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M6.5 3h3l1.5 4-2 1.5a11 11 0 0 0 5.5 5.5L16 12l4 1.5v3a2 2 0 0 1-2 2A15 15 0 0 1 4.5 5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 3 2 12h3v8h6v-6h2v6h6v-8h3L12 3Z" />
    </svg>
  );
}

export default function PatientCardComponent({ patient }: { patient: PatientRecord }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-brand-900/10">
      <div className="flex flex-col gap-3 p-5">
        <div className="flex items-start gap-3">
          <div className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full text-sm font-bold text-white ${patient.avatarColor}`}>
            {patient.avatarInitials}
          </div>
          <div className="flex-1">
            <div className="text-[15px] font-bold text-brand-700">
              {patient.name.toUpperCase()} [{patient.patientId}]
            </div>

            <div className="mt-1.5 grid grid-cols-1 gap-x-8 gap-y-1 sm:grid-cols-2">
              <div className="flex flex-col gap-1">
                <FieldRow icon={<PersonIcon />} value={`${patient.dob} [ ${patient.age} years ]`} />
                {patient.email && <FieldRow icon={<MailIcon />} value={patient.email} />}
              </div>
              <div className="flex flex-col gap-1">
                {patient.phone && <FieldRow icon={<PhoneIcon />} value={patient.phone} />}
                {patient.address && <FieldRow icon={<HomeIcon />} value={patient.address} />}
              </div>
            </div>

            <span className="mt-3 inline-block rounded-full bg-brand-100 px-3 py-1 text-[11px] font-bold text-brand-700">
              {patient.gender}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-end gap-5 border-t border-line px-5 py-3 text-sm font-semibold">
        <button type="button" className="text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Check-In
        </button>
        <button type="button" className="text-brand-700 transition-colors duration-200 hover:text-brand-800">
          View
        </button>
        <button type="button" className="text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Edit
        </button>
      </div>
    </div>
  );
}
