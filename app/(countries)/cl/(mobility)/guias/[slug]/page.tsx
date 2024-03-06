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
  const article = await generateGuideMetadata(slug, "cl");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("cl", "driver");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {

  return (
    <GuidePage
      params={{
        pathname: "/cl/guias/slug/",
        countryCode: "cl",
        slug,
      }}
    />
  );
};

export default Page;
