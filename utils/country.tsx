//? country functions for several components
import { CountryCode } from "@/typings";
//? returns a country code from the url
export const getCountryCode = (pathname: string): CountryCode => {
  const countryCode = pathname.split("/")[1] || "en";
  return countryCode as CountryCode;
};
