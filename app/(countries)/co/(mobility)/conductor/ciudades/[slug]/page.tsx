import React from "react";
import CityPage, { generateCitiesMetadata, generateCitiesStaticParams } from "@/components/Sections/Cities";

interface CityProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: CityProps) {
  const city = await generateCitiesMetadata(slug, "co", 'driver');

  return city;
}

export async function generateStaticParams() {
  const citiesSlugs = await generateCitiesStaticParams("co", 'driver');

  return citiesSlugs;
}

const Page = async ({ params: { slug } }: CityProps) => {

  return (
    <CityPage params={{
      countryCode: "co",
      pathname: "/co/conductor/ciudades/slug/",
      slug: slug,
    }}
    />
  );
};

export default Page;


// const heroProps = {
//   title: `Socios Conductores en ${city.name}`,
//   desc: `¿Quieres convertirte en Socio Conductor DiDi en ${city.name}? Regístrate online y comienza a generar ingresos de manera segura y flexible.`,
//   bgColor: "bg-blue-primary",
//   textColor: "white",
//   image: city.image,
//   btnType: "drv",
//   btnMode: "primary",
//   brightness: "brightness-75",
//   reverse: true,
//   isHero: true,
// };





