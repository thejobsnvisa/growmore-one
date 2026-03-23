import { useState, useEffect, useMemo } from "react";
import React from "react";
import { reviewsData } from "../data/reviewsData";

export default function GoogleStyleReviews() {
  const [current, setCurrent] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);
  const [sortBy, setSortBy] = useState("relevant");

  const sortedReviews = useMemo(() => {
    let data = [...reviewsData];
    switch (sortBy) {
      case "newest":
        return data.sort((a, b) => new Date(b.date) - new Date(a.date));
      case "highest":
        return data.sort((a, b) => b.rating - a.rating);
      case "lowest":
        return data.sort((a, b) => a.rating - b.rating);
      case "relevant":
      default:
        return data.sort((a, b) => b.relevance - a.relevance);
    }
  }, [sortBy]);

  useEffect(() => {
    const updateView = () => {
      if (window.innerWidth < 640) setItemsPerView(1);
      else if (window.innerWidth < 1024) setItemsPerView(2);
      else setItemsPerView(3);
    };
    updateView();
    window.addEventListener("resize", updateView);
    return () => window.removeEventListener("resize", updateView);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev + 1 > sortedReviews.length - itemsPerView ? 0 : prev + 1,
      );
    }, 3500);
    return () => clearInterval(interval);
  }, [itemsPerView, sortedReviews.length, sortBy]);

  return (
    <section className="py-16 sm:py-20 bg-gray-50/30">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
          <div className="text-left">
            <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
              Customer Reviews
            </h2>
            <div className="flex items-center gap-3 mt-2">
              <span className="text-2xl font-bold text-gray-800">4.9</span>
              <div className="flex text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <span className="text-gray-500 text-sm">
                (120+ Google Reviews)
              </span>
            </div>
          </div>

          {/* Filter Bar */}
          <div className="flex items-center gap-2 bg-white p-1 rounded-lg border border-gray-200 shadow-sm">
            <select
              value={sortBy}
              onChange={(e) => {
                setSortBy(e.target.value);
                setCurrent(0);
              }}
              className="w-full md:w-auto text-sm bg-transparent pl-3 pr-8 py-3 text-gray-700 outline-none cursor-pointer font-semibold appearance-none"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='%236B7280'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`,
                backgroundRepeat: "no-repeat",
                backgroundPosition: "right 0.75rem center",
                backgroundSize: "1rem",
              }}
            >
              <option value="relevant">Most Relevant</option>
              <option value="newest">Newest First</option>
              <option value="highest">Highest Rating</option>
              <option value="lowest">Lowest Rating</option>
            </select>
          </div>
        </div>

        {/* Slider Container */}
        <div className="overflow-hidden relative pb-4">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${current * (100 / itemsPerView)}%)`,
            }}
          >
            {sortedReviews.map((review) => (
              <div
                key={review.id}
                className="flex-shrink-0 px-3" // Using padding for the "gap" to keep math simple
                style={{ width: `${100 / itemsPerView}%` }}
              >
                <div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all duration-300 h-full flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-full bg-[#28535b] text-white flex items-center justify-center text-sm font-bold shadow-inner">
                          {review.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </div>
                        <div>
                          <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#28535b] transition-colors">
                            {review.name}
                          </h4>
                          <p className="text-[11px] uppercase tracking-wider text-gray-400 font-medium">
                            {review.time}
                          </p>
                        </div>
                      </div>
                      <img
                        src="https://www.gstatic.com/images/branding/product/1x/googleg_32dp.png"
                        alt="google"
                        className="w-5 h-5 opacity-80"
                      />
                    </div>

                    <div className="flex gap-0.5 mb-3">
                      {[...Array(5)].map((_, i) => (
                        <span
                          key={i}
                          className={`text-lg ${i < review.rating ? "text-yellow-400" : "text-gray-200"}`}
                        >
                          ★
                        </span>
                      ))}
                    </div>

                    <p className="text-gray-600 text-[14px] leading-relaxed italic">
                      "{review.text}"
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
