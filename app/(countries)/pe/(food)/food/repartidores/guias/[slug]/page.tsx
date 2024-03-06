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
  const article = await generateGuideMetadata(slug, "pe");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("pe", "delivery");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {

  return (
    <GuidePage
      params={{
        pathname: "/pe/food/repartidores/guias/slug/",
        countryCode: "pe",
        slug,
      }}
    />
  );
};

export default Page;




