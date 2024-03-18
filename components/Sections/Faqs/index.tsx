import React from "react";
import { fetchPageComponents, fetchFAQBySlug, fetchFAQS } from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface FaqProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generateFaqsMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const faq = await fetchFAQBySlug(countryCode, slug);
  const content = faq.content.json.content[0].content[0]?.value?.slice(0, 150);
  return {
    title: faq.title,
    description: content ? content + "..." : faq.title,
  };
}

// SSG approach for this pages
export async function generateFAQSStaticParams(
  countryCode: CountryCode
  // category: string
) {
  const faqs = await fetchFAQS(countryCode);
  const faqsSlugs = faqs.map((faq: any) => {
    slug: faq.slug;
  });
  return faqsSlugs;
}

const FAQPage = async ({
  params: { slug, countryCode, pathname },
}: FaqProps) => {
  const faq = await fetchFAQBySlug(countryCode, slug);

  if (!faq) return notFound();

  const components = await fetchPageComponents(pathname);

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: faq.title,
          },
          accordionSectionParams: {
            items: [
              {
                title: faq.title,
                content: faq.content,
                slug: faq.slug,
              },
            ],
          },
        }}
      ></BuilderComponent>
    </>
  );
};

export default FAQPage;
