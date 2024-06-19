import { SanityClient, groq } from "next-sanity";
export const postsQuery = groq`*[_type == "post" && defined(slug.current)]{
  ...,
  category->,
  author->,
} | order(_createdAt desc)`;

export async function getPosts(client: SanityClient): Promise<any[]> {
  return await client.fetch(postsQuery);
}

export const postBySlugQuery = groq`*[_type == "post" && slug.current == $slug]{
...,
category->,
author->,
}[0]`;

export async function getPost(
  client: SanityClient,
  slug: string
): Promise<any> {
  return await client.fetch(postBySlugQuery, {
    slug,
  });
}

export const postSlugsQuery = groq`
*[_type == "post" && defined(slug.current)][].slug.current
`;

export const categoriesQuery = groq`*[_type == "category"] | order(lower(title))`;

export async function getCategories(client: SanityClient): Promise<any[]> {
  return await client.fetch(categoriesQuery);
}
