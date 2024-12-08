import { IProduct } from "@/types/types";
import Image from "next/image";
import React from "react";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <div className="group mx-auto">
      <div className="aspect-square relative  rounded-lg">
        <Image
          src={product.image}
          alt={product.name}
          className="object-contain p-4"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-medium text-[1rem]">{product.name}</h3>
        <p className="font-semibold text-[24px]">{product.price}</p>
      </div>
    </div>
  );
};

export default Product;
