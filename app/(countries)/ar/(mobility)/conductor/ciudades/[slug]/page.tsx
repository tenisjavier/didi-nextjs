import React from "react";
import CityPage, { generateCitiesMetadata, generateCitiesStaticParams } from "@/components/Sections/Cities";

interface CityProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: CityProps) {
  const city = await generateCitiesMetadata(slug, "ar", 'driver');

  return city;
}

export async function generateStaticParams() {
  const citiesSlugs = await generateCitiesStaticParams("ar", 'driver');

  return citiesSlugs;
}

const Page = async ({ params: { slug } }: CityProps) => {

  return (
    <CityPage params={{
      countryCode: "ar",
      pathname: "/ar/conductor/ciudades/slug/",
      slug: slug,
      productCategory: 'driver'
    }}
    />
  );
};

export default Page;