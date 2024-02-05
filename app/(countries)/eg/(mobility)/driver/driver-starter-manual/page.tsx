import React from "react";
import { Metadata } from "next";
import { fetchGuideBySlug, fetchLegalBySlug } from "@/utils/db";
import { notFound } from "next/navigation";
import RichContent from "@/components/RichContent";
import { CTASectionT } from "@/typings";
import CTASection from "@/components/CTASection";

export let metadata: Metadata;

const Page = async () => {
  const guide = await (
    await fetchGuideBySlug("eg", "driver-starter-manual")
  ).items?.[0];
  if (!guide) return notFound();
  const content = guide.content.json.content[0].content[0].value;
  metadata = {
    title: "Términos y Condiciones DiDi | DiDi México", //! fix after migration
    description: content.slice(0, 150),
    alternates: {
      canonical: `https://web.didiglobal.com/eg/driver/driver-starter-manual/`,
    },
  };

  const heroProps: CTASectionT = {
    title: guide.title,
    bgColor: "bg-white",
    textColor: "white",
    bgImage: guide.featuredImage,
    RTL: true,
    isHero: true,
  };

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 pt-16">
        <RichContent richContent={guide.content}></RichContent>
      </section>
    </>
  );
};

export default Page;
