import React, { useRef, useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";

export default function CommentSection() {
  const recaptchaRef = useRef(null);
  const [token, setToken] = useState(null);

  // 1. Added state for form data
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    message: "",
  });

  // 2. Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validation
    if (!token) {
      alert("Please verify that you are not a robot.");
      return;
    }

    const payload = {
      ...formData,
      captchaToken: token,
    };

    try {
      // 3. Mock API Call
      console.log("Sending data to server:", payload);

      // Example:
      // const response = await fetch('/api/comments', {
      //    method: 'POST',
      //    body: JSON.stringify(payload)
      // });

      alert("Comment posted successfully!");

      // 4. Reset Form & reCAPTCHA
      setFormData({ fullName: "", phone: "", email: "", message: "" });
      setToken(null);
      recaptchaRef.current.reset();
    } catch (error) {
      console.error("Submission error:", error);
      alert("Something went wrong. Please try again.");
    }
  };

  const pageUrl = encodeURIComponent(
    typeof window !== "undefined" ? window.location.href : "",
  );
  const text = encodeURIComponent("Check this out!");

  const shareLinks = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${pageUrl}`,
    whatsapp: `https://api.whatsapp.com/send?text=${text}%20${pageUrl}`,
    telegram: `https://t.me/share/url?url=${pageUrl}&text=${text}`,
    pinterest: `https://pinterest.com/pin/create/button/?url=${pageUrl}`,
  };

  return (
    <div className="min-h-screen bg-white flex items-center justify-start px-4">
      <div className="w-full max-w-5xl">
        <span className="flex flex-cols border-b border-gray-400"></span>

        {/* Social Icons */}
        <div className="flex justify-end mb-2 mt-4 text-gray-700 text-2xl">
          <div className="flex gap-6">
            <div className="flex justify-end mb-2  mt-4 text-gray-700 text-2xl">
              <div className="flex gap-6">
                <a
                  href={shareLinks.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-600 "
                >
                  <i className="fab fa-facebook-f"></i>
                </a>

                <a
                  href={shareLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-blue-700"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>

                <a
                  href={shareLinks.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-green-500"
                >
                  <i className="fab fa-whatsapp"></i>
                </a>

                <a
                  href={shareLinks.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-sky-500"
                >
                  <i className="fab fa-telegram-plane"></i>
                </a>

                <a
                  href={shareLinks.pinterest}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-red-500"
                >
                  <i className="fab fa-pinterest-p"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Card */}
        <div className="w-full lg:w-2/3 bg-[#E6EBDD] rounded-2xl p-6 sm:p-8 shadow-sm">
          <h2 className="text-2xl sm:text-3xl font-semibold text-[#1E3A3A] mb-2">
            Add a comment
          </h2>
          <p className="text-sm text-gray-600 mb-6 mt-4">
            By using this form you agree with the message storage...
          </p>

          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="text-sm text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName" // Added name attribute
                  value={formData.fullName} // Controlled component
                  onChange={handleChange}
                  placeholder="Enter Full Name"
                  required
                  className="mt-1 w-full px-4 py-2 rounded-full border border-gray-100 bg-white"
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Phone</label>
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="Enter Phone Number"
                  className="mt-1 w-full px-4 py-2 rounded-full border border-gray-100 bg-white "
                />
              </div>

              <div>
                <label className="text-sm text-gray-700">Email ID</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter Email ID"
                  required
                  className="mt-1 w-full px-4 py-2 rounded-full border border-gray-100 bg-white"
                />
              </div>
            </div>

            <div>
              <label className="text-sm text-gray-700">Message</label>
              <textarea
                rows="4"
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Enter your message here..."
                required
                className="mt-1 w-full px-4 py-3 rounded-xl border border-gray-100 bg-white"
              ></textarea>
            </div>

            <div className="mt-2">
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lcb_HEsAAAAAJESdQwpfYltspCpspxJPbCyM58Z"
                onChange={(val) => setToken(val)}
                onExpired={() => setToken(null)} // Handle expiration
              />
            </div>

            <button
              type="submit"
              className="mt-4 bg-[#2E2E2E] text-white px-6 py-3 rounded-full hover:bg-black transition"
            >
              Post Comment
            </button>
          </form>
        </div>
        <span className="flex flex-cols border-b border-gray-400 mt-4"></span>
      </div>
    </div>
  );
}
