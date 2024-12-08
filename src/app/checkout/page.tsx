import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import BillingDetails from "./BillingDetails";
import FeatureSection from "@/components/shared/FeatureSection";

const CheckoutPage = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="Checkout" url="/checkout" />

      <BillingDetails />
      <div className="pb-8">
        <FeatureSection />
      </div>
    </div>
  );
};

export default CheckoutPage;
