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
  const faq = await generateFaqsMetadata(slug, "eg");
  return faq;
}

export async function generateStaticParams() {
  const FAQSSlugs = await generateFAQSStaticParams("eg");
  return FAQSSlugs;
}

const CentroDeAyuda = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "eg",
          pathname: "/eg/help-center/slug/",
          slug,
        }}
      />
    </>
  );
};

export default CentroDeAyuda;
