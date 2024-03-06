import React from "react";
import {
  fetchPageComponents,
  fetchPartnerBySlug,
  fetchPartnersByCategory
} from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface PartnerProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generatePartnersMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const partner = (await fetchPartnerBySlug(countryCode, slug))
  return {
    title: partner.heroTitle,
    description: partner.heroDesc
  };
}

// SSG approach for this pages
export async function generatePartnersStaticParams(
  countryCode: CountryCode,
  category: string
) {
  const faqs = await fetchPartnersByCategory(countryCode, category);
  const faqsSlugs = faqs.map((faq: any) => {
    slug: faq.slug;
  });
  return faqsSlugs;
}

const PartnerPage = async ({
  params: { slug, countryCode, pathname },
}: PartnerProps) => {
  const partner = await fetchPartnerBySlug(countryCode, slug);

  if (!partner) return notFound();

  const components = await fetchPageComponents(pathname)

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: partner.title,
          },
        }}
      ></BuilderComponent>
    </>
  );
};

export default PartnerPage;
