import { client } from "@/sanity/lib/client";

export const getBlogsFromSanity = async () => {
  const query = `*[_type == "blogPost"] | order(publishedAt desc) {
  _id,
  title,
  author,
  publishedAt,
  category,
  excerpt,
  "imageUrl": image.asset->url
}
`;

  const res = await client.fetch(query);

  return res;
};
