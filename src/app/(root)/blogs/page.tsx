import SectionHeader from "@/components/shared/SectionHeader";
import React from "react";
import Blog from "./Blog";
import FeatureSection from "@/components/shared/FeatureSection";

const BlogsPage = () => {
  return (
    <div className=" max-w-screen-2xl mx-auto flex min-h-screen flex-col overflow-hidden">
      <SectionHeader label="Blogs" url="/blogs" />

      <Blog />

      <div className="pb-8">
        <FeatureSection />
      </div>
    </div>
  );
};

export default BlogsPage;
