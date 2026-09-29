"use client";

import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import AuthFieldComponent from "@/components/AuthFieldComponent";

export default function ResetPasswordFormComponent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const email = searchParams.get("email") ?? "";

  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");
  const [error, setError] = useState("");

  return (
    <form
      className="flex flex-col gap-4"
      onSubmit={(event) => {
        event.preventDefault();
        if (newPassword !== confirmNewPassword) {
          setError("Passwords do not match.");
          return;
        }
        setError("");
        router.push(`/admin/login${email ? `?email=${encodeURIComponent(email)}` : ""}`);
      }}
    >
      {email && (
        <p className="-mt-1 text-center text-sm text-ink-muted">
          Resetting password for <span className="font-semibold text-ink">{email}</span>
        </p>
      )}

      <AuthFieldComponent
        id="newPassword"
        label="New Password"
        type="password"
        required
        minLength={4}
        placeholder="Enter new password"
        value={newPassword}
        onChange={(event) => setNewPassword(event.target.value)}
      />
      <AuthFieldComponent
        id="confirmNewPassword"
        label="Confirm New Password"
        type="password"
        required
        minLength={4}
        placeholder="Enter confirm new password"
        value={confirmNewPassword}
        onChange={(event) => setConfirmNewPassword(event.target.value)}
      />

      {error && <p className="text-sm font-medium text-red-600">{error}</p>}

      <button
        type="submit"
        className="mt-1 rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Reset Password
      </button>
    </form>
  );
}
