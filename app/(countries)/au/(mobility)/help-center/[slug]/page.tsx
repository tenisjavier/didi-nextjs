import React from "react";

import FAQPage, { generateFaqsMetadata } from "@/components/Sections/Faqs";

interface FAQProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: FAQProps) {
  const faq = await generateFaqsMetadata(slug, "au");
  faq.title = faq.title + " | DiDi Australia";
  return faq;
}

const Page = async ({ params: { slug } }: FAQProps) => {
  return (
    <>
      <FAQPage
        params={{
          countryCode: "au",
          pathname: "/au/help-center/slug/",
          slug,
        }}
      />
    </>
  );
};

export default Page;
