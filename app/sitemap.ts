import { CountryCode } from "@/typings";
import { fetchCities, fetchPages } from "@/utils/db";
import { MetadataRoute } from "next";

type SitemapType = {
  url: string;
  lastModified: Date;
  changeFrequency:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never";
  priority: number;
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.IS_DEVELOPMENT
    ? "http://localhost:3000"
    : "https://web.didiglobal.com";

  const pages: MetadataRoute.Sitemap = (await fetchPages()).map((page) => {
    return {
      url: baseUrl + page.pathname,
      lastModified: page.sys.publishedAt,
      changeFrequency: "weekly",
      priority: 1,
    };
  });

  const dynamicPage = async () => {
    const cityPages = await getCityPages(pages);

    pages.push(...cityPages);
  };

  console.log("antes", pages.length);
  await dynamicPage();
  console.log("dps", pages.length);

  return pages.filter((page) => !page.url.includes("/slug/"));
}

const makeObjectToSitemap = (slug: string): SitemapType => {
  const baseUrl = process.env.IS_DEVELOPMENT
    ? "http://localhost:3000"
    : "https://web.didiglobal.com";

  return {
    url: baseUrl + `${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as any,
    priority: 1,
  };
};

const getCityPages = async (pages: MetadataRoute.Sitemap) => {
  const cityPagesPromises: Promise<SitemapType>[] = [];

  for (const page of pages) {
    const countryCode = page?.url?.split("/")?.[3] as CountryCode;
    if (page.url.includes("/food/ciudad/slug/")) {
      const cities = await fetchCities(countryCode, "food");

      cities.forEach((city) => {
        const cityPagePromise = Promise.resolve(
          makeObjectToSitemap(`/${countryCode}/food/ciudad/${city.slug}/`)
        );

        cityPagesPromises.push(cityPagePromise);
      });
    }

    if (page.url.includes("/conductor/ciudades/slug/")) {
      const cities = await fetchCities(countryCode, "driver");

      cities.forEach((city) => {
        const cityPagePromise = Promise.resolve(
          makeObjectToSitemap(
            `/${countryCode}/conductor/ciudades/${city.slug}/`
          )
        );

        cityPagesPromises.push(cityPagePromise);
      });
    }
  }

  const cityPages = await Promise.all(cityPagesPromises);

  return cityPages;
};
