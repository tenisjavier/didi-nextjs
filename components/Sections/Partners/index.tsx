import React from "react";
import {
  fetchPageComponents,
  fetchPartnerBySlug,
  fetchPartnersByCategory
} from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";

interface PartnerProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generatePartnerMetadata(
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


  const heroProps = {
    title: partner.heroTitle,
    desc: partner.heroDesc,
    bgColor: "bg-orange-primary",
    textColor: "white",
    image: partner.logo,
    btnType: "custom",
    btnMode: "light",
    btnLink: partner.promoLink,
    btnText: partner.promoLinkText,
    brightness: "brightness-75",
    reverse: true,
    isHero: true,
  };

  const ctaFeaturesProps = {
    title: partner.featureTitle,
    desc: partner.featureDesc,
    image: partner.featureImage,
    bgColor: "bg-gray-light",
    textColor: "bg-gray-primary",
    btnType: "custom",
    btnMode: "primary",
    btnLink: partner.promoLink,
    btnText: partner.promoLinkText,
    brightness: "brightness-75",
  };

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      {partner?.featureTitle && <CTASection {...ctaFeaturesProps}></CTASection>}
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={partner.content}></RichContent>
      </section>
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
