import React from "react";
import {
  fetchArticleBySlug,
  fetchArticles,
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
  params: { slug, countryCode, pathname },
}: ArticleProps) => {
  const articleContent = await fetchArticleBySlug(slug, countryCode);

  const article = articleContent?.items?.[0];

  if (!article) return notFound();

  const components = await fetchPageComponents(pathname)

  const buttonTypes = {
    'rides': 'drv',
    'food': 'foodEater',
    'news': 'pax',
    'pay': 'payBusiness',
    'loan': 'loan',
    'card': 'card'
  }

  const btnType = article?.category?.find((item) => buttonTypes[item]) as "rides" | "food" | "news" | "pay" | "loan" | "card"

  return (
    <>
      <BuilderComponent
        components={components}
        textParams={{
          ctaSectionParams: {
            title: article.title,
            desc: article.excerpt,
            bgImage: article.featuredImage,
            btnType: buttonTypes[btnType]
          },
          richTextParams: article.content
        }}
      ></BuilderComponent>
    </>
  );
};

export default ArticlePage;
