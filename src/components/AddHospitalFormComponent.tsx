"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { countryOptions, currencyOptions } from "@/lib/countries-data";

const fieldClass =
  "w-full rounded-lg border border-line px-3 py-2.5 text-sm text-ink transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500";
const disabledFieldClass = "w-full rounded-lg border border-line bg-ground px-3 py-2.5 text-sm text-ink-muted";

export default function AddHospitalFormComponent() {
  const router = useRouter();

  const [name, setName] = useState("");
  const [dialCode, setDialCode] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [countryName, setCountryName] = useState("");
  const [currencyCode, setCurrencyCode] = useState("NGN");
  const [website, setWebsite] = useState("");
  const [referralCode, setReferralCode] = useState("");
  const [address, setAddress] = useState("");

  const selectedCountry = countryOptions.find((country) => country.name === countryName);
  const countryCode = selectedCountry?.isoCode ?? "";

  const isValid = Boolean(name.trim() && phone.trim() && email.trim() && countryName && address.trim());

  return (
    <form
      className="flex flex-col gap-6"
      onSubmit={(event) => {
        event.preventDefault();
        if (isValid) router.push("/admin/hospitals");
      }}
    >
      <div className="flex flex-col gap-4 rounded-2xl border border-line bg-white p-6">
        <div className="flex flex-col">
          <label htmlFor="hospital-name" className="mb-1.5 text-sm font-semibold text-ink">
            Name<span className="text-red-500">*</span>
          </label>
          <input
            id="hospital-name"
            type="text"
            required
            placeholder="Hospital Name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className={fieldClass}
          />
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="hospital-phone" className="mb-1.5 text-sm font-semibold text-ink">
              Phone<span className="text-red-500">*</span>
            </label>
            <div className="flex gap-2">
              <select
                aria-label="Dial code"
                value={dialCode}
                onChange={(event) => setDialCode(event.target.value)}
                className="w-24 rounded-lg border border-line bg-white px-2 text-sm text-ink transition-colors duration-200 hover:border-ink-faint focus:outline-2 focus:outline-brand-500"
              >
                <option value="">Code</option>
                {countryOptions.map((country) => (
                  <option key={country.isoCode} value={country.dialCode}>
                    {country.dialCode}
                  </option>
                ))}
              </select>
              <input
                id="hospital-phone"
                type="tel"
                required
                placeholder="Phone"
                value={phone}
                onChange={(event) => setPhone(event.target.value)}
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-col">
            <label htmlFor="hospital-email" className="mb-1.5 text-sm font-semibold text-ink">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="hospital-email"
              type="email"
              required
              placeholder="jane@example.com"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="hospital-country" className="mb-1.5 text-sm font-semibold text-ink">
              Country<span className="text-red-500">*</span>
            </label>
            <select
              id="hospital-country"
              required
              value={countryName}
              onChange={(event) => {
                const nextCountry = countryOptions.find((country) => country.name === event.target.value);
                setCountryName(event.target.value);
                if (nextCountry) setCurrencyCode(nextCountry.currencyCode);
              }}
              className={fieldClass}
            >
              <option value="">Select Country</option>
              {countryOptions.map((country) => (
                <option key={country.isoCode} value={country.name}>
                  {country.name}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col">
            <label htmlFor="hospital-country-code" className="mb-1.5 text-sm font-semibold text-ink">
              Country Code
            </label>
            <input id="hospital-country-code" type="text" readOnly value={countryCode} className={disabledFieldClass} />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="hospital-currency" className="mb-1.5 text-sm font-semibold text-ink">
            Currency Code
          </label>
          <select
            id="hospital-currency"
            value={currencyCode}
            onChange={(event) => setCurrencyCode(event.target.value)}
            className={fieldClass}
          >
            {currencyOptions.map((currency) => (
              <option key={currency} value={currency}>
                {currency}
              </option>
            ))}
          </select>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div className="flex flex-col">
            <label htmlFor="hospital-website" className="mb-1.5 text-sm font-semibold text-ink">
              Website
            </label>
            <input
              id="hospital-website"
              type="text"
              placeholder="Website"
              value={website}
              onChange={(event) => setWebsite(event.target.value)}
              className={fieldClass}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="hospital-referral" className="mb-1.5 text-sm font-semibold text-ink">
              Referral Code
            </label>
            <input
              id="hospital-referral"
              type="text"
              placeholder="Referral Code"
              value={referralCode}
              onChange={(event) => setReferralCode(event.target.value)}
              className={fieldClass}
            />
          </div>
        </div>

        <div className="flex flex-col">
          <label htmlFor="hospital-address" className="mb-1.5 text-sm font-semibold text-ink">
            Address<span className="text-red-500">*</span>
          </label>
          <textarea
            id="hospital-address"
            required
            rows={4}
            placeholder="Address"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
            className={fieldClass}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={!isValid}
        className="rounded-[9px] bg-brand-500 py-3.5 text-[15px] font-bold text-white transition-all duration-200 hover:bg-brand-600 active:scale-95 disabled:cursor-not-allowed disabled:opacity-50 disabled:hover:bg-brand-500 disabled:active:scale-100 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-700"
      >
        Submit
      </button>
    </form>
  );
}
