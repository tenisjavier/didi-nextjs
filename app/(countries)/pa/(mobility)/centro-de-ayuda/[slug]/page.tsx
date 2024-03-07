import React from "react";

import FAQPage, { generateFaqsMetadata } from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "pa");
  faq.title = faq.title + " | DiDi Panamá";
  return faq;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "pa",
          pathname: "/pa/centro-de-ayuda/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
