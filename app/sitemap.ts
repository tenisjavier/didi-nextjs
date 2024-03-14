import { CountryCode, ProductCategoryT } from "@/typings";
import {
  fetchArticles,
  fetchCities,
  fetchGuides,
  fetchPages,
  fetchPartnersByCategory,
} from "@/utils/db";
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

const BASE_URL = process.env.IS_DEVELOPMENT
  ? "http://localhost:3000"
  : "https://web.didiglobal.com";

const makeObjectToSitemap = (slug: string): SitemapType => {
  return {
    url: BASE_URL + `${slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as any,
    priority: 1,
  };
};

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const pages: MetadataRoute.Sitemap = (await fetchPages()).map((page) =>
    makeObjectToSitemap(page.pathname)
  );

  const dynamicPage = async () => {
    const cityPages = await getCityPages(pages);
    const guidesPages = await getGuidesPages(pages);
    const articlesPages = await getArticlesPages(pages);
    const partnersPages = await getPartnersPages(pages);

    pages.push(
      ...cityPages,
      ...guidesPages,
      ...articlesPages,
      ...partnersPages
    );
  };

  console.log("antes", pages.length);
  await dynamicPage();
  console.log("depois", pages.length);

  return pages.filter((page) => !page.url.includes("/slug/"));
}

const getCityPages = async (pages: MetadataRoute.Sitemap) => {
  const cityPagesPromises: Promise<SitemapType>[] = [];

  const makeCitiesPage = async (
    validation: boolean,
    params: {
      slug: string;
      countryCode: CountryCode;
      category: ProductCategoryT;
    }
  ) => {
    const { category, countryCode, slug } = params;
    if (validation) {
      const cities = await fetchCities(countryCode, category);

      const slugPage = slug.replace("/slug/", "/");

      cities.forEach((city) => {
        const cityPagePromise = Promise.resolve(
          makeObjectToSitemap(`/${countryCode}${slugPage}${city.slug}/`)
        );

        cityPagesPromises.push(cityPagePromise);
      });
    }
  };

  for (const page of pages) {
    const countryCode = page?.url?.split("/")?.[3] as CountryCode;

    await makeCitiesPage(page.url.includes("/food/ciudad/slug/"), {
      slug: "/food/ciudad/slug/",
      category: "food",
      countryCode,
    });

    await makeCitiesPage(page.url.includes("/driver/cities/slug/"), {
      slug: "/driver/cities/slug/",
      category: "driver",
      countryCode,
    });

    await makeCitiesPage(page.url.includes("/conductor/ciudades/slug/"), {
      slug: "/conductor/ciudades/slug/",
      category: "driver",
      countryCode,
    });

    await makeCitiesPage(page.url.includes("/aeropuerto/slug/"), {
      slug: "/aeropuerto/slug/",
      category: "airport",
      countryCode,
    });
  }

  const cityPages = await Promise.all(cityPagesPromises);

  return cityPages;
};

const getGuidesPages = async (pages: MetadataRoute.Sitemap) => {
  const guidesPagesPromises: Promise<SitemapType>[] = [];

  const makeGuidesPage = async (
    validation: boolean,
    params: {
      slug: string;
      countryCode: CountryCode;
      category: string;
    }
  ) => {
    const { category, countryCode, slug } = params;
    if (validation) {
      const guides = (await fetchGuides(countryCode, category, 0, 1000)).items;

      const slugPage = slug.replace("/slug/", "/");

      guides.forEach((guide) => {
        const guidePagePromise = Promise.resolve(
          makeObjectToSitemap(`/${countryCode}${slugPage}${guide.slug}/`)
        );

        guidesPagesPromises.push(guidePagePromise);
      });
    }
  };

  for (const page of pages) {
    const countryCode = page?.url?.split("/")?.[3] as CountryCode;

    await makeGuidesPage(page.url.includes("/guias/slug/"), {
      slug: "/guias/slug/",
      category: "driver",
      countryCode,
    });

    await makeGuidesPage(page.url.includes("/food/restaurantes/guias/slug/"), {
      slug: "/food/restaurantes/guias/slug/",
      category: "restaurant",
      countryCode,
    });

    await makeGuidesPage(page.url.includes("/food/repartidores/guias/slug/"), {
      slug: "/food/repartidores/guias/slug/",
      category: "delivery",
      countryCode,
    });
  }

  const articlesPages = await Promise.all(guidesPagesPromises);

  return articlesPages;
};

const getArticlesPages = async (pages: MetadataRoute.Sitemap) => {
  const articlesPagesPromises: Promise<SitemapType>[] = [];

  const makeArticlesPage = async (
    validation: boolean,
    params: {
      slug: string;
      countryCode: CountryCode;
      category: string;
    }
  ) => {
    const { category, countryCode, slug } = params;
    if (validation) {
      const articles = (await fetchArticles(countryCode, category, 0, 1000))
        .items;

      const slugPage = slug.replace("/slug/", "/");

      articles.forEach((article) => {
        const articlePagePromise = Promise.resolve(
          makeObjectToSitemap(`/${countryCode}${slugPage}${article.slug}/`)
        );

        articlesPagesPromises.push(articlePagePromise);
      });
    }
  };

  for (const page of pages) {
    const countryCode = page?.url?.split("/")?.[3] as CountryCode;

    await makeArticlesPage(page.url.includes("/articulos/slug/"), {
      slug: "/articulos/slug/",
      category: "rides",
      countryCode,
    });

    await makeArticlesPage(page.url.includes("/newsroom/slug/"), {
      slug: "/newsroom/slug/",
      category: "news",
      countryCode,
    });

    await makeArticlesPage(page.url.includes("/food/blog/slug/"), {
      slug: "/food/blog/slug/",
      category: "food",
      countryCode,
    });
  }

  const articlesPages = await Promise.all(articlesPagesPromises);

  return articlesPages;
};

const getPartnersPages = async (pages: MetadataRoute.Sitemap) => {
  const partnersPagesPromises: Promise<SitemapType>[] = [];

  const makePartnersPage = async (
    validation: boolean,
    params: {
      slug: string;
      countryCode: CountryCode;
      category: string;
    }
  ) => {
    const { category, countryCode, slug } = params;
    if (validation) {
      const partners = await fetchPartnersByCategory(countryCode, category);

      const slugPage = slug.replace("/slug/", "/");

      partners.forEach((partners) => {
        const partnerPagePromise = Promise.resolve(
          makeObjectToSitemap(`/${countryCode}${slugPage}${partners.slug}/`)
        );

        partnersPagesPromises.push(partnerPagePromise);
      });
    }
  };

  for (const page of pages) {
    const countryCode = page?.url?.split("/")?.[3] as CountryCode;

    await makePartnersPage(page.url.includes("/didimas/slug/"), {
      slug: "/didimas/slug/",
      category: "didimas",
      countryCode,
    });

    await makePartnersPage(
      page.url.includes("/tarjeta-de-credito/beneficios/slug/"),
      {
        slug: "/tarjeta-de-credito/beneficios/slug/",
        category: "creditCard",
        countryCode,
      }
    );
  }

  const partnersPages = await Promise.all(partnersPagesPromises);

  return partnersPages;
};
