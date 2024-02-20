import React from "react";
import { fetchCitieBySlug, fetchCities, fetchPageComponents } from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode, ProductCategoryT } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface CityProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generateCitiesMetadata(
  slug: string,
  countryCode: CountryCode,
  category: "drive" | "food" = 'drive'
) {
  const city = (await fetchCitieBySlug(countryCode, slug))
  const countryName = city.country.name;

  if (category === 'drive') {
    return {
      title: `Conductor En ${city.name} | DiDi ${countryName}`,
      description: `Conductor En ${city.name}`,
    }
  } else if (category === 'food') {
    return {
      title: `Pide Comida a Domicilio  en ${city.name} | DiDi Food ${countryName}`,
      description: `¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${city.name} por DiDi Food y disfruta de los mejores restaurantes de ${city.name}, en minutos.`,
    }
  }
}

// SSG approach for this pages
export async function generateCitiesStaticParams(
  countryCode: CountryCode,
  productCategory: ProductCategoryT
) {
  const city = (await fetchCities(countryCode, productCategory))
  const citiesSlugs = city.map((city: any) => {
    slug: city.slug;
  });
  return citiesSlugs;
}

const CityPage = async ({
  params: { slug, countryCode, pathname },
}: CityProps) => {
  const city = await fetchCitieBySlug(countryCode, slug);

  if (!city) return notFound();


  const components = await fetchPageComponents(pathname);

  return (
    <BuilderComponent
      components={components}
      textParams={{
        ctaSectionParams: {
          title: city.name,
          desc: city.name
        },
        accordionSectionParams: {
          title: city.name,
          desc: city.name,
          content: {
            contentText: city.name,
            title: city.name,
          },
        }
      }}
    ></BuilderComponent>
  );
};

export default CityPage;
