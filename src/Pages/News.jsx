import React from "react";
import NewsSection from "../Components/NewsSection";
import { Helmet } from "react-helmet-async";


const News = () => {
  const url = "https://www.growmore.one/news";
  return (
    <>
      <Helmet>
        <title>
          Australia Migration Daily News and Visa Updates
        </title>

        <meta
          name="description"
          content="Get the latest Australian immigration news, visa updates, and migration policy changes. Stay informed about new visa rules, government announcements, and immigration pathways."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Australia Migration Daily News and Visa Updates"
        />
        <meta
          property="og:description"
          content="Get the latest Australian immigration news, visa updates, and migration policy changes. Stay informed about new visa rules, government announcements, and immigration pathways."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        <section className="bg-[#28535B] py-16 md:py-20">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              News
            </h1>
            <p className="text-white font-semibold">Home &gt;News</p>
          </div>
        </section>{" "}
        <NewsSection />
      </div>
    </>
  );
};

export default News;
