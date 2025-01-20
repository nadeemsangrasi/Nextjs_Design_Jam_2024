"use client";
import React, { useEffect, useState } from "react";
import img1 from "@/assets/images/blog/Rectangle 68.png";
import user from "@/assets/images/blog/Vector (8).png";
import img4 from "@/assets/images/blog/Vector (9).png";
import calender from "@/assets/images/blog/Vector (10).png";
import Image from "next/image";
import Link from "next/link";
import { getBlogsFromSanity } from "@/lib/FetchBlogs";
import { IBlogPost } from "@/types/types";
const Blog = () => {
  const [blogs, setBlogs] = useState<IBlogPost[]>();

  useEffect(() => {
    const fetchBlogData = () => {
      getBlogsFromSanity().then((data) => {
        setBlogs(data);
      });
    };
    fetchBlogData();
  }, []);

  return (
    <div className="  px-4 md:px-8 ">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        <div className="md:col-span-3 space-y-8">
          {blogs?.map((blog: IBlogPost) => (
            <div className="bg-white  " key={blog._id}>
              <Image
                src={blog.imageUrl}
                height={1000}
                width={1000}
                alt="Blog post 1"
                className="w-[800px] h-[600px]"
              />
              <div className="p-6">
                <div className="text-sm text-gray-500 flex items-center space-x-4 flex-wrap gap-2">
                  <span className="flex items-center gap-2">
                    <Image src={user} alt="user image" /> {blog.author}
                  </span>
                  <span className="flex items-center gap-2">
                    <Image src={calender} alt="calender image" />{" "}
                    {blog.publishedAt.split("T")[1].split(".")[0]}
                  </span>
                  <span className="flex items-center gap-2">
                    <Image src={img4} alt=" image" /> {blog.category}
                  </span>
                </div>
                <h2 className="text-xl font-semibold text-gray-800 mt-4">
                  {blog.title}
                </h2>
                <p className="text-gray-600 mt-2">{blog.excerpt}</p>
                <Link
                  href="#"
                  className="mt-4 inline-block underline underline-offset-[15px] font-medium text-xl md:text-2xl"
                >
                  Read more
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Sidebar Section */}
        <div className="space-y-8">
          <div className="flex justify-center items-center my-8">
            <div className="w-full max-w-md">
              <div className="relative">
                <input
                  type="text"
                  className=" block w-full pl-10 pr-3 py-2 border  border-black rounded-md leading-5 bg-white placeholder-gray-500 focus:outline-none   sm:text-sm"
                />
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none text-black">
                  <svg
                    className="h-5 w-5 text-gray-400"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          {/* Categories */}
          <div className=" p-6">
            <h3 className="text-lg font-semibold text-gray-800">Categories</h3>
            <ul className="mt-4 space-y-2">
              {["Crafts", "Design", "Handmade", "Interior", "Wood"].map(
                (category, index) => (
                  <li
                    key={index}
                    className="flex justify-between items-center text-gray-600"
                  >
                    <a href="#" className="hover:text-orange-600">
                      {category}
                    </a>
                    <span className="text-sm text-gray-400">{index + 2}</span>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Recent Posts */}
          <div className=" p-6">
            <h3 className="text-lg font-semibold text-gray-800">
              Recent Posts
            </h3>
            <ul className="mt-4 space-y-4">
              {[
                "Going all-in with millennial design",
                "Exploring new ways of decorating",
                "Modern house trends for 2024",
                "Creative office setup ideas",
              ].map((post, index) => (
                <li key={index} className="flex space-x-4">
                  <Image
                    src={img1}
                    alt={`Recent post ${index + 1}`}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <a href="#" className="text-gray-600 hover:text-orange-600">
                    {post}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
