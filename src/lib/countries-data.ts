export interface CountryOption {
  name: string;
  isoCode: string;
  dialCode: string;
  currencyCode: string;
}

export const countryOptions: CountryOption[] = [
  { name: "Nigeria", isoCode: "NG", dialCode: "+234", currencyCode: "NGN" },
  { name: "Ghana", isoCode: "GH", dialCode: "+233", currencyCode: "GHS" },
  { name: "Kenya", isoCode: "KE", dialCode: "+254", currencyCode: "KES" },
  { name: "South Africa", isoCode: "ZA", dialCode: "+27", currencyCode: "ZAR" },
  { name: "United Kingdom", isoCode: "GB", dialCode: "+44", currencyCode: "GBP" },
  { name: "United States", isoCode: "US", dialCode: "+1", currencyCode: "USD" },
];

export const currencyOptions = ["NGN", "GHS", "KES", "ZAR", "GBP", "USD"];
