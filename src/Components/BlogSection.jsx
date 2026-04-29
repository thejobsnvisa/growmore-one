import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const blogs = [
      {
    id: 0,
    slug: "national-innovation-visa-selection-update-146-invitations-issued-jan-to-mar-2026",
    title: "National Innovation Visa Selection Update: 146 Invitations Issued (Jan–Mar 2026)",
    metaTitle: "NIV Invitation Round: 146 Invitations Issued",
    metaDescription: "National Innovation Visa 2026 update: 146 invitations issued from 1,815 EOIs. Explore priority trends, sector demand, and Australia PR selection insights.",
     date: "April 29, 2026",
    image: `${base}assets/30.png`,
  },{
    id: 1,
    slug: "australia-migration-reality-nominations-backlogs-and-trends",
    title: "Australia Migration Reality: Nominations, Backlogs, and Trends ",
    metaTitle: "Australia Migration Reality: Nominations & Backlogs",
    metaDescription: "Home Affairs data shows state nomination usage, skilled visa backlogs and employer-sponsored trends for 2025–26. See how competitive PR pathways are.",
     date: "April 25, 2026",
    image: `${base}assets/29.png`,
  },
  {
    id: 2,
    slug: "tasmania-weekly-invitation-round-42-invitations-issued-in-latest-round",
    title: "Tasmania Weekly Invitation Round: 42 Invitations Issued in Latest Round",
    metaTitle: "Tasmania Weekly Invitation Round 23 April 2026 Update",
    metaDescription: "Tasmania issued 42 invitations in the 23 April 2026 round. Subclass 190 remains restricted to Gold Pass, while 491 invitations continue.",
     date: "April 23, 2026",
    image: `${base}assets/28.png`,
  },
];

const BlogSection = () => {
  return (
    <section className="bg-white py-20">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        {/* Subtitle */}
        <p className="text-[#8fd07c] font-semibold text-sm tracking-widest uppercase mb-3">
          Recent Blogs
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-5xl font-medium text-[#163c3d] mb-14">
          Latest <span className="text-[#8fd07c] font-semibold">Insights</span>{" "}
          and Immigration <span className="font-semibold">Updates</span>
        </h2>
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
                  className="w-full h-56 object-cover p-4 rounded-4xl"
                />
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-[#163c3d] mb-6">
                  {blog.title}
                </h3>

                <p className="text-gray-500 text-sm mb-6 flex items-center gap-2">
                  <FaCalendar className="h-4 w-4 text-[#7cc576] font-medium" />{" "}
                  {blog.date}
                </p>

                <div className="mt-auto">
                  {/* 2. Wrap the button in a Link using the slug or ID */}
                  <Link to={`/news/${blog.slug}/`}>
                    <button className="group text-[#6dc7d1] font-semibold flex items-center gap-2 justify-end w-full transition-all duration-300">
                      <span className="relative">
                        READ MORE
                        <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-[#6dc7d1] transition-all duration-300 group-hover:w-full"></span>
                      </span>
                      <span className="transition-transform duration-300 group-hover:translate-x-1">
                        →
                      </span>
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
