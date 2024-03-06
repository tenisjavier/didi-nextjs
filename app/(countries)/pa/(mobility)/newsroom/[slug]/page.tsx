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
  const article = await generateArticleMetadata(slug, "pa");
  article.title = article.title + " | DiDi Panamá";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("pa", "news");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "pa",
        pathname: "/pa/newsroom/slug/",
      }}
    />
  );
};

export default Article;
