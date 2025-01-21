const order = {
  name: "order",
  title: "Order",
  type: "document",
  fields: [
    {
      name: "customerInfo",
      title: "Customer Info",
      type: "object",
      fields: [
        {
          name: "name",
          title: "Name",
          type: "string",
        },
        {
          name: "email",
          title: "Email",
          type: "string",
        },
        {
          name: "address",
          title: "Address",
          type: "string",
        },
      ],
    },
    {
      name: "paymentStatus",
      title: "Payment Status",
      type: "string",
      options: {
        list: [
          { title: "Paid", value: "paid" },
          { title: "Pending", value: "pending" },
          { title: "Failed", value: "failed" },
        ],
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
              type: "string",
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
  ],
};

export default order;
