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
  const article = await generateGuideMetadata(slug, "mx");
  article.title = article.title + " | DiDi México";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateGuideStaticParams("mx", "driver");

  return articlesSlugs;
}

const Page = async ({ params: { slug } }: GuiasProps) => {
  return (
    <GuidePage
      params={{
        pathname: "/mx/guias/slug/",
        countryCode: "mx",
        slug,
      }}
    />
  );
};

export default Page;
