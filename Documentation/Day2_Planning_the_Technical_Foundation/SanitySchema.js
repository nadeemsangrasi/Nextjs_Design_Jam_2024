export const productSchema = {
  name: "product",
  title: "Product",
  type: "document",
  fields: [
    {
      name: "id",
      title: "ID",
      type: "string",
    },
    {
      name: "name",
      title: "Name",
      type: "string",
    },
    {
      name: "imagePath",
      title: "Image Path",
      type: "url",
    },
    {
      name: "price",
      title: "Price",
      type: "number",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
    },
    {
      name: "discountPercentage",
      title: "Discount Percentage",
      type: "number",
    },
    {
      name: "isFeaturedProduct",
      title: "Is Featured Product",
      type: "boolean",
    },
    {
      name: "stockLevel",
      title: "Stock Level",
      type: "number",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "images",
      title: "Images",
      type: "array",
      of: [
        {
          type: "image",
          options: {
            hotspot: true,
          },
        },
      ],
    },
  ],
};

export const blogSchema = {
  name: "blogPost",
  title: "Blog Post",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "author",
      title: "Author",
      type: "string",
    },
    {
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
    },
    {
      name: "category",
      title: "Category",
      type: "string",
    },
    {
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      description: "A short summary of the post.",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
    },
  ],
};
