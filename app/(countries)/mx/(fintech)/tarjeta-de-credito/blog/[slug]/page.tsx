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
  const article = await generateArticleMetadata(slug, "mx");

  return article;
}

export async function generateStaticParams() {
  const articlesSlugs = await generateArticleStaticParams("mx", "card");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  //We don't have content to this page. (05/03/2024) Arthur Ropke

  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "mx",
        pathname: "/mx/tarjeta-de-credito/blog/slug/",
      }}
    />
  );
};

export default Article;
