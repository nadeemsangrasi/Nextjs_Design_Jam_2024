import React from "react";
import CartDetail from "./CartDetail";
import SectionHeader from "@/components/shared/SectionHeader";
import FeatureSection from "@/components/shared/FeatureSection";

const CartPage = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="Cart" url="/cart" />

      <CartDetail />
      <div className="pb-8">
        <FeatureSection />
      </div>
    </div>
  );
};

export default CartPage;
