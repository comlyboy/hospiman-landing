"use client";

import { useState } from "react";
import Link from "next/link";

interface ProfileFields {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
}

const initialProfile: ProfileFields = {
  firstName: "christian",
  lastName: "uzoh",
  email: "genbliz@gmail.com",
  phone: "+2348036355545",
  address: "imagbon yaba, lagos",
};

const inputBaseClass = "w-full rounded-lg border px-3 py-2.5 text-sm transition-colors duration-200";
const readOnlyClass = "border-line bg-ground text-ink-muted";
const editableClass = "border-line bg-white text-ink hover:border-ink-faint focus:outline-2 focus:outline-brand-500";

export default function ProfileFormComponent() {
  const [isEditing, setIsEditing] = useState(false);
  const [profile, setProfile] = useState<ProfileFields>(initialProfile);
  const [draft, setDraft] = useState<ProfileFields>(initialProfile);

  const fieldClass = `${inputBaseClass} ${isEditing ? editableClass : readOnlyClass}`;

  return (
    <div className="flex flex-col gap-3">
      <Link
        href="/admin/forgot-password"
        className="flex items-center justify-center gap-1.5 text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
      >
        Change Password
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M14 4h6v6M10 14 20 4M19 14v5a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </Link>

      <div className="relative rounded-2xl border border-line bg-white p-6">
        <button
          type="button"
          onClick={() => {
            if (isEditing) {
              setDraft(profile);
            }
            setIsEditing((editing) => !editing);
          }}
          aria-label={isEditing ? "Cancel editing" : "Edit profile"}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-md text-ink-muted transition-colors duration-200 hover:bg-brand-50 hover:text-brand-700"
        >
          {isEditing ? (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          ) : (
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="m16.5 3.5 4 4L8 20H4v-4L16.5 3.5Z"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </button>

        <div className="mb-6 flex justify-center">
          <div className="flex h-20 w-20 items-center justify-center rounded-full bg-brand-500">
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <circle cx="12" cy="9" r="3.5" stroke="#ffffff" strokeWidth="1.8" />
              <path d="M5 20c1.4-4 4.4-6 7-6s5.6 2 7 6" stroke="#ffffff" strokeWidth="1.8" strokeLinecap="round" />
            </svg>
          </div>
        </div>

        <form
          className="flex flex-col gap-4"
          onSubmit={(event) => {
            event.preventDefault();
            setProfile(draft);
            setIsEditing(false);
          }}
        >
          <div className="flex flex-col">
            <label htmlFor="profile-first-name" className="mb-1.5 text-sm font-semibold text-ink">
              First Name<span className="text-red-500">*</span>
            </label>
            <input
              id="profile-first-name"
              type="text"
              required
              readOnly={!isEditing}
              value={draft.firstName}
              onChange={(event) => setDraft((d) => ({ ...d, firstName: event.target.value }))}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile-last-name" className="mb-1.5 text-sm font-semibold text-ink">
              Last Name<span className="text-red-500">*</span>
            </label>
            <input
              id="profile-last-name"
              type="text"
              required
              readOnly={!isEditing}
              value={draft.lastName}
              onChange={(event) => setDraft((d) => ({ ...d, lastName: event.target.value }))}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile-email" className="mb-1.5 text-sm font-semibold text-ink">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="profile-email"
              type="email"
              required
              readOnly={!isEditing}
              value={draft.email}
              onChange={(event) => setDraft((d) => ({ ...d, email: event.target.value }))}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile-phone" className="mb-1.5 text-sm font-semibold text-ink">
              Phone
            </label>
            <input
              id="profile-phone"
              type="tel"
              readOnly={!isEditing}
              value={draft.phone}
              onChange={(event) => setDraft((d) => ({ ...d, phone: event.target.value }))}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="profile-address" className="mb-1.5 text-sm font-semibold text-ink">
              Address<span className="text-red-500">*</span>
            </label>
            <textarea
              id="profile-address"
              required
              readOnly={!isEditing}
              rows={3}
              value={draft.address}
              onChange={(event) => setDraft((d) => ({ ...d, address: event.target.value }))}
              className={fieldClass}
            />
          </div>

          {isEditing && (
            <button
              type="submit"
              className="mt-1 rounded-[9px] bg-brand-500 py-3 text-sm font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95"
            >
              Save Changes
            </button>
          )}
        </form>
      </div>
    </div>
  );
}
