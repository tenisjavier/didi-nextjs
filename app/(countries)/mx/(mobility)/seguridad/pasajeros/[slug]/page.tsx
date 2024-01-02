import React from "react";
import { fetchCities, fetchFeatureByCategory, fetchFeatureBySlug } from "@/utils/db";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import { notFound } from "next/navigation";
import { CTASectionT, FeaturesT } from "@/typings";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Mexico, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Page = async ({ params: { slug } }: GuiasProps) => {
  const feature = await fetchFeatureBySlug("mx", slug);
  if (!feature) return notFound();

  const heroProps = {
    title: feature.name,
    desc: feature.description,
    bgColor: "bg-blue-primary",
    textColor: "white",
    image: feature.image,
    btnType: "drv",
    btnMode: "primary",
    brightness: "brightness-75",
    reverse: true,
    isHero: true,
  };

  const ctaProps: CTASectionT[] = [];

  feature.components?.meta?.forEach((meta) => {
    ctaProps.push({
      title: meta.title,
      desc: meta.desc,
      image: meta.image,
      btnType: "drv",
      btnMode: "primary",
      brightness: "brightness-75",
      reverse: true,
      isHero: false,
    })
  });

  console.log(feature.components?.meta);


  return (
    <>
      <CTASection {...heroProps}></CTASection>
      {ctaProps?.map((cta) => (
        <CTASection key={cta.title} {...cta}></CTASection>
      ))}
      {feature.content && (
        <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
          <RichContent richContent={feature.content}></RichContent>
        </section>
      )
      }
    </>
  );
};

export default Page;

export async function generateStaticParams() {
  const features = await fetchFeatureByCategory("mx", "pax")
  const featuresSlugs = features.map((feature: FeaturesT) => {
    return {
      slug: feature.slug
    }
  });
  return featuresSlugs;
}
