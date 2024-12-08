import Image from "next/image";
import Link from "next/link";
import React from "react";
import lineImg from "@/assets/images/Line 1.png";
const LineHead = ({ url, label }: { url: string; label: string }) => {
  return (
    <div className="flex items-center flex-col">
      <Link
        href={url}
        className="inline-block  py-3 md:text-2xl font-meduim text-black  rounded-md hover:bg-opacity-80 "
      >
        {label}
      </Link>
      <Image src={lineImg} alt="lineImg" className="w-16 md:w-fit" />
    </div>
  );
};

export default LineHead;
