import React from "react";
import { fetchGuideBySlug, fetchGuidesByCategory } from "@/utils/db";
import { Metadata } from "next";
import Link from "next/link";
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

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Argentina, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Guide = async ({ params: { slug } }: GuiasProps) => {
  const [guide, suggestedGuides] = await Promise.all([
    fetchGuideBySlug("ar", slug),
    fetchGuidesByCategory("driver", "ar"),
  ]);

  if (!guide) return notFound();

  metadata = guide.seoTitle
    ? {
        title: guide.seoTitle,
        description: guide.seoDescription,
      }
    : metadata;

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

  const suggestedGuidesProps = {
    name: "Suggested Guides",
    title: "Guías para Socios Conductores en Argentina",
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    columns: suggestedGuides.map((guide: GuideT) => {
      return {
        title: <Link href={`/ar/guias/${guide.slug}`}>{guide.title}</Link>,
        desc: guide.excerpt,
        image: guide.featuredImage,
        imageStyle: "object-cover h-56 w-full p-4",
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `/ar/guias/${guide.slug}`,
      };
    }),
  };
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
  const guides = await fetchGuidesByCategory("driver", "ar");
  const guidesSlugs = guides.map((guide: GuideT) => {
    slug: guide.slug;
  });
  return guidesSlugs;
}
