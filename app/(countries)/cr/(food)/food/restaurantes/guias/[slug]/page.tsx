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
  const article = await generateGuideMetadata(slug, "cr");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("cr", "restaurant");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {

  return (
    <GuidePage
      params={{
        pathname: "/cr/food/restaurantes/guias/slug/",
        countryCode: "cr",
        slug,
      }}
    />
  );
};

export default Page;
