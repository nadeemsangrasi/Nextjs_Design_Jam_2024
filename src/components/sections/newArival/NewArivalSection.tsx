import Image from "next/image";
import React from "react";
import img from "@/assets/images/Asgaard sofa 1.png";
import Wrapper from "@/components/shared/Wrapper";
import Link from "next/link";
const NewArivalSection = () => {
  return (
    <section className="relative bg-custom-light-orange-1 rounded-lg my-16 md:p-12 text-center ">
      <Wrapper>
        <div className="flex justify-between items-center gap-10 flex-wrap">
          <div className="">
            <Image src={img} alt="Asgaard sofa" className="object-contain" />
          </div>
          <div className="mx-auto">
            <h2 className="text-[16px] sm:text-[24px] font-medium">
              New Arrivals
            </h2>
            <h3 className="text-[26px] sm:text-[48px] font-bold pb-4">
              Asgaard sofa
            </h3>
            <button className="bg-white bg-transparent px-14 py-3 border-black border-2">
              <Link href="/shop">Order Now</Link>
            </button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default NewArivalSection;
