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

  try {
    const res = await client.fetch(query);
    return res;
  } catch (error) {
    console.error("Error fetching blogs from Sanity:", error);
    throw new Error("Failed to fetch blogs from Sanity");
  }
};
