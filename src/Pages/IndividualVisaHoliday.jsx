import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const IndividualVisaHoliday = () => {
  const url ="https://www.growmore.one/our-services/individual/working-holiday-work-holiday-visa/";
  return (
    <>
      <Helmet>
        <title>
          Working and Holiday Visa Australia (Subclass 462)
        </title>

        <meta
          name="description"
          content="Apply for the Working and Holiday Visa Australia (Subclass 462) and explore work and travel opportunities. Check your eligibility with expert help from GrowMore Immigration."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Working and Holiday Visa Australia (Subclass 462)"
        />
        <meta
          property="og:description"
          content="Apply for the Working and Holiday Visa Australia (Subclass 462) and explore work and travel opportunities. Check your eligibility with expert help from GrowMore Immigration."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        <div>
          <section className="bg-[#28535B] py-12 sm:py-16">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
              <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
                Work and Holiday Visa (Subclass 462)
              </h1>

              <p className="text-white font-medium mt-3 text-sm sm:text-base">
                Home &gt; <span className=" cursor-pointer">Employers</span>{" "}
                &gt;{" "}
                <span className=" cursor-pointer">
                  Work and Holiday Visa (Subclass 462)
                </span>
              </p>
            </div>
          </section>

          {/* Main Section */}
          <section className="py-12 sm:py-16 bg-white">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Left Column */}
              <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-100 md:h-240 lg:h-220 md:w-[400px] lg:w-[500px] mx-auto md:mx-0">
                <div className="space-y-5">
                  <Link to="/our-services/individual/employer-sponsored-visa/">
                    <div className="group flex  items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Employer Sponsored Visa Australia Requirements
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B] transition-colors duration-300" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/general-skilled-visa/">
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        General Skilled Migration Visa (GSM Visa) & Skilled
                        Worker Visa Australia
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/student-guardian-visa/">
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        How to Apply Student Guardian Visa in Australia
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/family-visa/">
                    {" "}
                    <div className="group flex mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        What is a Family Visa?
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/temporary-work-short-stay-visa/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Temporary Work Visa (Subclass 400) and Short Stay Visa
                        Specialist
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/global-talent-visa/">
                    <div className="group flex  mt-3 items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Apply For the Global Talent Visa
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>

                  <Link to="/our-services/individual/visitor-evisitor-eta-visa/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        What is the Electronic Travel Authority ETA for e-Visa?
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>
                  <Link to="/our-services/individual/business-investor-visa/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Business Investment Visa & Innovation Visa
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>
                  <Link to="/our-services/individual/refugee-visa/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Refugee & Humanitarian Visa Program
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>
                  <Link to="/our-services/individual/working-holiday-work-holiday-visa/">
                    <div className="group mt-3 flex items-center justify-between gap-6 bg-white px-5 py-4  rounded-3xl cursor-pointer transition-all duration-300 hover:shadow-md">
                      <span className="flex-1 text-[#28535B]  font-semibold group-hover:text-[#5dc2d3] transition-colors duration-300">
                        Working Holiday Visa Australia (Subclasses 462)
                      </span>
                      <IoIosArrowDroprightCircle className="text-green-500 text-3xl group-hover:text-[#28535B]" />
                    </div>
                  </Link>
                </div>
              </div>
              {/* Right Column */}
              <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">
                {" "}
                <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B] ">
                  Work and Holiday Visa (Subclass 462){" "}
                </h3>
                <div>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    Working holiday visas are designed for young individuals who
                    are interested in traveling to Australia and working to
                    support their travels
                  </p>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    IThere are two main <b>types of working holiday visas:</b>{" "}
                    the Work and Holiday visa <b>(subclass 462)</b> and the
                    Working Holiday visa <b>(subclass 417)</b>.
                  </p>

                  <h2 className="text-2xl sm:text-2xl font-semibold text-black mb-3">
                    Work and Holiday Visa (Subclass 462){" "}
                  </h2>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    is available to citizens of specific countries, including
                    the United States, Canada, and several countries in Europe
                    and Asia. To be eligible for the Working Holiday Visa
                    Australia, individuals must be between the ages of 18 and
                    30, hold a passport from an eligible country, and meet
                    English language and health requirements.
                  </p>
                  <h2 className="text-2xl sm:text-2xl font-semibold text-black mb-3">
                    Working Holiday visa (subclass 417)
                  </h2>

                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    is available to citizens of specific countries, including
                    the United Kingdom, Ireland, Canada, and several countries
                    in Europe and Asia. To be eligible, individuals must be
                    between the ages of 18 and 30, hold a passport from an
                    eligible country, and meet English language and health
                    requirements.
                  </p>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    Both of these visas allow individuals to stay in Australia
                    for up to 12 months, work and study while in the country,
                    and travel to and from Australia as many times as they wish
                    during the visa validity period.
                  </p>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    However, they are not intended to be used on the Working
                    Holiday Visa Australia as a means of obtaining long-term or
                    permanent employment.
                  </p>

                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    <b>Note: </b> eligibility criteria and requirements for each
                    stream are subject to change, and it is always advisable to
                    consult a registered migration agent to understand the
                    latest immigration requirements. You can also check DHA
                    website{" "}
                    <span className="text-blue-500">
                      https://immi.homeaffairs.gov.au/visas{" "}
                    </span>
                    to know about any of the mentioned visas.
                  </p>
                  <p className="text-[#727272] mb-3 leading-relaxed  text-justify text-sm sm:text-base">
                    Our migration agent at{" "}
                    <span className="text-blue-500">Growmore Immigration </span>
                    can help you with the latest information and requirements
                    for the Business Innovation and Investment (Provisional)
                    visa, and guide you through the entire visa application
                    process. Book a consultation with us today to learn more.
                  </p>
                </div>
                <Link to="/book-consultation">
                  <button className="bg-[#6dc7d1] text-white  mb-3 rounded-full  hover:bg-black transition whitespace-nowrap px-7 py-4 font-base text-sm">
                    Book Consultation →
                  </button>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default IndividualVisaHoliday;
