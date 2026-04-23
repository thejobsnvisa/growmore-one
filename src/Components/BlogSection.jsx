import React from "react";
import { FaCalendar } from "react-icons/fa";
import { Link } from "react-router-dom";

const base = import.meta.env.BASE_URL;

const blogs = [
 {
    id: 1,
    slug: "tasmania-weekly-invitation-round-42-invitations-issued-in-latest-round",
    title: "Tasmania Weekly Invitation Round: 42 Invitations Issued in Latest Round",
    metaTitle: "Tasmania Weekly Invitation Round 23 April 2026 Update",
    metaDescription: "Tasmania issued 42 invitations in the 23 April 2026 round. Subclass 190 remains restricted to Gold Pass, while 491 invitations continue.",
     date: "April 23, 2026",
    image: `${base}assets/28.png`,
  },
  {
    id: 2,
    slug: "planning-ahpra-registration-english-requirements-change-from-23-april-2026",
    title: "Planning AHPRA Registration? English Requirements Change from 23 April 2026",
    metaTitle: "AHPRA English Requirements Change from 23 April 2026",
    metaDescription: "AHPRA English requirements change from 23 April 2026. Speaking scores increase while overall scores reduce across PTE, TOEFL, OET and Cambridge tests.",
    date: "April 22, 2026",
    image: `${base}assets/27.png`,
  },
  {
    id: 3,
    slug: "australia-opens-subclass-192-tuvalu-ballot-on-1-may-with-280-places",
    title: "Australia Opens Subclass 192 Tuvalu Ballot on 1 May With 280 Places",
    metaTitle: "Australia Opens Subclass 192 Tuvalu Ballot From 1 May 2026",
    metaDescription: "AAustralia opens Subclass 192 Tuvalu ballot from 1 May to 1 June 2026 with 280 PR places. Learn eligibility, process, and how to apply.",
    date: "April 17, 2026",
    image: `${base}assets/26.jpg`,
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
