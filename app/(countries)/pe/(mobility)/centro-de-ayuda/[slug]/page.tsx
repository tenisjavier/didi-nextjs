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
  const faq = await generateFaqsMetadata(slug, "pe");
  faq.title = faq.title + " | DiDi Perú";
  return faq;
}

export async function generateStaticParams() {
  const FAQSSlugs = await generateFAQSStaticParams("pe");
  return FAQSSlugs;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "pe",
          pathname: "/pe/centro-de-ayuda/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
