import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { fetchABtest } from "@/utils/db";

export const config = {
  matcher: ["/cl/"],
};
export async function middleware(request: NextRequest) {
  const response = NextResponse.next();
  const abtest = await fetchABtest("/cl/");
  if (abtest) {
    const name = abtest.name;
    const test_version = request.cookies.get("abName")?.value;
    //? if is a new user with no ls
    if (test_version !== name) {
      let group = Math.random();
      if (group < 0.5) {
        response.cookies.set("abVersion", "b");
        response.cookies.set("abName", name);
      } else {
        response.cookies.set("abVersion", "a");
        response.cookies.set("abName", name);
      }
    }
  }
  return response;
}
