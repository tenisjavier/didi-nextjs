import React from "react";
import { fetchCitieBySlug, fetchCities, fetchFAQS, fetchPageComponents, fetchProductsByIds, fetchRequirementsByCitySlug } from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode, ProductCategoryT } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";
import AccordionSection from "@/components/AccordionSection";

interface CityProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
    productCategory: ProductCategoryT;
  };
}

// or Dynamic metadata
export async function generateCitiesMetadata(
  slug: string,
  countryCode: CountryCode,
  category: ProductCategoryT = 'driver'
) {
  const city = (await fetchCitieBySlug(countryCode, slug))
  const countryName = city.country.name;

  if (category === 'driver') {
    return {
      title: `Conductor En ${city.name} | DiDi ${countryName}`,
      description: `Conductor En ${city.name}`,
    }
  } else if (category === 'food') {
    return {
      title: `Pide Comida a Domicilio  en ${city.name} | DiDi Food ${countryName}`,
      description: `¿Qué se te antoja en este momento? Pide tu Comida a Domicilio en ${city.name} por DiDi Food y disfruta de los mejores restaurantes de ${city.name}, en minutos.`,
    }
  } else if (category === 'airport') {
    return {
      title: `DiDi Aeropuerto | DiDi ${countryName}`,
      description: `DiDi Aeropuerto`,
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
  params: { slug, countryCode, pathname, productCategory },
}: CityProps) => {
  const city = await fetchCitieBySlug(countryCode, slug, productCategory);

  const products = await fetchProductsByIds(city?.productsId)

  const requirements = (await fetchRequirementsByCitySlug(slug)).map((requirement) => {
    return {
      title: requirement.name,
      content: requirement.requirement,
    }
  })

  const makeProduct = products?.map((product: { name: any; image: any; description: string }) => {
    return {
      title: product.name,
      desc: product.description,
      image: product.image,
    }
  })

  if (!city) return notFound();

  const components = await fetchPageComponents(pathname);

  return (
    <BuilderComponent
      components={components}
      textParams={{
        accordionSectionParams: {
          title: city.name,
          items: requirements,
        },
        ctaSectionParams: {
          title: city.name,
          desc: city.name,
          image: city?.image || city?.imageMap,
        },
        carouselParams: {
          title: city.name,
          desc: city.name,
          ctaSections: makeProduct
        }
      }}
    ></BuilderComponent>
  );
};

export default CityPage;
