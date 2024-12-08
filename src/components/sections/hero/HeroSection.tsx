import Image from "next/image";
import heroImg from "@/assets/images/hero-img.png";
import Wrapper from "@/components/shared/Wrapper";

import LineHead from "@/components/shared/LineHead";
const HeroSection = () => {
  return (
    <div className="bg-custom-light-orange text-black ">
      <Wrapper>
        <main className="flex items-center justify-center px-4 flex-wrap ">
          <div className="space-y-6 text-center lg:text-left mt-20">
            <h1 className="text-4xl lg:text-[64px] font-semibold leading-tight">
              Rocket single <br /> seater
            </h1>

            <div className="flex items-center justify-center lg:justify-start gap-4">
              <LineHead label="Shop Now" url="/shop" />
            </div>
          </div>
          <div className="w-full sm:w-1/2">
            <Image src={heroImg} alt="hero img" />
          </div>
        </main>
      </Wrapper>
    </div>
  );
};

export default HeroSection;
