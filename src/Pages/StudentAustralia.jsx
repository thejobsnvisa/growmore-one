import React from "react";
import { IoIosArrowDroprightCircle } from "react-icons/io";
import { Link } from "react-router-dom";

const StudentAustralia = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="bg-[#28535B] py-12 sm:py-16">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-white">
Student Visa Australia
          </h1>

          <p className="text-white font-medium mt-3 text-sm sm:text-base">
            Home &gt; <span className=" cursor-pointer">Student Sponsored</span>{" "}
            &gt;{" "}
            <span className=" cursor-pointer">Student Visa Australia
</span>
          </p>
        </div>
      </section>

      {/* Main Section */}
      <section className="py-12 sm:py-16 bg-white">
        <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">
          {/* Left Column */}
           <div className="bg-[#eff9fb] p-6 rounded-3xl md:col-span-1 w-full sm:h-68 lg:h-60 md:w-[280px] lg:w-[480px] mx-auto md:mx-0">

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
          <div className="md:col-span-2 md:pl-12 lg:pl-20">
            <div>
             <h1 className="text-3xl sm:text-xl font-semibold text-[#28535B] -mt-3">
                  Student Visa Australia
                </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-[#28535B] mt-3 mb-2">
                Transform Your Dreams into Reality With Australian Education
              </h2>
            </div>

            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              Dreaming of an international education that leads to real success?
              At Growmore Immigration, we make your study in Australia
              completely perfect by guiding you through each step of your way of
              student visa process.
            </p>

            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              Australia is one of the perfect study destinations to begin your
              future with designated, ranked universities, industry-driven
              courses, and a relatively simple path to permanent residency. It
              really offers an amazing potential, so you can unlock a world of
              opportunities and turn your education into a lifetime of success
              by getting the best visa process from us.
            </p>

            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              This place will not only leave you with a degree from a
              world-renowned university, but you will also be equipped with more
              opportunities to brighten your future. Australia is a country
              where one can immerse oneself in fresh culture and gain many
              valuable skills.
            </p>
            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              Going to Australia means you will attain a quality education from
              internationally acknowledged universities such as The University
              of Melbourne, The University of Sydney, and The Australian
              National University (ANU) while also getting good job
              opportunities and a perfect standard of living.
            </p>
            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              Melbourne, Sydney, Brisbane, Canberra & Adelaide are an excellent
              mix when it comes to offering superb education, rich culture, and
              meaningful professional status. A mixture of these facets makes
              Australia the best place to get your dreams.
            </p>
            <p className="text-gray-600 mt-3 text-justify leading-relaxed">
              Studying in Australia is closer and easier than you think. All you
              need is the right direction and support from a credible
              organization such as Growmore Immigration. Together, we can
              reshape your future in one of the world’s most exciting and
              rewarding educational destinations. We will give you the assurance
              that you can gain your Australia student visa seamlessly and with
              the right information in hand.
            </p>
            {/* WHY AUSTRALIA */}
            <div>
              <h3 className="text-xl sm:text-2xl font-semibold text-[#28535B]">
                Why Australia is the Smart Choice
              </h3>

              <ul className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                <li>
                  <strong>World-Class Universities:</strong> 7 Australian
                  universities are ranked in the QS Global Top 100, including
                  Melbourne, Sydney, and ANU.
                </li>

                <li>
                  <strong>Employability-Focused Courses:</strong> Many programs
                  include internships and placement support to help you secure a
                  job after completing your studies.
                </li>

                <li>
                  <strong>PR-Oriented Courses:</strong> Courses in Nursing, IT,
                  Social Work, Trades, and Teaching enhance your chances of
                  obtaining permanent residency.
                </li>

                <li>
                  <strong>Post-Study Work Visa (485):</strong> Stay in Australia
                  for up to 6 years depending on your course and study location.
                </li>

                <li>
                  <strong>Spouse Can Work Full-Time:</strong> If you pursue a
                  Master’s degree, your spouse can receive full-time work
                  rights.
                </li>

                <li>
                  <strong>Safe & Multicultural Society:</strong> Over 30% of
                  Australia’s population is born overseas, making it one of the
                  most diverse countries.
                </li>

                <li>
                  <strong>Earn While You Study:</strong> International students
                  can work part-time with a minimum wage of approximately AUD
                  $24.10 per hour.
                </li>

                <li>
                  <strong>Available Scholarships:</strong> Universities offer
                  scholarships ranging from 10% to 50% based on academic merit.
                </li>
              </ul>
            </div>

            <section className="mt-12 space-y-10">
              {/* Courses Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Courses You Can Study in Australia
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  Whatever you are interested in, whether it is business growth,
                  research, or supporting advancements in health care, Australia
                  has it all. Here, a wide range of courses is available across
                  multiple fields that provide you with valuable skills and
                  experience for a global career.
                </p>

                <h3 className="mt-6 font-semibold text-[#28535B]">
                  Some of The Most Popular Courses Include:
                </h3>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>Business & Management</li>
                  <li>Information Technology</li>
                  <li>Nursing & Healthcare</li>
                  <li>Engineering & Construction</li>
                  <li>Hospitality & Tourism</li>
                  <li>Teaching & Life Sciences</li>
                </ul>
              </div>

              {/* Important Documents Checklist */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Important Documents Checklist
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  It is important to make some documents ready before you submit
                  your application for the Australia student visa and embark on
                  your new life studying. When you present each required
                  document correctly, you can easily complete the visa process
                  without any types of delays.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>Valid Passport (Front & Back Pages)</li>
                  <li>Academic Transcripts (10th, 12th, Diploma/Degree)</li>
                  <li>IELTS / PTE Scorecard</li>
                  <li>SOP / GTE Statement</li>
                  <li>Work Experience Documents (if applicable)</li>
                  <li>Proof of Funds – Bank statements / Loan letter</li>
                  <li>Income Documents – ITR, salary slips, business proof</li>
                </ul>
              </div>

              {/* Academic Requirements */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Academic & English Language Requirements
                </h2>

                <ul className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>For Undergraduate (UG) Programs:</strong> Minimum
                    60% in 12th grade and overall IELTS score of 6.0 (no band
                    less than 5.5).
                  </li>

                  <li>
                    <strong>For Postgraduate (PG) Programs:</strong> Minimum 60%
                    in Bachelor’s degree and overall IELTS score of 6.5 (no band
                    less than 6.0).
                  </li>
                </ul>
              </div>

              {/* Financial Requirements */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Financial Requirements
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  To be eligible to study in Australia, you must provide
                  evidence of sufficient funds to cover tuition, living
                  expenses, and other related costs.
                </p>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>AUD 29,710 for living expenses (12 months)</li>
                  <li>1 Year Tuition Fees as per university offer</li>
                  <li>OSHC (Overseas Student Health Cover)</li>
                  <li>Travel Expenses – Approx. AUD 2,000</li>
                </ul>

                <h3 className="mt-6 font-semibold text-[#28535B]">
                  Additional Funds for Dependents:
                </h3>

                <ul className="list-disc pl-6 mt-4 space-y-2 text-gray-600 text-sm sm:text-base">
                  <li>For Spouse: AUD 10,394</li>
                  <li>For Per Child: AUD 4,449</li>
                </ul>
              </div>

              {/* Accepted & Not Accepted */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Accepted & Not Accepted Financial Evidence
                </h2>

                <div className="mt-6">
                  <h3 className="font-semibold text-[#28535B]">
                    Accepted Documents:
                  </h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>Education loan sanction letter (RBI-approved bank)</li>
                    <li>Personal/Parents’ Bank Savings</li>
                  </ul>
                </div>

                <div className="mt-6">
                  <h3 className="font-semibold text-gray-600 ">
                    Not Accepted as Financial Evidence:
                  </h3>
                  <ul className="list-disc pl-6 mt-3 space-y-2 text-gray-600 text-sm sm:text-base">
                    <li>Kisan Vikas Patra (KVP)</li>
                    <li>Life Insurance Policies</li>
                    <li>Loan Against Fixed Deposits (FDs)</li>
                  </ul>
                </div>
              </div>
            </section>
            <section className="mt-12 space-y-12">
              {/* Stepwise Process Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Stepwise Process for Successfully Navigating the Australian
                  Student Visa Process
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  A student visa application for studying in Australia is
                  simple, but following the correct steps is important.
                  Understanding the steps below will help make your overall visa
                  journey easier and organized.
                </p>

                <div className="mt-8 space-y-6 text-gray-600 text-sm sm:text-base">
                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 1: Application Submission
                    </h3>
                    <p className="mt-2">
                      Submit all supporting documents requested by your chosen
                      university, such as transcripts, test scores, and
                      Statement of Purpose (SOP).
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 2: Receive Offer Letter
                    </h3>
                    <p className="mt-2">
                      Once your application is evaluated, the university will
                      issue an offer letter confirming your acceptance.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 3: Complete GSR Form and Get Approval
                    </h3>
                    <p className="mt-2">
                      Complete the Genuine Student Review (GSR) form and submit
                      required financial documents (if applicable) for approval.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 4: Receive Final Offer Letter
                    </h3>
                    <p className="mt-2">
                      After GSR approval, your university will issue the final
                      offer letter.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 5: Payment of Tuition Fees
                    </h3>
                    <p className="mt-2">
                      Pay the tuition fees as instructed in the offer letter to
                      confirm your seat.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 6: Get Confirmation of Enrolment (CoE)
                    </h3>
                    <p className="mt-2">
                      Receive your Confirmation of Enrolment (CoE), which is
                      required when applying for your visa.
                    </p>
                  </div>

                  <div>
                    <h3 className="font-semibold text-[#28535B]">
                      Step 7: Apply for Student Visa (Subclass 500)
                    </h3>
                    <p className="mt-2">
                      Finally, apply online for your Student Visa (Subclass 500)
                      using your CoE and required documents.
                    </p>
                  </div>
                </div>
              </div>

              {/* Why Choose Growmore Section */}
              <div>
                <h2 className="text-2xl sm:text-3xl font-semibold text-[#28535B]">
                  Why Choose Growmore Immigration for an Australian Student
                  Visa?
                </h2>

                <p className="mt-4 text-gray-600 text-sm sm:text-base leading-relaxed">
                  At Growmore Immigration, we understand the unique requirements
                  of each student and help make your Australian study journey
                  smooth and stress-free.
                </p>

                <ul className="list-disc pl-6 mt-6 space-y-4 text-gray-600 text-sm sm:text-base">
                  <li>
                    <strong>MARA-Registered Migration Guidance:</strong>{" "}
                    Licensed and reliable advice ensuring full compliance with
                    Australian visa requirements.
                  </li>

                  <li>
                    <strong>Expert SOP & GTE Writing:</strong> Professionally
                    crafted Statements of Purpose (SOP) and GTE documents to
                    increase visa success chances.
                  </li>

                  <li>
                    <strong>100% Transparent Process:</strong> Complete stepwise
                    process with no hidden charges and clear pricing structure.
                  </li>

                  <li>
                    <strong>Onshore Support After Arrival:</strong> Assistance
                    with airport pickup, accommodation support, and student
                    community connections.
                  </li>

                  <li>
                    <strong>Multi-Country Expertise:</strong> Expert guidance
                    for Australia, UK, Dubai, and other study destinations under
                    one roof.
                  </li>
                </ul>
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
  );
};

export default StudentAustralia;
