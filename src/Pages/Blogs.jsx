import React from "react";
import BlogStep from "../Components/BlogStep";

const Blogs = () => {
  return (
    <div>
      <section className="bg-[#28535B] py-10 md:py-16">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Blogs
          </h1>
          <p className="text-white font-semibold">Home &gt;Blogs</p>
        </div>
      </section>{" "}
      <BlogStep/>
    </div>
  );
};

export default Blogs;
