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
    <div className="bg-white rounded-3xl shadow-xl p-12 text-center w-full max-w-5xl h-[600px] mx-auto">
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center px-4">
        <h2 className="text-4xl md:text-5xl font-semibold text-green-600 mb-6">
          Congratulations!
        </h2>

        <p className="text-xl md:text-2xl text-gray-700 mb-10">
          <Link
            to="/contact-us"
            className="text-blue-600 font-medium hover:underline transition-all"
          >
            Contact Us
          </Link>{" "}
          to know more.
        </p>
      </div>

      <div className="flex flex-col sm:flex-row justify-between items-center gap-6 mt-12">
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
