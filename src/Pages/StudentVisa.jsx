import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const StudentVisa = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
            Student Visa
          </h1>

          <p className="text-white font-medium mt-3 text-sm sm:text-base">
            Home &gt;{" "}
            <span className=" cursor-pointer">
              Student Sponsored
            </span>{" "}
            &gt;{" "}
            <span className=" cursor-pointer">
              Student Visa Requirements
            </span>
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
         <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-72 lg:h-60 md:w-[400px] lg:w-[470px] mx-auto md:mx-0">
  <div className="space-y-3">

    {/* Australia */}
    <Link to="/our-services/student-visa/student-visa-australia/">
      <div className="group flex justify-between items-center bg-white px-6 py-3 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
        <span className="text-[#28535B] font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
          Student Visa Australia
        </span>
        <IoIosArrowDroprightCircle className="text-green-500 text-2xl sm:text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
      </div>
    </Link>

    {/* Dubai */}
    <Link to="/our-services/student-visa/student-visa-dubai/">
      <div className="group flex justify-between items-center bg-white px-6 py-3 mt-3 rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
        <span className="text-[#28535B] font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
          Student Visa Dubai
        </span>
        <IoIosArrowDroprightCircle className="text-green-500 text-2xl sm:text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
      </div>
    </Link>

    {/* UK */}
    <Link to="/our-services/student-visa/student-visa-uk/">
      <div className="group flex justify-between items-center bg-white px-6 py-3 rounded-3xl mt-3 cursor-pointer transition-all duration-300 hover:shadow-md">
        <span className="text-[#28535B] font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
          Student Visa UK
        </span>
        <IoIosArrowDroprightCircle className="text-green-500 text-2xl sm:text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
      </div>
    </Link>

  </div>
</div>
          {/* Right Column */}
          <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">
            <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
              Student Visa Requirements
            </h2>

            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mb-3">
              Get Your Student Visa to Start Your Study Abroad Adventure
            </h3>

            <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
              Are you dreaming of studying abroad at a place that offers
              top-quality education, global career potential, and life-changing
              experiences? Then, you are at the right place. At Growmore
              Immigration, we are here to make your international education
              journey smoother, smarter, and completely stress-free by providing
              the best student visa service.
            </p>

            <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
              Whether you are heading for a Student Visa Australia, a Student
              Visa UK, or a Student Visa UAE, processing it perfectly is your
              first step on the pathway to making your dreams a reality.
            </p>

            <p className="text-[#727272] mb-3 leading-relaxed text-justify  text-sm sm:text-base">
              By studying abroad, you won’t simply obtain a qualification but
              also gain global exposure, confidence, and a competitive advantage
              to build a successful international career.
            </p>

            {/* Reasons */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-10">
              Reasons Why Studying Abroad Is the Smart Choice
            </h3>

            <ul className="list-disc pl-6 mb-3 space-y-3 text-[#727272] text-sm sm:text-base">
              <li>Global Networking Opportunities</li>
              <li>Internationally Recognized Degrees & Niche Fields</li>
              <li>Hands-On Learning & Internships</li>
              <li>Opportunity to Explore Multiple Countries</li>
              <li>Pathway to Residency or Post-Study Work</li>
            </ul>

            {/* Countries */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-10">
              Countries We Specialize in for a Study Visa
            </h3>

            <h4 className="text-lg sm:text-xl font-semibold text-[#28535B] mt-8">
              Australia
            </h4>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#727272] text-sm sm:text-base">
              <li>
                Innovative teaching and research-based university education
              </li>
              <li>Post-study work rights up to 6 years*</li>
              <li>High student satisfaction levels</li>
              <li>
                Top institutions like University of Melbourne, ANU & Monash
                University
              </li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-[#28535B] mt-8">
              United Kingdom
            </h4>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#727272] text-sm sm:text-base">
              <li>3-year bachelor’s & 1-year master’s programs</li>
              <li>Graduate Route Visa post-study work option</li>
              <li>Home to Oxford, Cambridge & Imperial College</li>
              <li>Strong industry partnerships</li>
            </ul>

            <h4 className="text-lg sm:text-xl font-semibold text-[#28535B] mt-8">
              United Arab Emirates
            </h4>
            <ul className="list-disc pl-6 mt-3 space-y-2 text-[#727272] text-sm sm:text-base">
              <li>Branch campuses of world-class universities</li>
              <li>Tax-free career opportunities</li>
              <li>Safe and modern infrastructure</li>
              <li>Access to Middle East, Asia & Africa markets</li>
            </ul>
            {/* Our Approach */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-12">
              Our Approach for Every Student Visa
            </h3>

            <p className="text-[#727272] mt-4 leading-relaxed text-sm sm:text-base">
              We carefully understand the requirements of each student and
              follow a step-by-step, structured visa processing approach to
              ensure smooth and successful outcomes.
            </p>

            <ol className="list-decimal pl-6 mb-3 space-y-4 text-[#727272] text-sm sm:text-base">
              <li>
                <strong>Initial Consultation</strong> – Understand your goals
                and eligibility
              </li>
              <li>
                <strong>University & Course Matchmaking</strong> – Tailored
                guidance based on your profile and university requirements
              </li>
              <li>
                <strong>Application Submission</strong> – Handling paperwork and
                deadlines
              </li>
              <li>
                <strong>Visa Filing & Support</strong> – Assistance with
                financials, documents, and embassy processes
              </li>
              <li>
                <strong>Pre-Departure Support</strong> – Orientation on travel,
                accommodation, and life abroad
              </li>
            </ol>

            {/* Why Choose Us */}
            <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-12">
              Why Growmore Immigration Stands Out in Student Visa Services
            </h3>

            <p className="text-[#727272] mt-4 leading-relaxed text-sm sm:text-base">
              We proudly stand as a trusted choice for students due to our
              quality service and personalized approach in securing student
              visas for top global destinations.
            </p>

            <ul className="list-disc pl-6 mb-3 space-y-3 text-[#727272] text-sm sm:text-base">
              <li>
                Strong partnerships with globally recognized universities and
                institutions
              </li>
              <li>
                Personalized counselling with transparent and ethical guidance
              </li>
              <li>Full support from course selection to final visa approval</li>
              <li>High visa success rate backed by expert documentation</li>
              <li>
                Up-to-date knowledge of country-specific requirements and
                policies
              </li>
            </ul>
            <Link to="/book-consultation">
              <button className="bg-[#6dc7d1] text-white  mb-3 rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                Book Consultation →
              </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StudentVisa;
