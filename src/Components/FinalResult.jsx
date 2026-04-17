import React from "react";
import { Link } from "react-router-dom";

export default function FinalResult({ prevStep, reset, totalScore }) {
  const score = Number(totalScore);

  // If score is not eligible, return only buttons
  if (score < 65) {
    return (
      <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-full max-w-5xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
          <button
            onClick={prevStep}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#6dc7d1] text-white font-medium hover:opacity-90 transition"
          >
            ← Previous
          </button>

          <button
            onClick={reset}
            className="w-full sm:w-auto px-8 py-3 rounded-full bg-[#2f3f50] text-white font-medium hover:opacity-90 transition"
          >
            ↻ Start Over
          </button>
        </div>
      </div>
    );
  }

  // If eligible
 return (
  <div className="bg-white rounded-3xl shadow-xl w-full max-w-5xl mx-auto flex flex-col min-h-[620px]">

    {/* Center Content */}
    <div className="flex flex-col items-center justify-center flex-1 text-center px-6 py-10">
      <h2 className="text-4xl md:text-5xl font-semibold text-green-600 mb-4">
        Congratulations!
      </h2>

      <p className="text-lg md:text-xl text-gray-600">
        Based on your responses, you meet the eligibility criteria.
      </p>

      <p className="mt-2 text-gray-500">
        <Link
          to="/contact-us"
          className="text-blue-600 font-medium hover:underline"
        >
          Contact Us
        </Link>{" "}
        to know more.
      </p>
    </div>

    {/* Bottom Buttons */}
    <div className="flex flex-col sm:flex-row justify-between items-center gap-4 p-6 ">
      <button
        onClick={prevStep}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#6dc7d1] text-white font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
      >
        ← Previous
      </button>

      <button
        onClick={reset}
        className="w-full sm:w-auto px-6 py-3 rounded-full bg-[#2f3f50] text-white font-medium hover:opacity-90 active:scale-95 transition-all duration-200"
      >
        ↻ Start Over
      </button>
    </div>
  </div>
);
}
