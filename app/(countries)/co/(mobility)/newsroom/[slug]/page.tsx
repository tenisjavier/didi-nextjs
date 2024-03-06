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
  const article = await generateArticleMetadata(slug, "co");
  article.title = article.title + " | DiDi Colombia";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("co", "news");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "co",
        pathname: "/co/newsroom/slug/",
      }}
    />
  );
};

export default Article;
