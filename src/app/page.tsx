import AsideTableSection from "@/components/sections/asideTable/AsideTableSection";
import BlogSection from "@/components/sections/blogSection/BlogSection";
import HeroSection from "@/components/sections/hero/HeroSection";
import InstagramSection from "@/components/sections/instagram/InstagramSection";
import NewArivalSection from "@/components/sections/newArival/NewArivalSection";
import OurTopSection from "@/components/sections/ourTop/OurTopSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AsideTableSection />
      <OurTopSection />
      <NewArivalSection />
      <BlogSection />
      <InstagramSection />
    </>
  );
}
