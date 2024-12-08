import Link from "next/link";

import img from "@/assets/icons/Meubel House_Logos-05.png";
import Image from "next/image";
import FilterBar from "./FilterBar";
export default function ShopHero({ label }: { label: string }) {
  return (
    <div className="flex min-h-screen flex-col overflow-hidden pt-5 max-w-screen-2xl mx-auto">
      {/* Hero Section */}
      <div className="relative h-[300px] w-full ">
        <div className="hero"></div>
        <div className="flex h-full flex-col items-center justify-center space-y-4 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 mt-24">
          {/* Logo */}
          <Image src={img} alt="img" />
          {/* Title */}
          <h1 className="text-4xl font-bold ">{label}</h1>
          {/* Breadcrumbs */}
          <nav className="flex items-center space-x-2 text-sm">
            <span className=" text-lg">
              <Link href={"/"}>Home</Link>
            </span>
            <span className="text-2xl">&gt;</span>
            <span className=" text-lg">
              <Link href={"/shop"}>Shop</Link>
            </span>
          </nav>
        </div>
      </div>

      <FilterBar />
    </div>
  );
}
