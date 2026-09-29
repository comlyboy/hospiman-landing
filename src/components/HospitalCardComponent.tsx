import Link from "next/link";
import type { HospitalEntry } from "@/lib/hospitals-data";

interface HospitalCardComponentProps {
  hospital: HospitalEntry;
}

interface FieldProps {
  label: string;
  value: string;
}

function Field({ label, value }: FieldProps) {
  return (
    <div>
      <div className="text-[11px] text-ink-muted">{label}</div>
      <div className="text-sm font-semibold text-ink">{value}</div>
    </div>
  );
}

interface ActionItem {
  label: string;
  href?: string;
}

const actionButtonClass =
  "rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700";

export default function HospitalCardComponent({ hospital }: HospitalCardComponentProps) {
  const actions: ActionItem[] = [
    { label: "Edit" },
    { label: "Renew License", href: "/admin/hospitals/renew-license" },
    { label: "Payments", href: "/admin/payments" },
    { label: "Invoices", href: "/admin/invoices" },
    { label: "Dashboard", href: "/admin/dashboard" },
    { label: "Send Sms", href: "/admin/hospitals/send-sms" },
    { label: "Wallets" },
    { label: "Show Token" },
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-line bg-white transition-all duration-300 hover:shadow-lg hover:shadow-brand-900/10">
      <div className="p-6">
        <h2 className="mb-4 text-lg font-bold text-ink">{hospital.name}</h2>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <Field label="Created Date" value={hospital.createdDate} />
          <Field label="Email" value={hospital.email} />
          <Field label="Phone" value={hospital.phone} />
          <Field label="Short Code" value={hospital.shortCode} />
          <Field label="Address" value={hospital.address} />
          <Field label="Website" value={hospital.website} />
        </div>
      </div>

      <div className="grid grid-cols-1 gap-4 border-t border-line p-6 sm:grid-cols-3">
        <Field label="License Expire Date" value={hospital.licenseExpireDate} />
        <div>
          <div className="text-[11px] text-ink-muted">License Activation Status</div>
          <span className="mt-0.5 inline-block rounded-full bg-emerald-50 px-2.5 py-0.5 text-xs font-bold text-emerald-700">
            {hospital.licenseStatus}
          </span>
        </div>
        <Field label="License Plan" value={hospital.licensePlan} />
      </div>

      <div className="flex flex-wrap gap-2 border-t border-line bg-brand-50/40 p-4">
        {actions.map((action) =>
          action.href ? (
            <Link key={action.label} href={action.href} className={actionButtonClass}>
              {action.label}
            </Link>
          ) : (
            <button key={action.label} type="button" className={actionButtonClass}>
              {action.label}
            </button>
          )
        )}
      </div>
    </div>
  );
}
