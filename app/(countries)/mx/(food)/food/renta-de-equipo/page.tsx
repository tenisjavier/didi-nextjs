import React from "react";
import { Metadata } from "next";
import { fetchLegalBySlug } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";

export let metadata: Metadata;

const Page = async () => {
  const legal = await fetchLegalBySlug("mx", "renta-de-equipo");
  if (!legal) return notFound();
  const content = legal.content.json.content[0].content[0].value;
  metadata = {
    title: "Términos y Condiciones DiDi | DiDi México", //! fix after migration
    description: content.slice(0, 150),
    alternates: {
      canonical: `https://web.didiglobal.com/mx/food/renta-de-equipo/`,
    },
  };
  return (
    <>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
        <RichContent richContent={legal.content}></RichContent>
      </section>
    </>
  );
};

export default Page;
