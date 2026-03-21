import React from "react";
import NewsSection from "../Components/NewsSection";

const News = () => {
  return (
    <div>
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            News
          </h1>
          <p className="text-white font-semibold">
            Home &gt;News
          </p>
        </div>
      </section>{" "}
      <NewsSection/>
    </div>
  );
};

export default News;
