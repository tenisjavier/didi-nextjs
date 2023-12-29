import React from "react";
import { fetchArticleBySlug, fetchArticles, fetchGuideBySlug, fetchGuidesByCategory } from "@/utils/db";
import { Metadata } from "next";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import ColumnsSection from "@/components/ColumnSection";
import { notFound } from "next/navigation";
import { ArticleT, GuideT } from "@/typings";

interface GuiasProps {
  params: {
    slug: string;
  };
}

export let metadata: Metadata = {
  title: "Registrate como Socio Conductor DiDi",
  description:
    "DiDi en Mexico, registrate como socio conductor en las categorías express y taxi ganando más y manejando menos. Si sos Socio Conductor llamános al +54 (11) 3987-6342",
};

const Article = async ({ params: { slug } }: GuiasProps) => {
  const [article, suggestedArticles] = await Promise.all([
    fetchArticleBySlug(slug, "mx"),
    fetchArticles("mx"),
  ]);

  if (!article) return notFound();

  metadata = article.seoTitle
    ? {
      title: article.seoTitle,
      description: article.seoDescription,
    }
    : metadata;

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
    title: "¿Querés ser conductor en DiDi?",
    desc: "Generá Dinero y maneja tus tiempos",
    textColor: "white",
    bgColor: "bg-orange-primary",
    btnType: "drv",
    btnMode: "light",
  };

  const suggestedGuidesProps = {
    name: "Suggested Articles",
    title: "DiDi Artículos de Lugares para Visitar en Mexico",
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    columns: suggestedArticles.map((article: ArticleT) => {
      return {
        title: <Link href={`/mx/articulos/${article.slug}`}>{article.title}</Link>,
        desc: article.excerpt,
        image: article.featuredImage,
        imageStyle: "object-cover h-56 w-full p-4",
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `/mx/articulos/${article.slug}`,
      };
    }),
  };
  return (
    <>
      <CTASection {...heroProps}></CTASection>
      <section className="container mx-auto mb-32 text-gray-primary md:px-28 mt-16">
        <RichContent richContent={article.content}></RichContent>
      </section>
      <Banner {...bannerProps}></Banner>
      <ColumnsSection {...suggestedGuidesProps}></ColumnsSection>
    </>
  );
};

export default Article;

export async function generateStaticParams() {
  const articles = await fetchArticles("mx");
  const articlesSlugs = articles.map((article: ArticleT) => {
    slug: article.slug;
  });
  return articlesSlugs;
}