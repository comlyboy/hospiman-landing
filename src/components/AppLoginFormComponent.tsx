"use client";

import { useState } from "react";

export default function AppLoginFormComponent() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  if (isSubmitted) {
    return (
      <div className="flex flex-col items-center gap-2 py-4 text-center">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#4f99ff]/12">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path d="M5 13l4 4L19 7" stroke="#4f99ff" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
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
      <div className="flex flex-col">
        <label htmlFor="app-email" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
          Email
        </label>
        <input
          id="app-email"
          type="email"
          required
          placeholder="you@hospital.com"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-[#4f99ff]"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="app-password" className="mb-1.5 text-[12.5px] font-semibold text-ink-muted">
          Password
        </label>
        <input
          id="app-password"
          type="password"
          required
          minLength={4}
          placeholder="Enter password"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
          className="rounded-lg border border-line px-3 py-2.5 text-sm transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-[#4f99ff]"
        />
      </div>

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-[#4f99ff] py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-[#3d84ea] active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#4f99ff]"
      >
        Login
      </button>
    </form>
  );
}
