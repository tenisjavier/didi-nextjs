import React from "react";
import {
  fetchGuideBySlug,
  fetchGuides,
  fetchSuggestedColumnSection,
} from "@/utils/db";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";
import { ColumnSectionT, CountryCode, GuideType } from "@/typings";
import ColumnsSection from "@/components/ColumnSection";

interface GuiasProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    guideCategory: GuideType;
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

const GuidePage = async ({
  params: { slug, guideCategory, countryCode },
}: GuiasProps) => {
  const [guideContent, suggestedGuides] = await Promise.all([
    fetchGuideBySlug(countryCode, slug),
    fetchGuides(countryCode, guideCategory, 0, 12),
  ]);

  const guide = guideContent?.items?.[0];

  if (!guide) return notFound();

  const heroProps = {
    title: guide.title,
    desc: guide.excerpt,
    bgColor: "bg-white",
    textColor: "white",
    bgImage: guide.featuredImage,
    btnType: "drv",
    btnMode: "light",
    brightness: "brightness-75",
  };
  const bannerProps = {
    title: "¿Querés ser conductor en DiDi?",
    desc: "Generá Dinero y maneja tus tiempos",
    textColor: "white",
    bgColor: "bg-orange-primary",
    btnType: "drv",
    btnMode: "light",
  };

  const suggestedGuidesProps: ColumnSectionT =
    await fetchSuggestedColumnSection(countryCode, "Guide", guideCategory);

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container ar-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={guide.content}></RichContent>
      </section>
      <Banner {...bannerProps}></Banner>
      <ColumnsSection {...suggestedGuidesProps}></ColumnsSection>
    </>
  );
};

export default GuidePage;
