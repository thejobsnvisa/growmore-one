import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";

const StudentDubai = () => {
  const url ="https://www.growmore.one/our-services/student-visa/student-visa-dubai/";
  return (
    <>
      <Helmet>
        <title>
         Australian Student Visa Agency in Dubai | Growmore Immigration
        </title>

        <meta
          name="description"
          content="Apply for your Australian Student Visa from Dubai. Expert guidance on Subclass 500, university admissions, and GS requirements for UAE residents. Book today!"
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Australian Student Visa Agency in Dubai | Growmore Immigration"
        />
        <meta
          property="og:description"
          content="Apply for your Australian Student Visa from Dubai. Expert guidance on Subclass 500, university admissions, and GS requirements for UAE residents. Book today!
 "
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div>
        {/* Hero Section */}
        <section className="bg-[#28535B] py-12 sm:py-16">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
              Student Visa Dubai
            </h1>

            <p className="text-white font-medium mt-3 text-sm sm:text-base">
              Home &gt;{" "}
              <span className=" cursor-pointer">Student Sponsored</span> &gt;{" "}
              <span className=" cursor-pointer">Student Visa Dubai</span>
            </p>
          </div>
        </section>

        {/* Main Section */}
        <section className="py-12 sm:py-16 bg-white">
          <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
            {/* Left Column */}
            <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-72 lg:h-60 md:w-[380px] lg:w-[470px] mx-auto md:mx-0">
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
            {/* RIGHT CONTENT */}
            <div className="md:col-span-2 pl-6 sm:pl-40 lg:pl-45">
              {" "}
              <section className="mt-12 space-y-12">
                {/* Hero Intro */}
                <div>
                  <h1 className="text-3xl sm:text-xl font-semibold text-[#28535B] -mt-13">
                    Student Visa Dubai
                  </h1>

                  <h2 className="mt-3 text-xl sm:text-2xl font-semibold text-gray-700">
                    Shape Your Future with World-Class Education in Dubai
                  </h2>

                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    Dubai is rapidly becoming a global education hub for
                    students who seek international exposure, real-world skills,
                    and career-driven education, along with a degree. It
                    currently contains a number of branch campuses from the top
                    universities that can provide you with world-class academics
                    and internationally recognized qualifications.
                  </p>
                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    Studying in such a country becomes simpler when it comes to
                    numerous study options, easy visa processing, and a high
                    visa acceptance rate. No matter whether you wish to pursue
                    an undergraduate or a postgraduate degree, Dubai offers
                    direct and practical paths for studying international
                    education.
                  </p>
                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    If you want to study in this advanced country, then now is
                    the right time to take the next step toward your
                    international education. So, obtain a student visa for Dubai
                    with a stress-free process from us.
                  </p>
                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    At Growmore Immigration, we take pride in saying that we
                    provide personalised student visa services throughout all
                    stages of the visa-processing procedure. From your initial
                    consultation to the day your visa is approved, our only
                    intention is to keep your Dubai study endeavours smooth.
                  </p>
                </div>

                {/* Why Dubai Section */}
                <div>
                  <h2 className="text-2xl sm:text-2xl font-semibold text-[#28535B]">
                    What Makes Dubai a Top Education Destination
                  </h2>

                  <ul className="list-disc pl-6 mt-6 space-y-3 text-[#727272] text-sm sm:text-base">
                    <li>
                      <strong>Study at Global Campuses:</strong> BDubai hosts
                      international branch campuses of many leading universities
                      from the UK, the US, and Australia, including the
                      University of Birmingham, Heriot-Watt, Murdoch University,
                      etc.
                    </li>

                    <li>
                      <strong>Tax-Free Career Opportunities:</strong> Pursuing
                      your degree in Dubai gives you an opportunity to access a
                      powerful job market, an opportunity for post-study &
                      during-study work options, and tax-free income.
                    </li>

                    <li>
                      <strong>Affordable Education & Cost of Living:</strong> In
                      comparison to key Western study destinations, Dubai
                      provides you with a cheaper education and, subsequently, a
                      more affordable living experience.
                    </li>

                    <li>
                      <strong>Safe and Student-Focused:</strong> On an
                      international basis, Dubai is frequently cited as one of
                      the safest cities in the world, and has modern structures,
                      quality healthcare facilities, and welcoming locals who
                      will support you in experiencing an immediate life change
                      to studying abroad.
                    </li>

                    <li>
                      <strong>Flexible Visa & Residency Regulations:</strong>{" "}
                      Dubai’s student visa offers flexibility and allows
                      students to continue staying in the country after
                      graduation if they secure employment.
                    </li>

                    <li>
                      <strong>Opportunity to Bring Your Family:</strong> Here,
                      you do not have to leave your family behind, as a student,
                      you can also bring your spouse and kids by applying for
                      residence visas for them.
                    </li>

                    <li>
                      <strong>Indian Universities in Dubai:</strong> Indian
                      students who want familiarity and quality education can
                      study in Dubai in top Indian institutions such as BITS
                      Pilani, Amity University, and Manipal Academy of Higher
                      Education (MAHE).
                    </li>

                    <li>
                      <strong>Multiple Intakes:</strong> In Dubai, intakes
                      happen multiple times throughout the whole year, mainly in
                      January, May, June, July, and September months which
                      provides students with the ability to plan their admission
                      timeframe as per their convenience.
                    </li>
                  </ul>
                </div>

                {/* Popular Courses */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                    Discover the Best Courses to Study in Dubai
                  </h2>
                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    The highly ranked universities in Dubai have a huge range of
                    academic programs that are proactively designed for the
                    current job market. All of these courses open doors for
                    diverse industries and prepare you to succeed in your
                    preferred field.<b>Here are some popular sectors:</b>
                  </p>
                  <ul className="list-disc pl-6 mt-6 space-y-2 text-[#727272] text-sm sm:text-base">
                    <li>Business & Entrepreneurship</li>
                    <li>Media & Communication</li>
                    <li>Artificial Intelligence</li>
                    <li>Hospitality & Event Management</li>
                    <li>Architecture</li>
                  </ul>
                </div>

                {/* Document Checklist */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                    Essential Document Checklist for Dubai Student Visa
                  </h2>
                  <p className="mt-4 text-[#727272] text-sm sm:text-base text-justify leading-relaxed">
                    It is crucial to prepare and upload the required documents
                    properly for the Dubai student visa. So, gather the below
                    given complete checklist of documents at the time of
                    applying for your student visa to Dubai:
                  </p>
                  <ul className="list-disc pl-6 mt-6 space-y-2 text-[#727272] text-sm sm:text-base">
                    <li>Valid Passport (6+ months)</li>
                    <li>Passport-size Photos</li>
                    <li>Unconditional Admission Letter</li>
                    <li>Proof of Tuition Fee Payment</li>
                    <li>Attested Academic Certificates</li>
                    <li>English Test Result / Waiver</li>
                    <li>Bonafide Certificate</li>
                    <li>Medical Insurance</li>
                    <li>Student Undertaking Form</li>
                    <li>Visa Application Form</li>
                    <li>For minors – NOC & Parent Passport Copy</li>
                  </ul>
                </div>

                {/* Educational Requirements */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                    Student Visa Requirements for Dubai
                  </h2>

                  <h3 className="mt-6 font-semibold text-[#28535B]">
                    Educational Requirements
                  </h3>
                  <h4 className="mt-6 font-semibold text-[#28535B]">
                    Here is the educational requirement that one should fulfil:
                  </h4>
                  <ul className="list-disc pl-6 mt-4 space-y-4 text-[#727272] text-sm sm:text-base">
                    <li>
                      <strong>Undergraduate (UG):</strong> If you want to pursue
                      an undergraduate program, then you must have a minimum of
                      55% in class 12 (in any stream) and also fulfill one
                      English language requirements. (A minimum IELTS band score
                      of 5.5/ a PTE score of 42 or above/Year 12 English Marks
                      can be considered as a waiver)
                    </li>

                    <li>
                      <strong>Postgraduate (PG):</strong> If you want to pursue
                      a postgraduate program, then you must have a minimum of
                      50-55% in a Bachelor’s Degree and also fulfill any one
                      English language requirements. (a minimum IELTS band score
                      of 6.0/ a PTE score of 50 or above/ a Medium of
                      Instruction (MOI) letter/ by passing an Internal College
                      English Test)
                    </li>
                  </ul>
                </div>

                {/* Tuition Table */}
                <div>
                  <h3 className="text-xl font-semibold text-[#28535B]">
                    Financial Requirements
                  </h3>
                  <li>
                    <strong>Tuition Fee: </strong> Most educational institutions
                    will ask for a tuition fee deposit at the time of confirming
                    admission.
                  </li>
                  <h4 className="text-lg font-semibold text-[#28535B]">
                    It varies based on the program level. Here is the
                    approximate range for each level:
                  </h4>
                  <div className="mt-6">
                    <table className="w-full border border-gray-400 text-sm sm:text-base">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                            Program Level
                          </th>
                          <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                            Tuition (AED)
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        <tr>
                          <td className="border border-gray-400 px-6 py-3">
                            Foundation/Diploma
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            30,000
                          </td>
                        </tr>

                        <tr className="bg-gray-200">
                          <td className="border border-gray-400 px-6 py-3">
                            Undergraduate
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            45,000 – 1,00,000
                          </td>
                        </tr>

                        <tr>
                          <td className="border border-gray-400 px-6 py-3">
                            Postgraduate
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            55,000 – 1,20,000
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <li className="mt-4">
                    <strong>Living Costs: </strong> It isestimated between AED
                    2,500 and AED 4,000 per month based on lifestyle and
                    accommodation type. Means students should plan for AED
                    30,000–48,000 annually for living expenses.
                  </li>
                </div>

                {/* Visa Process Section */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                    Dubai Student Visa Process & Timeline
                  </h2>

                  <p className="mt-4 text-[#727272] text-sm sm:text-base leading-relaxed">
                    Getting a student visa should not seem confusing. By
                    following a few simple steps, you can secure your Dubai
                    student visa in a very smooth and timely manner. Here is the
                    breakdown of the full process:
                  </p>

                  <div className="mt-8 space-y-6 text-[#727272] text-sm sm:text-base leading-relaxed">
                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 1: Secure University Admission
                      </p>
                      <p>
                        Apply to your preferred university in Dubai and obtain a
                        conditional or unconditional offer letter.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 2: Meet Conditions and Pay Initial Deposit
                      </p>
                      <p>
                        Submit the required documents to fulfill any conditions
                        mentioned in your offer and pay the initial tuition
                        deposit as requested by the institution.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 3: Pay Visa Fees & Initiate Entry Permit
                        Application
                      </p>
                      <p>
                        After confirming your admission, pay the student visa
                        application fees. The university will then initiate your
                        student entry permit process.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 4: Visa Application Lodged via GDRFA
                      </p>
                      <p>
                        Your university will submit the visa application through
                        the GDRFA (General Directorate of Residency and
                        Foreigners Affairs) on your behalf.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 5: Medical Examination & Biometrics
                      </p>
                      <p>
                        Once in Dubai (on an entry permit), you must undergo a
                        mandatory medical check-up and biometric registration as
                        per UAE immigration rules.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step 6: Receive Emirates ID & 1-Year Renewable Student
                        Visa
                      </p>
                      <p>
                        Upon successful completion of the above steps, you will
                        be issued your Emirates ID and a 1-year renewable
                        student visa.
                      </p>
                    </div>
                  </div>

                  <p className="mt-6 text-[#727272] text-lg sm:text-lg font-bold">
                    Based on the documentation and university timelines, this
                    entire visa process typically takes around 2 to 3 weeks.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-[#28535B]">
                    Visa Costs Overview
                  </h3>
                  <h4 className="text-lg font-semibold text-[#28535B]">
                    Here’s an overview of the approximate costs involved in
                    obtaining a Dubai student visa:
                  </h4>
                  <div className="mt-6">
                    <table className="w-full border border-gray-400 text-sm sm:text-base">
                      <thead>
                        <tr className="bg-gray-200">
                          <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                            Fee Component
                          </th>
                          <th className="border border-gray-400 px-6 py-3 text-left font-semibold">
                            Approx. Amount (INR)
                          </th>
                        </tr>
                      </thead>

                      <tbody className="text-gray-700">
                        <tr>
                          <td className="border border-gray-400 px-6 py-3">
                            Visa Application{" "}
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            ₹13,500 (AED 600)
                          </td>
                        </tr>

                        <tr className="bg-gray-200">
                          <td className="border border-gray-400 px-6 py-3">
                            Biometrics
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            ₹4,500 (AED 200)
                          </td>
                        </tr>

                        <tr>
                          <td className="border border-gray-400 px-6 py-3">
                            Medical Insurance
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            ₹9,000–18,000 (AED 400 – 800)
                          </td>
                        </tr>
                        <tr className="bg-gray-200">
                          <td className="border border-gray-400 px-6 py-3">
                            Visa Issuance
                          </td>
                          <td className="border border-gray-400 px-6 py-3">
                            ₹27,000 (AED 1,200){" "}
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
                {/* Why Choose Growmore */}
                <div>
                  <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                    Top Reasons to Trust Growmore Immigration for Dubai Student
                    Visa
                  </h2>

                  <p className="mt-4 text-[#727272] text-sm sm:text-base leading-relaxed">
                    At Growmore Immigration, we are always with you from start
                    to finish. Whether you want help in picking the right
                    university or getting settled in Dubai, our team ensures
                    that your entire journey remains easy and worry-free. Here
                    are the reasons why students choose us for their student
                    visa process:
                  </p>

                  <div className="mt-8 space-y-6 text-[#727272] text-sm sm:text-base leading-relaxed">
                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Direct University Tie-Ups
                      </p>
                      <p>
                        We have tie-ups with many top universities and global
                        campuses in Dubai that give you access to quality
                        education options and recognised international degrees.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Specializing in Multi-Country Student Visa Processing
                      </p>
                      <p>
                        We have expertise in student visa processing for
                        multiple top destinations, including Dubai, the UK, and
                        Australia, so you can explore several international
                        education opportunities under one roof.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        Step-by-Step Visa Support
                      </p>
                      <p>
                        You receive personalised counselling related to studying
                        in Dubai, and our experienced team guides you through
                        the entire visa process clearly and systematically.
                      </p>
                    </div>

                    <div>
                      <p className="font-semibold text-[#28535B]">
                        100% Transparent Process
                      </p>
                      <p>
                        We believe in honest pricing and complete transparency,
                        ensuring there are no hidden charges or last-minute
                        surprises.
                      </p>
                    </div>
                  </div>
                </div>
              </section>
              <Link to="/book-consultation">
                <button className="bg-[#6dc7d1] text-white mt-8 rounded-full hover:bg-black transition px-7 py-4 text-sm">
                  Book Consultation →
                </button>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default StudentDubai;
