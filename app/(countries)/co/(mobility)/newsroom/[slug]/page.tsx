import React from "react";
import { fetchArticleBySlug, fetchArticles } from "@/utils/db";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import { notFound } from "next/navigation";
import { ArticleT } from "@/typings";
import ColumnsSection from "@/components/ColumnSection";
import Link from "next/link";

interface NewsroomProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: NewsroomProps) {
  const article = (await fetchArticleBySlug(slug, "co")).items?.[0]
  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

const Newsroom = async ({ params: { slug } }: NewsroomProps) => {
  const [articleContent, suggestedArticles] = await Promise.all([
    fetchArticleBySlug(slug, "co"),
    fetchArticles("co", "news"),
  ]);

  const article = articleContent?.items?.[0]

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

  const suggestedGuidesProps = {
    name: "Suggested Articles",
    title: "DiDi Artículos de Lugares para Visitar en Mexico",
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    pagination: {
      total: suggestedArticles.total,
      limit: suggestedArticles.limit,
      skip: suggestedArticles.skip,
    },
    columns: suggestedArticles.items.map((article) => {
      return {
        title: <Link href={`/co/newsroom/${article.slug}`}>{article.title}</Link>,
        desc: article.excerpt,
        image: article.featuredImage,
        imageStyle: "object-cover h-56 w-full p-4",
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `/co/newsroom/${article.slug}`,
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

export default Newsroom;

export async function generateStaticParams() {
  const articles = await fetchArticles("co", "news");
  const articlesSlugs = articles.items?.map((article) => {
    slug: article.slug;
  });
  return articlesSlugs;
}