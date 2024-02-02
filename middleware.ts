import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchABtest } from "@/utils/db";

export const config = {
  matcher: [
    "/cl/",
    "/ar/",
    "/pe/",
    "/co/",
    "/ec/",
    "/do/",
    "/cr/",
    "/pa/",
    "/mx/",
    "/:path*/conductor/:path*",
    "/:path*/pasajero/:path*",
    "/:path*/centro-de-ayuda/:path*",
  ],
};

export async function middleware(request: NextRequest) {
  const requestHeaders = new Headers(request.headers);
  const abtest = await fetchABtest(request.nextUrl.pathname);
  if (abtest) {
    const name = abtest.name;
    const test_version = request.cookies.get("abName")?.value;
    //? if is a new user with no cookies
    if (test_version !== name) {
      let group = Math.random();
      if (group < 0.5) {
        requestHeaders.set("x-ab-version", "b");
        requestHeaders.set("x-ab-name", name);
        const response = NextResponse.next({
          request: {
            // New request headers
            headers: requestHeaders,
          },
        });
        response.cookies.set("abVersion", "b");
        response.cookies.set("abName", name);
        response.cookies.set("abPathname", abtest.pathname);
        return response;
      } else {
        requestHeaders.set("x-ab-version", "a");
        requestHeaders.set("x-ab-name", name);
        const response = NextResponse.next({
          request: {
            // New request headers
            headers: requestHeaders,
          },
        });

        response.cookies.set("abVersion", "a");
        response.cookies.set("abName", name);
        response.cookies.set("abPathname", abtest.pathname);
        return response;
      }
    }
  }
}
