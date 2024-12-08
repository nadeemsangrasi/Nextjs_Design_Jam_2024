import React from "react";
import img1 from "@/assets/images/Cloud sofa three seater + ottoman_3 1.png";
import img2 from "@/assets/images/Granite square side table 1.png";
import Wrapper from "@/components/shared/Wrapper";
import AsideCard from "./AsideCard";
const data = [
  { title: "Side table", img: img2 },
  { title: "Side table", img: img1 },
];
const AsideTableSection = () => {
  return (
    <div className="bg-custom-light-gray ">
      <Wrapper>
        <div className="py-16 flex flex-wrap gap-5">
          {data.map((d) => (
            <AsideCard key={d.title} data={d} />
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default AsideTableSection;
