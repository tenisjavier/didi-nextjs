import { NextResponse } from "next/server";
import { CountryCode } from "@/typings";
import { BusinessType } from "@/typings";

//? returns a country code from the url
const getCountryCode = (pathname: string): CountryCode => {
  const countryCode = pathname.split("/")[1] || "en";
  return countryCode as CountryCode;
};

//? returns a business type from the url
const getBusinessType = (pathname: string): BusinessType => {
  let businessType = "mobility";
  if (pathname.includes("/food")) businessType = "food";
  if (pathname.includes("/didipay")) businessType = "didipay";
  if (pathname.includes("/tarjeta-de-credito")) businessType = "card";
  if (pathname.includes("/prestamos")) businessType = "loan";

  return businessType as BusinessType;
};

export function middleware(request: any) {
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set(
    "x-country-code",
    getCountryCode(request.nextUrl.pathname)
  );
  requestHeaders.set("x-pathname", request.nextUrl.pathname);
  requestHeaders.set(
    "x-business-type",
    getBusinessType(request.nextUrl.pathname)
  );

  return NextResponse.next({
    request: {
      headers: requestHeaders,
    },
  });
}
