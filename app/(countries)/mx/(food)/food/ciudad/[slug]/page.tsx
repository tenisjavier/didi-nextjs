import React from "react";
import CityPage, { generateCitiesMetadata, generateCitiesStaticParams } from "@/components/Sections/Cities";

interface CityProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: CityProps) {
  const city = await generateCitiesMetadata(slug, "mx", 'food');

  return city;
}

export async function generateStaticParams() {
  const citiesSlugs = await generateCitiesStaticParams("mx", 'food');

  return citiesSlugs;
}

const Page = async ({ params: { slug } }: CityProps) => {

  return (
    <CityPage params={{
      countryCode: "mx",
      pathname: "/mx/food/ciudad/slug/",
      slug: slug,
      productCategory: 'food'
    }}
    />
  );
};

export default Page;


