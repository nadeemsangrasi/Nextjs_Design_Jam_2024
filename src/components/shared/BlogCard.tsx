import { IBlog } from "@/types/types";
import Image from "next/image";
import React from "react";
import gImg from "@/assets/images/blog/Group.png";
import CImg from "@/assets/images/blog/Vector (4).png";
import LineHead from "./LineHead";
const BlogCard = ({ blog }: { blog: IBlog }) => {
  return (
    <article key={blog.id} className="group">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <Image
          src={blog.image}
          alt={blog.title}
          className="w-full  object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <h3 className="text-xl font-semibold mt-6 text-center lg:text-start">
        {blog.title}
      </h3>
      <LineHead label="Read More" url="" />
      <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground my-4  ">
        <span className="flex items-center gap-1">
          <Image src={gImg} alt="clock image" />
          {blog.readTime}
        </span>
        <span className="flex items-center gap-1">
          <Image src={CImg} alt="calender image" />

          {blog.date}
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
