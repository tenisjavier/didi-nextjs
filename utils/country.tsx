//? country functions for several components
import { CountryCode } from "@/typings";
//? returns a country code from the url
export const getCountryCode = (pathname: string): CountryCode => {
  let countryCode = pathname.split("/")[1] || "en";
  countryCode = isCountry(countryCode) ? countryCode : "en";
  return countryCode as CountryCode;
};

const countryCodes = [
  "mx",
  "cl",
  "ar",
  "pe",
  "co",
  "ec",
  "do",
  "cr",
  "pa",
  "nz",
  "au",
  "en",
  "eg",
];
const isCountry = (c: any) => countryCodes.includes(c);
