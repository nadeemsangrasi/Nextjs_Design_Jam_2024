import { createClient } from "@sanity/client";
import axios from "axios";
import "dotenv/config";
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID, // Replace with your project ID
  dataset: "production", // Or your dataset name
  apiVersion: "2024-01-04", // Today's date or latest API version
  useCdn: true, // Disable CDN for real-time updates
  token: process.env.SANITY_API_TOKEN,
});

async function importData() {
  try {
    // Fetch data from external API
    const response = await axios.get(
      "https://template-0-beta.vercel.app/api/product"
    );
    const products = response.data;

    // Iterate over the products
    for (const product of products) {
      const sanityProduct = {
        _type: "product",
        _id: product.id,
        id: product.id,
        name: product.name,
        imagePath: product.imagePath,
        price: parseFloat(product.price),
        description: product.description,
        discountPercentage: product.discountPercentage,
        isFeaturedProduct: product.isFeaturedProduct,
        stockLevel: product.stockLevel,
        category: product.category,
      };

      // Log the product before attempting to upload it to Sanity
      console.log("Uploading product:", sanityProduct);

      // Import data into Sanity
      await client.createOrReplace(sanityProduct);
      console.log(`✅ Imported product: ${sanityProduct.name}`);
    }

    console.log("✅ Data import completed!");
  } catch (error) {
    console.error("❌ Error importing data:", error);
  }
}

importData();
