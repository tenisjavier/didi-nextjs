import React from "react";
import { fetchCitieBySlug, fetchCities, fetchPageComponents } from "@/utils/db";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import { notFound } from "next/navigation";
import { City } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata;

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const city = await fetchCitieBySlug("co", slug);
  if (!city) return notFound();

  metadata = {
    title: `Conductores en ${city.name} - Regístrate Online | DiDi Panamá`,
    description: `¿Quieres convertirte en Socio Conductor DiDi en ${city.name}? Regístrate online y comienza a generar ingresos de manera segura y flexible.`,
  };
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

  const components = await fetchPageComponents("/co/conductor/");

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <BuilderComponent components={components}></BuilderComponent>;
    </>
  );
};

export default Guide;

export async function generateStaticParams() {
  const cities = await fetchCities("co", "driver");
  const citiesSlugs = cities.map((city: City) => {
    return {
      slug: city.slug,
    };
  });
  return citiesSlugs;
}
