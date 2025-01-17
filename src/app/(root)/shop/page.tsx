import ShopHero from "@/components/shared/ShopHero";
import Product from "@/components/shared/Product";
import Wrapper from "@/components/shared/Wrapper";
import { IProduct } from "@/types/types";
import React from "react";
import FeatureSection from "@/components/shared/FeatureSection";
import Pagination from "./Pagination";
import { getProductsFromSanity } from "@/lib/FetchProducts";

const AllProducts = async () => {
  const products = await getProductsFromSanity();
  console.log(products);
  return (
    <div>
      <ShopHero label="Shop" />
      <Wrapper>
        <div className="px-4">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center ">
            {products.map((product: IProduct, index: number) => (
              <Product key={index} product={product} />
            ))}
          </div>
        </div>
      </Wrapper>
      <FeatureSection />
      <Pagination />
    </div>
  );
};

export default AllProducts;
