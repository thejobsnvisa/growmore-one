import React from "react";
import BlogStep from "../Components/BlogStep";
import { Helmet } from "react-helmet-async";


const Blogs = () => {
    const url = "https://www.growmore.one/blogs";

  return (
    <>
      <Helmet>
        <title>Blogs - GrowMore Immigration</title>

        <meta
          name="description"
          content="Stay updated with the latest immigration news, visa tips, and expert insights on the GrowMore Immigration Blog. Your trusted source for all things migration to Australia."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Blogs - GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Stay updated with the latest immigration news, visa tips, and expert insights on the GrowMore Immigration Blog. Your trusted source for all things migration to Australia."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        <section className="bg-[#28535B] py-10 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              Blogs
            </h1>
            <p className="text-white font-semibold">Home &gt;Blogs</p>
          </div>
        </section>{" "}
        <BlogStep />
      </div>
    </>
  );
};

export default Blogs;
