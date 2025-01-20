"use client";
import Wrapper from "@/components/shared/Wrapper";
import { IProduct } from "@/types/types";
import React, { useEffect, useState } from "react";
import Product from "@/components/shared/Product";
import LineHead from "@/components/shared/LineHead";
import { getProductsFromSanity } from "@/lib/FetchProducts";
const OurTopSection = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    getProductsFromSanity().then((data) => {
      const feturedProducts = data.filter(
        (product: IProduct) => product.isFeaturedProduct
      );
      setProducts(feturedProducts);
    });
  }, []);
  return (
    <Wrapper>
      <div className="text-center space-y-2 py-16">
        <h2 className="text-[30px] sm:text-[36px] font-semibold">
          Top Picks For You
        </h2>
        <p className="text-muted-foreground  mx-auto text-custom-gray">
          Find a bright ideal to suit your taste with our great selection of
          suspension, floor and table lights.
        </p>
      </div>
      <div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center ">
          {products.map((product: IProduct, index: number) => (
            <Product key={index} product={product} />
          ))}
        </div>
      </div>
      <div className="mt-10">
        <LineHead label="View More" url="/shop" />
      </div>
    </Wrapper>
  );
};

export default OurTopSection;
