import LineHead from "@/components/shared/LineHead";
import Image from "next/image";

import React from "react";

const AsideCard = ({ data }: { data: any }) => {
  return (
    <div className="flex  flex-col">
      <div className="rounded-lg">
        <Image
          src={data.img}
          alt={data.name}
          className="object-contain h-[200px] sm:h-[300px]  lg:h-[500px] mx-auto sm:px-0 pr-16"
        />
      </div>
      <div className="space-y-2">
        <h3 className="text-[30px] md:text-[36px] font-medium text-center">
          {data.title}
        </h3>
        <LineHead label="View More" url="/shop" />
      </div>
    </div>
  );
};

export default AsideCard;
