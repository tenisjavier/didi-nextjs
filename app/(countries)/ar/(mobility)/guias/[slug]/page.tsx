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
  const article = await generateGuideMetadata(slug, "ar");
  article.title = article.title + " | DiDi Argentina";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("ar", "driver");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {
  return (
    <GuidePage
      params={{
        pathname: "/ar/guias/slug/",
        countryCode: "ar",
        slug,
      }}
    />
  );
};

export default Page;
