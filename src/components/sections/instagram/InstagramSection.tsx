import Wrapper from "@/components/shared/Wrapper";
import { Button } from "@/components/ui/button";

export default function InstagramSection() {
  return (
    <div className="overflow-hidden relative">
      <div className="insta-image "></div>
      <Wrapper>
        <section className="px-4 md:px-6  absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-full sm:max-w-6xl mx-auto text-center">
            <h2 className="text-[30px] sm:text-[40px] lg:text-[60px]  mb-2 font-extrabold">
              Our Instagram
            </h2>
            <p className="text-muted-foreground mb-6 text-[16px] sm:text-[20px]">
              Follow our store on Instagram
            </p>
            <Button variant={"outline"} className="text-[16px] py-4 px-12">
              Follow Us
            </Button>
          </div>
        </section>
      </Wrapper>
    </div>
  );
}
