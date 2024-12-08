import { blogData } from "@/data/data";
import { IBlog } from "@/types/types";
import LineHead from "@/components/shared/LineHead";
import BlogCard from "@/components/shared/BlogCard";
export default function BlogSection() {
  return (
    <section className=" px-4 md:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-[30px] sm:text-[36px] font-semibold">
            Our Blogs
          </h2>
          <p className="text-muted-foreground  mx-auto text-custom-gray">
            Find proper ideas to get started for your online store
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogData.map((blog: IBlog) => (
            <BlogCard key={blog.id} blog={blog} />
          ))}
        </div>
        <div className="mt-10">
          <LineHead label="View All Post" url="/blogs" />
        </div>
      </div>
    </section>
  );
}
