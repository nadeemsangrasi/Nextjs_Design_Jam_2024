import Link from "next/link";

import img from "@/assets/icons/Meubel House_Logos-05.png";
import Image from "next/image";

export default function SectionHeader({
  label,
  url,
}: {
  label: string;
  url: string;
}) {
  return (
    <div className="relative w-full ">
      <div className="hero"></div>
      <div className="flex h-full flex-col items-center justify-center space-y-4 text-black absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {/* Logo */}
        <Image src={img} alt="img" />
        {/* Title */}
        <h1 className="text-2xl sm:text-4xl font-bold ">{label}</h1>
        {/* Breadcrumbs */}
        <nav className="flex items-center space-x-2 text-sm">
          <span className=" text-lg">
            <Link href={"/"}>Home</Link>
          </span>
          <span className="sm:text-2xl">&gt;</span>
          <span className=" sm:text-lg">
            <Link href={url}>{label}</Link>
          </span>
        </nav>
      </div>
    </div>
  );
}
