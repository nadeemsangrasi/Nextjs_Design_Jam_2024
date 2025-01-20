import ShopHero from "@/components/shared/ShopHero";
import React from "react";
import FeatureSection from "@/components/shared/FeatureSection";

import { getProductsFromSanity } from "@/lib/FetchProducts";
import FilterProduct from "./FilterProduct";

const AllProducts = async () => {
  const products = await getProductsFromSanity();

  return (
    <div>
      <ShopHero label="Shop" />
      <FilterProduct products={products} />
      <FeatureSection />
    </div>
  );
};

export default AllProducts;
