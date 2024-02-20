import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchLegalBySlug, fetchPageComponents } from "@/utils/db";
import RichContent from "@/components/RichContent";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Tarjeta de Crédito - DiDi Card | DiDi México",
  description:
    "La nueva tarjeta con beneficios diarios y sin comisiones ocultas. Pídela en 5 minutos",
  alternates: {
    canonical: `https://web.didiglobal.com/mx/tarjeta-de-credito/legal`,
  },
};

const Page = async () => {
  const components = await fetchPageComponents("/mx/tarjeta-de-credito/legal/");

  const legal = await fetchLegalBySlug("mx", "legal-mexico-tarjeta-de-credito");

  return (
    <>
      <BuilderComponent components={components}></BuilderComponent>
      {legal && (
        <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
          <RichContent richContent={legal.content}></RichContent>
        </section>
      )}
    </>
  )
};

export default Page;
