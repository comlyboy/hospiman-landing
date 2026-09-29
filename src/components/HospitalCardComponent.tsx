"use client";

import { useState } from "react";
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

const actionButtonClass =
  "rounded-lg border border-line bg-white px-3.5 py-2 text-sm font-semibold text-ink transition-colors duration-200 hover:border-brand-500 hover:bg-brand-50 hover:text-brand-700";

export default function HospitalCardComponent({ hospital }: HospitalCardComponentProps) {
  const [isTokenVisible, setIsTokenVisible] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(hospital.clientToken);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — fail silently.
    }
  };

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

      {isTokenVisible && (
        <div className="border-t border-line p-6">
          <div className="mb-1.5 text-sm font-semibold text-ink">Client token:</div>
          <div className="flex overflow-hidden rounded-lg border border-line">
            <input
              type="text"
              readOnly
              value={hospital.clientToken}
              className="min-w-0 flex-1 truncate bg-ground px-3 py-2 font-mono text-xs text-ink-muted outline-none"
            />
            <button
              type="button"
              onClick={handleCopy}
              className="shrink-0 bg-line px-4 py-2 text-sm font-bold text-ink transition-colors duration-200 hover:bg-brand-100"
            >
              {copied ? "Copied!" : "Copy"}
            </button>
          </div>
          <button
            type="button"
            className="mt-2 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
          >
            reset token
          </button>
        </div>
      )}

      <div className="flex flex-wrap gap-2 border-t border-line bg-brand-50/40 p-4">
        <button type="button" className={actionButtonClass}>
          Edit
        </button>
        <Link href="/admin/hospitals/renew-license" className={actionButtonClass}>
          Renew License
        </Link>
        <Link href="/admin/payments" className={actionButtonClass}>
          Payments
        </Link>
        <Link href="/admin/invoices" className={actionButtonClass}>
          Invoices
        </Link>
        <Link href="/admin/dashboard" className={actionButtonClass}>
          Dashboard
        </Link>
        <Link href="/admin/hospitals/send-sms" className={actionButtonClass}>
          Send Sms
        </Link>
        <button type="button" className={actionButtonClass}>
          Wallets
        </button>
        <button type="button" onClick={() => setIsTokenVisible((visible) => !visible)} className={actionButtonClass}>
          {isTokenVisible ? "Hide Token" : "Show Token"}
        </button>
      </div>
    </div>
  );
}
