import React from "react";

import FAQPage, { generateFaqsMetadata } from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "mx");
  faq.title = faq.title + " | DiDi Repartidor México";
  return faq;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "mx",
          pathname: "/mx/food/repartidores/preguntas-frecuentes/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
