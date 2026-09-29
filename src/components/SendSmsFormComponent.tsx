"use client";

import { useState } from "react";
import Link from "next/link";

export default function SendSmsFormComponent() {
  const [message, setMessage] = useState("");
  const [phoneNumbers, setPhoneNumbers] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const isValid = message.trim().length > 0 && phoneNumbers.trim().length > 0;

  if (submitted) {
    return (
      <div className="flex flex-col items-center gap-4 rounded-2xl border border-line bg-white p-8 text-center">
        <p className="text-sm leading-relaxed text-ink-muted">
          Message queued to send to <span className="font-semibold text-ink">{phoneNumbers}</span>.
        </p>
        <span className="text-xs text-ink-faint">(Simulated — no real SMS is sent)</span>
        <button
          type="button"
          onClick={() => {
            setMessage("");
            setPhoneNumbers("");
            setSubmitted(false);
          }}
          className="font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
        >
          Send another message
        </button>
      </div>
    );
  }

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        if (isValid) setSubmitted(true);
      }}
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
        <div className="flex flex-col">
          <label htmlFor="sms-message" className="mb-1.5 text-sm font-semibold text-ink">
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            id="sms-message"
            required
            rows={4}
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            placeholder="Type message to send"
            className="rounded-lg border border-line px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="sms-phones" className="mb-1.5 text-sm font-semibold text-ink">
            Phone Numbers<span className="text-red-500">*</span>
          </label>
          <textarea
            id="sms-phones"
            required
            rows={3}
            value={phoneNumbers}
            onChange={(event) => setPhoneNumbers(event.target.value)}
            placeholder="eg: 08036344478, +2348026344468"
            className="rounded-lg border border-line px-3 py-2.5 text-sm text-ink placeholder:text-ink-faint transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500 disabled:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Send SMS
      </button>

      <Link
        href="/admin/hospitals"
        className="text-center text-sm font-semibold text-brand-700 transition-colors duration-200 hover:text-brand-800"
      >
        Back to My Hospitals
      </Link>
    </form>
  );
}
