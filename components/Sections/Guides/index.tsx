import React from "react";
import {
  fetchGuideBySlug,
  fetchGuides,
  fetchPageComponents,
} from "@/utils/db";
import { notFound } from "next/navigation";
import { CountryCode } from "@/typings";
import BuilderComponent from "@/components/BuilderComponent";

interface ArticleProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    pathname: string;
  };
}

// or Dynamic metadata
export async function generateGuideMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const guide = (await fetchGuideBySlug(countryCode, slug)).items?.[0];

  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
  };
}

// SSG approach for this pages
export async function generateGuideStaticParams(
  countryCode: CountryCode,
  category: string
) {
  const guides = (await fetchGuides(countryCode, category, 0, 12))?.items;
  const guidesSlugs = guides?.map((guide: { slug: string }) => {
    slug: guide.slug;
  });
  return guidesSlugs;
}

const Page = async ({
  params: { slug, countryCode, pathname },
}: ArticleProps) => {
  const guideContent = await fetchGuideBySlug(countryCode, slug);

  const guide = guideContent?.items?.[0];

  if (!guide) return notFound();

  const components = await fetchPageComponents(pathname)

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: guide.title,
            desc: guide.excerpt,
            bgImage: guide.featuredImage,
            btnText: guide.btnCustomText,
            btnLink: guide.btnCustomLink,
            btnType: 'custom'
          },
          richTextParams: guide.content
        }}
      ></BuilderComponent>
    </>
  );
};

export default Page;
