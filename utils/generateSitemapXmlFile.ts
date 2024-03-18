import { MetadataRoute } from "next";
import { writeFileSync } from "fs";

const generateSitemapXmlFile = (pages: MetadataRoute.Sitemap) => {
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${pages
        .map(
          (route) => `
      <url>
        <loc>${route.url}</loc>
        <lastmod>${route.lastModified}</lastmod>
        <changefreq>${route.changeFrequency}</changefreq>
        <priority>${route.priority}</priority>
      </url>`
        )
        .join("")}
    </urlset>
    `;

  writeFileSync("./public/sitemap.xml", sitemap);

  console.log("Sitemap gerado com sucesso!");
};

export default generateSitemapXmlFile;
