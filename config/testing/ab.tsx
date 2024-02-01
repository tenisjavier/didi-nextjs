import { cookies } from "next/headers";
import { headers } from "next/headers";
import { fetchABtest } from "@/utils/db";
// //* EXPERIMENT A/B

//? function that returns the correct pathname page to render on page
export const ABinit = async (pathname: string) => {
  const abtest = await fetchABtest(pathname);
  if (!abtest) return null;
  const version =
    cookies().get("abVersion")?.value || headers().get("x-ab-version");
  if (version === "a") return abtest.pagesCollection?.items[0]?.pathname;
  if (version === "b") return abtest.pagesCollection?.items[1]?.pathname;
  return null;
};
