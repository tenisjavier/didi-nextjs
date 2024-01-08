import React from "react";
import { fetchGuideBySlug, fetchGuidesByCategory } from "@/utils/db";
import { Metadata } from "next";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";
import { GuideT } from "@/typings";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en México, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const guide = await (await fetchGuideBySlug("mx", slug))?.items?.[0]
  if (!guide) return notFound();

  const suggestedGuides = await fetchGuidesByCategory("restaurant", "co");
  metadata = guide.seoTitle
    ? {
      title: guide.seoTitle,
      description: guide.seoDescription,
    }
    : metadata;

  const heroProps = {
    title: guide.title,
    desc: guide.excerpt,
    bgColor: "bg-white",
    textColor: "white",
    bgImage: guide.featuredImage,
    btnType: "drv",
    btnMode: "light",
    brightness: "brightness-75",
  };
  const bannerProps = {
    title: "¿Querés ser conductor en DiDi?",
    desc: "Generá Dinero y maneja tus tiempos",
    textColor: "white",
    bgColor: "bg-orange-primary",
    btnType: "drv",
    btnMode: "light",
  };
  console.log(suggestedGuides);
  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={guide.content}></RichContent>
      </section>
      <Banner {...bannerProps}></Banner>
    </>
  );
};

export default Guide;

export async function generateStaticParams() {
  const guides = await fetchGuidesByCategory("restaurant", "co");
  const guidesSlugs = guides.items.map((guide) => {
    slug: guide.slug;
  });
  return guidesSlugs;
}
