"use client";

import { useState } from "react";
import Link from "next/link";
import AuthFieldComponent from "@/components/AuthFieldComponent";

export default function ForgotPasswordFormComponent() {
  const [submitted, setSubmitted] = useState(false);
  const [email, setEmail] = useState("");

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 text-center">
        <p className="text-sm leading-relaxed text-ink-muted">
          If an account exists for <span className="font-semibold text-ink">{email}</span>, we&apos;ve sent a link
          to reset the password.
        </p>

        <div className="flex w-full flex-col gap-3">
          <Link
            href={`/admin/reset-password?email=${encodeURIComponent(email)}`}
            className="rounded-[9px] bg-brand-500 py-3.5 text-center text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
          >
            Continue to Reset Password
          </Link>
          <span className="text-xs text-ink-faint">(Simulated — no email is actually sent)</span>
        </div>

        <Link href="/admin/login" className="font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Return to Login
        </Link>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        setSubmitted(true);
      }}
    >
      <AuthFieldComponent
        id="email"
        label="Email"
        type="email"
        required
        placeholder="you@hospital.com"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Send Reset Link
      </button>

      <Link
        href="/admin/login"
        className="text-center text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
      >
        Return to Login
      </Link>
    </form>
  );
}
