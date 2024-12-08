import { IProduct } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product }: { product: IProduct }) => {
  return (
    <Link href={`/shop/${product.id}`}>
      <div className="group mx-auto">
        <div className="aspect-square relative  rounded-lg">
          <Image
            src={product.image}
            alt={product.name}
            className="object-contain p-4"
          />
        </div>
        <div className="space-y-2 text-center md:text-start">
          <h3 className="font-medium text-[1rem]">{product.name}</h3>
          <p className="font-semibold text-[24px]">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export default Product;
