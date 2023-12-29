import React from "react";
import Link from "next/link";
import { fetchGuideBySlug, fetchGuidesByCategory } from "@/utils/db";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import ColumnsSection from "@/components/ColumnSection";
import { notFound } from "next/navigation";
import { GuideT } from "@/typings";

interface GuiasProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: GuiasProps) {
  const guide = await fetchGuideBySlug("cl", slug);
  return {
    title: guide.seoTitle,
    description: guide.seoDescription,
  };
}

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const guide = await fetchGuideBySlug("cl", slug);
  if (!guide) return notFound();

  const suggestedGuides = await fetchGuidesByCategory("driver", "cl");

  const heroProps = {
    isHero: true,
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
  const suggestedGuidesProps = {
    name: "Suggested Articles",
    title: "Guías para Socios Conductores en Chile",
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    columns: suggestedGuides.map((guide: GuideT) => {
      return {
        title: <Link href={`/cl/guias/${guide.slug}`}>{guide.title}</Link>,
        desc: guide.excerpt,
        image: guide.featuredImage,
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `/cl/guias/${guide.slug}`,
      };
    }),
  };
  console.log(suggestedGuides);
  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={guide.content}></RichContent>
      </section>
      <Banner {...bannerProps}></Banner>
      <ColumnsSection {...suggestedGuidesProps}></ColumnsSection>
    </>
  );
};

export default Guide;

export async function generateStaticParams() {
  const guides = await fetchGuidesByCategory("driver", "cl");
  const guidesSlugs = guides.map((guide: GuideT) => {
    slug: guide.slug;
  });
  return guidesSlugs;
}
