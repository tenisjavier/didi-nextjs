import React from "react";

import FAQPage, { generateFaqsMetadata } from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "nz");
  faq.title = faq.title + " | DiDi New Zealand";
  return faq;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "nz",
          pathname: "/nz/help-center/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
