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
  const articlesSlugs = await generateArticleStaticParams("mx", "pay");

  return articlesSlugs;
}

const Article = async ({ params: { slug } }: ArticleProps) => {
  return (
    <ArticlePage
      params={{
        slug,
        countryCode: "mx",
        pathname: "/mx/didipay/blog/slug/",
      }}
    />
  );
};

export default Article;
