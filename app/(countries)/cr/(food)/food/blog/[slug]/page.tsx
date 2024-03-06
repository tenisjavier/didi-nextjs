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
  const article = await generateArticleMetadata(slug, "cr");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("cr", "food");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "cr",
        pathname: "/cr/food/blog/slug/",
      }}
    />
  );
};

export default Article;
