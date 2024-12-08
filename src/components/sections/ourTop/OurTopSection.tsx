import Wrapper from "@/components/shared/Wrapper";
import { ourtTopData } from "@/data/data";
import { IProduct } from "@/types/types";

import React from "react";

import Product from "@/components/shared/Product";
import LineHead from "@/components/shared/LineHead";
const OurTopSection = () => {
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
          {ourtTopData.map((product: IProduct, index) => (
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
