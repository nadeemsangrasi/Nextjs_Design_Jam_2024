import ShipmentForm from "@/components/shared/ShipmentForm";
import Wrapper from "@/components/shared/Wrapper";
import React from "react";

const ShipmentTracking = () => {
  return (
    <Wrapper>
      <div className="py-16">
        <ShipmentForm />
      </div>
    </Wrapper>
  );
};

export default ShipmentTracking;
