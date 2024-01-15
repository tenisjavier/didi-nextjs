import React from "react";
import { fetchCitieBySlug, fetchCities, fetchPageComponents } from "@/utils/db";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";
import { City, GuideT } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Panamá, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const city = await fetchCitieBySlug("au", slug);
  if (!city) return notFound();

  const heroProps = {
    title: `Socios Conductores en ${city.name}`,
    desc: `¿Quieres convertirte en Socio Conductor DiDi en ${city.name}? Regístrate online y comienza a generar ingresos de manera segura y flexible.`,
    bgColor: "bg-blue-primary",
    textColor: "white",
    image: city.image,
    btnType: "drv",
    btnMode: "primary",
    brightness: "brightness-75",
    reverse: true,
    isHero: true,
  };

  const components = await fetchPageComponents("/au/driver/");

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <BuilderComponent components={components}></BuilderComponent>;
    </>
  );
};

export default Guide;

export async function generateStaticParams() {
  const cities = await fetchCities("au", "driver");
  const citiesSlugs = cities.map((city: City) => {
    return {
      slug: city.slug,
    };
  });
  return citiesSlugs;
}
