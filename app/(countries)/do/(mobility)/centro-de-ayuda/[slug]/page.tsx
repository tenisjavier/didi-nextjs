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
  const faq = await generateFaqsMetadata(slug, "do");
  faq.title = faq.title + " | DiDi República Dominicana";
  return faq;
}

export async function generateStaticParams() {
  const FAQSSlugs = await generateFAQSStaticParams("do");
  return FAQSSlugs;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "do",
          pathname: "/do/centro-de-ayuda/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
