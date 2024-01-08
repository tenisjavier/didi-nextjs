import { fetchArticleByCategory, fetchGuidesByCategory } from "@/utils/db";

export async function POST(request: Request) {
  const res = await request.json();

  if (res?.itemType === "Article") {
    const data = await fetchArticleByCategory(res?.code, res?.category, {
      limit: res?.limit,
      skip: res?.skip,
    });

    return Response.json({ data });
  } else if (res?.itemType === "Guide") {
    const data = await fetchGuidesByCategory(res?.category, res?.code, {
      limit: res?.limit,
      skip: res?.skip,
    });

    return Response.json({ data });
  }

  return Response.json("NO DATA");
}
