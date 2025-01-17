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
  ],
};

export const orderSchema = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerInfo",
      title: "Customer Information",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Customer Name",
          type: "string",
        },
        {
          name: "email",
          title: "Customer Email",
          type: "string",
        },
        {
          name: "address",
          title: "Shipping Address",
          type: "string",
        },
      ],
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: ["paid", "pending", "failed"],
      },
    },
    {
      name: "productDetails",
      title: "Product Details",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "productId",
              title: "Product ID",
              type: "reference",
              to: [{ type: "product" }],
            },
            {
              name: "quantity",
              title: "Quantity",
              type: "number",
            },
            {
              name: "price",
              title: "Price",
              type: "number",
            },
          ],
        },
      ],
    },
    {
      name: "orderDate",
      title: "Order Date",
      type: "datetime",
    },
  ],
};
