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
  const article = await generateArticleMetadata(slug, "ec");
  article.title = article.title + " | DiDi Ecuador";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("ec", "news");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "ec",
        pathname: "/ec/newsroom/slug/",
      }}
    />
  );
};

export default Article;
