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
  const article = await generateArticleMetadata(slug, "cl");
  article.title = article.title + " | DiDi Chile";
  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("cl", "rides");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "cl",
        pathname: "/cl/articulos/slug/",
      }}
    />
  );
};

export default Article;
