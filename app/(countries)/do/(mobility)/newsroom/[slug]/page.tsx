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
  const article = await generateArticleMetadata(slug, "do");
  article.title = article.title + " | DiDi República Dominicana";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("do", "news");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "do",
        pathname: "/do/newsroom/slug/",
      }}
    />
  );
};

export default Article;
