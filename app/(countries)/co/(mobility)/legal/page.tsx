import React from "react";
import BuilderComponent from "@/components/BuilderComponent";
import { Metadata } from "next";
import { fetchLegalBySlug, fetchPageComponents } from "@/utils/db";
import RichContent from "@/components/RichContent";

//? builder will return the array of components fetch by db by pathname

export const metadata: Metadata = {
  title: "Regístrate como Socio Conductor",
  description: "Elmejor",
  alternates: {
    canonical: `https://web.didiglobal.com/co/legal/`,
  },
};

const Legal = async () => {
  const components = await fetchPageComponents("/co/legal/");

  const legal = await fetchLegalBySlug("co", "legal-colombia");

  return (
    <>
      <BuilderComponent components={components}></BuilderComponent>
      {legal && (
        <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
          <RichContent richContent={legal.content}></RichContent>
        </section>
      )}
    </>
  );
};

export default Legal;
