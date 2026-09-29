"use client";

import { useState } from "react";
import AppTopBarComponent from "@/components/AppTopBarComponent";
import AppDrawerComponent from "@/components/AppDrawerComponent";
import PatientCardComponent from "@/components/PatientCardComponent";
import { patientRecords } from "@/lib/patients-data";

const toolbarActions = ["Create", "Requests", "Find By...", "Upload", "Actions...", "Goto Payment", "Goto Billing", "All"];

export default function AppPatientsComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchAcrossFacilities, setIsSearchAcrossFacilities] = useState(false);

  return (
    <div className="flex h-screen flex-col overflow-hidden bg-brand-50">
      <AppTopBarComponent title="Patients" onOpenDrawer={() => setIsDrawerOpen(true)} showAddPerson />

      <div className="flex shrink-0 items-center gap-2 overflow-x-auto bg-zinc-900 px-4 py-3">
        {toolbarActions.map((action) => (
          <button
            key={action}
            type="button"
            className="shrink-0 rounded-md border border-white/25 px-4 py-2 text-sm font-medium whitespace-nowrap text-white/90 transition-colors duration-200 hover:bg-white/10"
          >
            {action}
          </button>
        ))}
        <button
          type="button"
          aria-label="Help"
          className="ml-auto flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/90 transition-colors duration-200 hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.6" />
            <path
              d="M9.5 9a2.5 2.5 0 1 1 3.5 2.3c-.7.3-1 .9-1 1.7v.3M12 17v.1"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
            />
          </svg>
        </button>
        <button
          type="button"
          aria-label="Refresh"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/25 text-white/90 transition-colors duration-200 hover:bg-white/10"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 12a8 8 0 0 1 14-5.3M20 12a8 8 0 0 1-14 5.3M4 4v5h5M20 20v-5h-5"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-6 overflow-y-auto px-4 py-8">
        <h1 className="text-lg font-bold tracking-wide text-ink uppercase">Recent Patient ({patientRecords.length})</h1>

        <label className="flex items-center gap-2 text-sm font-semibold text-brand-700">
          <input
            type="checkbox"
            checked={isSearchAcrossFacilities}
            onChange={(event) => setIsSearchAcrossFacilities(event.target.checked)}
            className="h-4 w-4 accent-brand-500"
          />
          Search across facilities
        </label>

        <div className="flex w-full flex-col gap-4">
          {patientRecords.map((patient) => (
            <PatientCardComponent key={patient.patientId} patient={patient} />
          ))}
        </div>
      </div>

      <AppDrawerComponent isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
