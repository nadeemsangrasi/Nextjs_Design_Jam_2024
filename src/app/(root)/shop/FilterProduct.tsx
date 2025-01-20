"use client";
import FilterBar from "@/components/shared/FilterBar";
import Product from "@/components/shared/Product";
import Wrapper from "@/components/shared/Wrapper";
import { IProduct } from "@/types/types";
import React, { useState } from "react";

const FilterProduct = ({ products }: { products: IProduct[] }) => {
  const [order, setOrder] = useState("");
  const [length, setLength] = useState<number>(products.length);

  const sortedProducts = [...products].sort((a: IProduct, b: IProduct) => {
    if (order === "high-to-low") {
      return Number(b.price) - Number(a.price);
    } else if (order === "low-to-high") {
      return Number(a.price) - Number(b.price);
    }
    return 0;
  });
  return (
    <div>
      <FilterBar setOrder={setOrder} setLength={setLength} />
      <Wrapper>
        <div className="px-4 mt-12">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 justify-center ">
            {sortedProducts
              .slice(0, length)
              .map((product: IProduct, index: number) => (
                <Product key={index} product={product} />
              ))}
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FilterProduct;
