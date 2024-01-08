import React from "react";
import { fetchArticleBySlug } from "@/utils/db";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";

interface NewsroomProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: NewsroomProps) {
  const article = (await fetchArticleBySlug(slug, "cl")).items?.[0]
  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

const Newsroom = async ({ params: { slug } }: NewsroomProps) => {
  const article = await (await fetchArticleBySlug(slug, "cl")).items?.[0]

  if (!article) return notFound();

  const heroProps = {
    title: article.title,
    desc: article.excerpt,
    bgColor: "bg-white",
    textColor: "white",
    bgImage: article.featuredImage,
    btnType: "drv",
    btnMode: "light",
    brightness: "brightness-75",
  };
  const bannerProps = {
    title: "¿Quieres ser socio conductor en DiDi?",
    desc: "Genera Dinero y maneja tus tiempos.",
    textColor: "white",
    bgColor: "bg-orange-primary",
    btnType: "drv",
    btnMode: "light",
  };

  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={article.content}></RichContent>
      </section>
      <Banner {...bannerProps}></Banner>
    </>
  );
};

export default Newsroom;
