import React from "react";
import Wrapper from "./Wrapper";

const FeatureSection = () => {
  return (
    <div className=" bg-custom-white-1">
      <Wrapper>
        <div className="mt-16 grid gap-16 md:gap-8 md:grid-cols-3 py-16 px-8 place-items-center">
          <div className="text-center md:text-start md:w-[280px]">
            <h3 className="mb-2 text-xl font-semibold">Free Delivery</h3>
            <p className="text-gray-500">
              For all orders over $50, consectetur adipim scing elit.
            </p>
          </div>
          <div className="text-center md:text-start md:w-[280px]">
            <h3 className="mb-2 text-xl font-semibold">90 Days Return</h3>
            <p className="text-gray-500">
              If goods have problems, consectetur adipim scing elit.
            </p>
          </div>
          <div className="text-center md:text-start md:w-[280px]">
            <h3 className="mb-2 text-xl font-semibold">Secure Payment</h3>
            <p className="text-gray-500">
              100% secure payment, consectetur adipim scing elit.
            </p>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default FeatureSection;
