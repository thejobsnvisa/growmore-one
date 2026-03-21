import React from "react";
import { FaCalendar } from "react-icons/fa";


const blogs = [
  {
    id: 1,
    title: "How Can Healthcare Professionals Get Australia PR in 2026?",
    date: "February 23, 2026",
    image: "/assets/blog3.jpg",
  },
  {
    id: 2,
    title: "Subclass 186 Direct Entry – Requirements",
    date: "February 19, 2026",
    image: "/assets/b2.jpg",
  },
    {
    id: 3,
    title: "New Points Test in 2026? A Closer Look at the Proposed Reform",
    date: "February 18, 2026",
    image: "/assets/b3.jpg",
  },
  {
    id: 4,
    title: "Australia PR 2026: Eligibility, Process & In-Demand Jobs",
    date: "February 17, 2026",
    image: "/assets/b4.png",
  },
  {
    id: 5,
    title: "Living in Australia on a 485 Visa? Explore Your PR Options",
    date: "February 16, 2026",
    image: "/assets/b5.jpg",
  },
    {
    id: 6,
    title: "Refusals Don’t Stop Dreams: A Glazier’s TRA Skills Assessment Journey",
    date: "February 12, 2026",
    image: "/assets/b6.jpg",
  },
  {
    id: 7,
    title: "Australian Tourist Visa (Subclass 600) Invitation Letter Guide",
    date: "February 9, 2026",
    image: "/assets/b7.jpg",
  },
  {
    id: 8,
    title: "Parent Visa 804 Australia – A Simple Guide for Families",
    date: "February 6, 2026",
    image: "/assets/b8.jpg",
  },
    {
    id: 9,
    title: "Fastest Finger First: Why Australian Migration Feels Like the Hunger Games",
    date: "january 20, 2026",
    image: "/assets/b9.png",
  },{
    id: 10,
    title: "Australia Skills Assessment Guide: Eligibility, Fees & Timeline",
    date: "january 13, 2026",
    image: "/assets/b10.jpg",
  },
];

const BlogStep = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">

        {/* Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white rounded-3xl shadow-md hover:shadow-2xl transition-all duration-500 overflow-hidden flex flex-col"
            >
              {/* Image */}
              <div className="overflow-hidden rounded-t-3xl">
                <img
                  src={blog.image}
                  alt={blog.title}
                  className="w-full h-52 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-lg font-semibold text-[#163c3d] mb-4 leading-snug">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576]" /> {blog.date}
                </p>

                {/* Push button to bottom */}
                <div className="mt-auto">
                  <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                    
                    <span className="relative">
                      READ MORE
                      <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                    </span>

                    <span className="transition-transform duration-300 group-hover:translate-x-1">
                      →
                    </span>

                  </button>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BlogStep;