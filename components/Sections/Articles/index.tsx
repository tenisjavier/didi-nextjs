import React from "react";
import { fetchArticleBySlug, fetchArticles } from "@/utils/db";
import Link from "next/link";
import CTASection from "@/components/CTASection";
import RichContent from "@/components/RichContent";
import Banner from "@/components/Banner";
import ColumnsSection from "@/components/ColumnSection";
import { notFound } from "next/navigation";
import { ArticleType, ColumnSectionT, CountryCode } from "@/typings";

interface ArticleProps {
  params: {
    slug: string;
    countryCode: CountryCode;
    articleCategory: ArticleType;
  };
}

// or Dynamic metadata
export async function generateArticleMetadata(
  slug: string,
  countryCode: CountryCode
) {
  const article = (await fetchArticleBySlug(slug, countryCode)).items?.[0];
  return {
    title: article.seoTitle,
    description: article.seoDescription,
  };
}

// SSG approach for this pages
export async function generateArticleStaticParams(
  countryCode: CountryCode,
  category: string
) {
  const articles = (await fetchArticles(countryCode, category, 0, 10)).items;
  const articlesSlugs = articles.map((article: any) => {
    slug: article.slug;
  });
  return articlesSlugs;
}

const ArticlePage = async ({
  params: { slug, countryCode, articleCategory },
}: ArticleProps) => {
  const [articleContent, suggestedArticles] = await Promise.all([
    fetchArticleBySlug(slug, countryCode),
    fetchArticles(countryCode, articleCategory, 0, 12),
  ]);

  const article = articleContent?.items?.[0];

  const countryName = article?.country?.name;

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

  const suggestedArticlesTitle = {
    news: `DiDi Artículos de Lugares para Visitar en ${countryName}`,
    food: "Lee nuestros artículos de comida y restaurantes.",
    pay: "Lee nuestros artículos financieros.",
  } as any;

  const suggestedArticlesProps: ColumnSectionT = {
    name: "Suggested Articles",
    title: suggestedArticlesTitle[articleCategory],
    bgColor: "bg-blue-primary",
    textColor: "white",
    gridCols: 3,
    gap: 0,
    columns: suggestedArticles.items.map((article) => {
      const link = `/${countryCode}/articulos/${article.slug}/`;

      const typeOflink = {
        news: `/${countryCode}/newsroom/${article.slug}/`,
        food: `/${countryCode}/food/blog/${article.slug}/`,
        pay: `/${countryCode}/didipay/blog/${article.slug}/`,
      } as any;

      return {
        title: (
          <Link href={`${typeOflink[articleCategory] || link}`}>
            {article.title}
          </Link>
        ),
        desc: article.excerpt,
        image: article.featuredImage,
        bgColor: "bg-white",
        textColor: "gray-primary",
        btnType: "custom",
        btnMode: "dark",
        btnText: "Leer Guía",
        btnLink: `${typeOflink[articleCategory] || link}`,
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
      <ColumnsSection {...suggestedArticlesProps}></ColumnsSection>
    </>
  );
};

export default ArticlePage;
