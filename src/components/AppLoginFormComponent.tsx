"use client";

import { useState } from "react";
import AuthFieldComponent from "@/components/AuthFieldComponent";

export default function AppLoginFormComponent() {
  const [emailOrUsername, setEmailOrUsername] = useState("");
  const [password, setPassword] = useState("");
  const [organizationCode, setOrganizationCode] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-50">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="var(--color-brand-500)" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <p className="text-sm font-semibold text-ink">Logged in (demo simulation)</p>
        <p className="text-xs text-ink-muted">The real app has no backend connected here.</p>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setIsSubmitted(true);
      }}
    >
      <AuthFieldComponent
        id="app-login-identifier"
        label={isAdmin ? "Email" : "Email or UserName"}
        type={isAdmin ? "email" : "text"}
        required
        placeholder="you@hospital.com"
        value={emailOrUsername}
        onChange={(event) => setEmailOrUsername(event.target.value)}
      />

      <div className="flex flex-col">
        <label htmlFor="app-login-password" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
          Password<span className="ml-0.5 text-red-500">*</span>
        </label>
        <div className="relative">
          <input
            id="app-login-password"
            type={isPasswordVisible ? "text" : "password"}
            required
            minLength={4}
            placeholder="Enter password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            className="w-full rounded-lg border border-line py-2.5 pr-10 pl-3 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
          <button
            type="button"
            onClick={() => setIsPasswordVisible((visible) => !visible)}
            aria-label={isPasswordVisible ? "Hide password" : "Show password"}
            className="absolute top-1/2 right-3 -translate-y-1/2 text-ink-faint transition-colors duration-200 hover:text-ink-muted"
          >
            {isPasswordVisible ? (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth="1.8" />
              </svg>
            ) : (
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path
                  d="M3 3l18 18M10.6 10.6a3 3 0 0 0 4.24 4.24M9.9 4.24A10.9 10.9 0 0 1 12 4c6.5 0 10 7 10 7a13.2 13.2 0 0 1-3.3 4.06M6.6 6.6C4.1 8.2 2 11 2 11s3.5 7 10 7c1.3 0 2.5-.24 3.6-.66"
                  stroke="currentColor"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {!isAdmin && (
        <AuthFieldComponent
          id="app-login-organization-code"
          label="Organization Code"
          required
          inputMode="numeric"
          pattern="[0-9]{4}"
          maxLength={4}
          placeholder="Enter Organization Code"
          value={organizationCode}
          onChange={(event) => setOrganizationCode(event.target.value.replace(/\D/g, "").slice(0, 4))}
        />
      )}

      <label className="flex items-center gap-2.5 text-sm text-ink">
        <input
          type="checkbox"
          checked={isAdmin}
          onChange={(event) => setIsAdmin(event.target.checked)}
          className="h-4 w-4 accent-brand-500"
        />
        I am an Admin
      </label>

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Login
      </button>
    </form>
  );
}
