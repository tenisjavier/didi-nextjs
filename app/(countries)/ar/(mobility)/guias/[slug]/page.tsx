import React from "react";
import GuidePage, { generateGuideMetadata, generateGuideStaticParams } from "@/components/Sections/Guides";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: GuiasProps) {
  const article = await generateGuideMetadata(slug, 'ar')

  return article
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams('ar', 'driver');

  return articlesSlugs;
}

const Guide = async ({ params: { slug } }: GuiasProps) => {

  return (
    <GuidePage params={{
      countryCode: "ar",
      guideCategory: 'driver',
      slug
    }} />
  );
};

export default Guide;
