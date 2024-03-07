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
  article.title = article.title + " | DiDi Colombia";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("co", "driver");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {
  return (
    <GuidePage
      params={{
        pathname: "/co/guias/slug/",
        countryCode: "co",
        slug,
      }}
    />
  );
};

export default Page;
