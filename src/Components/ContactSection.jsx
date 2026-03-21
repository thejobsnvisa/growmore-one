import React from "react";
import {
  FaPhoneAlt,
  FaClock,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ContactSection = () => {
  return (
    <section className="py-14 md:py-16 px-4 md:px-6 bg-[#eff9fb]">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 md:mb-12">
          <span className="text-green-600">Stay Connected</span> with <br />
          Growmore Immigration
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10">
          {/* Australia Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center border-b pb-4 mb-6">
              Australia
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="space-y-6 md:border-r md:pr-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Requesting A Call:</p>
                    <p className="font-semibold text-[#164750]">
                      (03) 8764 3334
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">E-mail</p>
                    <p className="font-semibold text-blue-900 break-all">
                      info@growmore.one
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">WhatsApp</p>
                    <p className="font-semibold text-[#164750]">
                      (+61) 4342 02021
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Monday–Friday</p>
                    <p className="font-semibold text-[#164750]">9 am - 5 pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Saturday–Sunday</p>
                    <p className="font-semibold text-[#164750]">Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="font-semibold text-[#164750] text-sm">
                      313/101 Overton Road, Williams Landing, Victoria 3027,
                      Australia.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}

            <div className="w-full h-48 md:h-56 rounded-lg mt-6">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3149.722581616605!2d144.7450264!3d-37.86678109999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad689c0228e6b0b%3A0x3e9f44742eb30ff9!2sGrowMore%20Immigration%20Melbourne%20Australia!5e0!3m2!1sen!2sin!4v1773826957605!5m2!1sen!2sin"
                className="w-full h-full rounded-xl"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>

          {/* India Card */}
          <div className="bg-white rounded-2xl shadow-md p-6 md:p-8">
            <h3 className="text-xl md:text-2xl font-semibold text-center border-b pb-4 mb-6">
              India
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* LEFT */}
              <div className="space-y-6 md:border-r md:pr-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Requesting A Call:</p>
                    <p className="font-semibold text-[#164750]">
                      (+91) 777 787 0015
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <MdEmail />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">E-mail</p>
                    <p className="font-semibold text-blue-900 break-all">
                      info@growmore.one
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaWhatsapp />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">WhatsApp</p>
                    <p className="font-semibold text-[#164750]">
                      (+91) 9081899665
                    </p>
                  </div>
                </div>
              </div>

              {/* RIGHT */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Monday–Saturday</p>
                    <p className="font-semibold text-[#164750]">9 am - 5 pm</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaClock />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Sunday</p>
                    <p className="font-semibold text-[#164750]">Closed</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-gray-800 text-white p-3 rounded-full shrink-0">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-gray-600 text-sm">Location</p>
                    <p className="font-semibold text-[#164750] text-sm">
                      Times Square 1, 201-202, Opposite Rambag, Thaltej Rd,
                      Ahmedabad, Gujarat 380059.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <iframe
              className="w-full h-48 md:h-56 rounded-lg mt-6"
             src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.2954815159333!2d72.5020279!3d23.0496263!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e9b5d7495b9b1%3A0x9e91b61670cd0fc8!2sGrowMore%20Immigration!5e0!3m2!1sen!2sin!4v1774003877822!5m2!1sen!2sin%22"
              title="India Location"
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
