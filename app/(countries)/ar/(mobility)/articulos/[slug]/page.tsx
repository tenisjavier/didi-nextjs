import React from "react";
import { fetchArticleBySlug, fetchArticles } from "@/utils/db";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import ColumnsSection from "@/components/ColumnSection";
import { notFound } from "next/navigation";
import { ArticleT } from "@/typings";

interface ArticleProps {
  params: {
    slug: string;
  };
}

// or Dynamic metadata
export async function generateMetadata({ params: { slug } }: ArticleProps) {
  const article = await fetchArticleBySlug(slug, "ar");
  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

// SSG approach for this pages
export async function generateStaticParams() {
  const articles = await fetchArticles("ar", "rides");
  const articlesSlugs = articles.map((article: ArticleT) => {
    slug: article.slug;
  });
  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  const [article, suggestedArticles] = await Promise.all([
    fetchArticleBySlug(slug, "ar"),
    fetchArticles("ar", "rides"),
  ]);

  if (!article) return notFound();

  const heroProps = {
    isHero: true,
    title: article.title,
    desc: article.excerpt,
    bgColor: "bg-white",
    textColor: "white",
    bgImage: article.featuredImage,
    btnType: "pax",
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
    title: "DiDi Artículos de Lugares para Visitar en Chile",
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    columns: suggestedArticles.map((article: ArticleT) => {
      return {
        title: (
          <Link href={`/ar/articulos/${article.slug}`}>{article.title}</Link>
        ),
        desc: article.excerpt,
        image: article.featuredImage,
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `/ar/articulos/${article.slug}`,
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
