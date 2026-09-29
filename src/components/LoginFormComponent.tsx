"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import AuthFieldComponent from "@/components/AuthFieldComponent";

export default function LoginFormComponent() {
  const searchParams = useSearchParams();
  const [email, setEmail] = useState(searchParams.get("email") ?? "");
  const [password, setPassword] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
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

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Login
      </button>

      <div className="mt-1 flex flex-col gap-3 text-center text-sm sm:flex-row sm:justify-between sm:text-left">
        <Link href="/admin/forgot-password" className="font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Forgot password?
        </Link>
        <Link href="/admin/register" className="font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800">
          Sign up for an account
        </Link>
      </div>
    </form>
  );
}
