import React from "react";
import {
  fetchCitieBySlug,
  fetchCities,
  fetchFAQSByIds,
  fetchFeatureBySlug,
  fetchFeatures,
  fetchPageComponents,
} from "@/utils/db";
import { notFound } from "next/navigation";
import { AccordionSectionT, AccordionT, CountryCode, ProductCategoryT } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";
import CTASection from "@/components/CTASection";
import AccordionSection from "@/components/AccordionSection";
import RichContent from "@/components/RichContent";

interface FeatureProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
    featureCategory: 'driver' | 'pax';
  };
}

// or Dynamic metadata
export async function generateFeaturesMetadata(
  slug: string,
  countryCode: CountryCode,
) {
  const feature = await fetchFeatureBySlug(countryCode, slug);

  const countryName = feature.country.name

  return {
    title: `${feature.name} | DiDi ${countryName}`,
    description: `${feature.description}`,
  };
}

// SSG approach for this pages
export async function generateFeaturesStaticParams(
  countryCode: CountryCode,
  productCategory: 'driver' | 'pax'
) {
  const features = await fetchFeatures(countryCode, productCategory)
  const featuresSlugs = features.map((feature) => {
    slug: feature.slug;
  });
  return featuresSlugs;
}

const FeaturePage = async ({
  params: { slug, countryCode, pathname },
}: FeatureProps) => {
  const feature = await fetchFeatureBySlug(countryCode, slug);

  const faqs = await fetchFAQSByIds({
    ids: feature?.faqsId,
  })

  if (!feature) return notFound();

  const components = await fetchPageComponents(pathname);

  const faqsProps: AccordionSectionT = {
    items: faqs as unknown as AccordionT[],
    bgColor: "bg-white",
    textAccordionColor: "orange-primary",
    bgAccordionColor: "bg-white",
    isClosed: true,
    isFaq: true,
    country: feature.country,
  }

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: feature.name,
            desc: feature.description,
            image: feature?.image,
          },
        }}
      ></BuilderComponent>
      {feature?.components?.meta?.map((item, index) => {
        return (
          <CTASection
            key={index}
            title={item?.title}
            desc={item?.desc}
            bullets={item?.bullets}
            image={item?.image}
            reverse={index % 2 === 0}
          />
        )
      })}
      {feature?.content ? (
        <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
          <RichContent richContent={feature.content}></RichContent>
        </section>
      ) : (
        <></>
      )}
      <AccordionSection {...faqsProps} />
    </>
  );
};

export default FeaturePage;
