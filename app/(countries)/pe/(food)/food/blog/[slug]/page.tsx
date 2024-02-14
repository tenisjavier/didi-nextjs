import React from "react";
import ArticlePage, {
  generateArticleMetadata,
  generateArticleStaticParams,
} from "@/components/Sections/Articles";

interface ArticleProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params: { slug } }: ArticleProps) {
  const article = await generateArticleMetadata(slug, "pe");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("pe", "food");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        articleCategory: "food",
        countryCode: "pe",
      }}
    />
  );
};

export default Article;
