import React from "react";
import GuidePage, {
  generateGuideMetadata,
  generateGuideStaticParams,
} from "@/components/Sections/Guides";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: GuiasProps) {
  const article = await generateGuideMetadata(slug, "co");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("co", "delivery");

  return articlesSlugs;
}

const Guide = async ({ params: { slug } }: GuiasProps) => {
  return (
    <GuidePage
      params={{
        countryCode: "co",
        guideCategory: "delivery",
        slug,
      }}
    />
  );
};

export default Guide;
