"use client";

import { useState } from "react";
import Link from "next/link";
import AuthFieldComponent from "@/components/AuthFieldComponent";

export default function RegisterFormComponent() {
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (password !== passwordConfirm) {
          setError("Passwords do not match.");
          return;
        }
        setError("");
      }}
    >
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
        <AuthFieldComponent id="firstName" label="First Name" type="text" required placeholder="Chidinma" />
        <AuthFieldComponent id="lastName" label="Last Name" type="text" required placeholder="Eze" />
      </div>
      <AuthFieldComponent id="email" label="Email" type="email" required placeholder="you@hospital.com" />
      <AuthFieldComponent
        id="password"
        label="Password"
        type="password"
        required
        minLength={4}
        placeholder="Enter password"
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      <AuthFieldComponent
        id="passwordConfirm"
        label="Confirm Password"
        type="password"
        required
        minLength={4}
        placeholder="Enter confirm password"
        value={passwordConfirm}
        onChange={(event) => setPasswordConfirm(event.target.value)}
      />

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Register
      </button>

      <p className="text-center text-sm text-ink-muted">
        Already have an account?{" "}
        <Link href="/admin/login" className="font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Login here
        </Link>
      </p>
    </form>
  );
}
