import React from "react";
import CityPage, { generateCitiesMetadata, generateCitiesStaticParams } from "@/components/Sections/Cities";

interface CityProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: CityProps) {
  const city = await generateCitiesMetadata(slug, "ec", 'driver');

  return city;
}

export async function generateStaticParams() {
  const citiesSlugs = await generateCitiesStaticParams("ec", 'driver');

  return citiesSlugs;
}

const Page = async ({ params: { slug } }: CityProps) => {

  return (
    <CityPage params={{
      countryCode: "ec",
      pathname: "/ec/conductor/ciudades/slug/",
      slug: slug,
      productCategory: 'driver'
    }}
    />
  );
};

export default Page;