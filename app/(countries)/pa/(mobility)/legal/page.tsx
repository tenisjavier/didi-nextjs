import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchLegalBySlug, fetchPageComponents } from "@/utils/db";
import RichContent from "@/components/RichContent";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Términos y Condiciones y Políticas de Privacidad | DiDi Panamá",
  description:
    "Conoce nuestros términos y condiciones para el uso del sitio web además de nuestras políticas de privacidad.",
  alternates: {
    canonical: `https://web.didiglobal.com/pa/legal/`,
  },
};

const Legal = async () => {
  const components = await fetchPageComponents("/pa/legal/");
  const legal = await fetchLegalBySlug("pa", "legal-panama");

  return (
    <>
      <BuilderComponent components={components}></BuilderComponent>;
      {legal && (
        <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
          <RichContent richContent={legal.content}></RichContent>
        </section>
      )}
    </>
  );
};

export default Legal;
