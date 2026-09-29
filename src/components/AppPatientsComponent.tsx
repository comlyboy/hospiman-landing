"use client";

import { useState } from "react";
import Link from "next/link";
import AppTopBarComponent from "@/components/AppTopBarComponent";
import AppDrawerComponent from "@/components/AppDrawerComponent";
import PatientCardComponent from "@/components/PatientCardComponent";
import { patientRecords } from "@/lib/patients-data";

const toolbarActions = ["Create", "Requests", "Find By...", "Upload", "Actions...", "Goto Payment", "Goto Billing", "All"];

export default function AppPatientsComponent() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isSearchAcrossFacilities, setIsSearchAcrossFacilities] = useState(false);
  const [query, setQuery] = useState("");

  const filtered = patientRecords.filter((patient) => patient.name.toLowerCase().includes(query.toLowerCase()));

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

      <div className="flex shrink-0 items-center gap-3 border-b border-line bg-white px-4 py-3">
        <Link
          href="/app/menu"
          aria-label="Back"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-md text-ink-muted transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M19 12H5m0 0 6-6m-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>

        <div className="relative flex-1">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 -translate-y-1/2 text-ink-faint"
          >
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="m21 21-4.3-4.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
          </svg>
          <input
            type="text"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search patients"
            className="w-full rounded-full border border-line bg-ground py-2 pr-4 pl-9 text-sm text-ink placeholder-ink-faint transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
        </div>
      </div>

      <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col items-center gap-6 overflow-y-auto px-4 py-8">
        <h1 className="text-lg font-bold tracking-wide text-ink uppercase">Recent Patient ({filtered.length})</h1>

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
          {filtered.map((patient) => (
            <PatientCardComponent key={patient.patientId} patient={patient} />
          ))}

          {filtered.length === 0 && <p className="py-10 text-center text-sm text-ink-muted">No patients match &quot;{query}&quot;.</p>}
        </div>
      </div>

      <AppDrawerComponent isOpen={isDrawerOpen} onClose={() => setIsDrawerOpen(false)} />
    </div>
  );
}
