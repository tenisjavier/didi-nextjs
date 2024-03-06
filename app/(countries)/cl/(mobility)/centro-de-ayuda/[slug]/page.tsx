import React from "react";

import FAQPage, { generateFaqsMetadata } from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "cl");

  return faq
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {

  return (
    <>
      <FAQPage
        params={{
          countryCode: "cl",
          pathname: "/cl/centro-de-ayuda/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
