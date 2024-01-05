// pages/api/articles.ts

import { fetchArticleByCategory } from "@/utils/db";


export async function POST(request: Request) {

  const res = await request.json()

  const data = await fetchArticleByCategory(res?.code, res?.category, { limit: res?.limit, skip: res?.skip });
  console.log('data', data)
  return Response.json({ res })
}