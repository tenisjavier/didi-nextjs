import React from "react";

import FAQPage, {
  generateFAQSStaticParams,
  generateFaqsMetadata,
} from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "ec");
  faq.title = faq.title + " | DiDi Ecuador";
  return faq;
}

export async function generateStaticParams() {
  const FAQSSlugs = await generateFAQSStaticParams("ec");
  return FAQSSlugs;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "ec",
          pathname: "/ec/centro-de-ayuda/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
