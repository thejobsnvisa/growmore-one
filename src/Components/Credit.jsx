import React, { useState } from "react";
import StepHeader from "./StepHeader";

export default function Credit({ updateScore, nextStep, prevStep }) {
  const [points, setPoints] = useState(0);
  const [selected, setSelected] = useState(null);

  // FIXED KEY (community)
  const selectCommunity = (value, pts) => {
    setSelected(value);
    setPoints(pts);
    updateScore("community", pts);
  };

  return (
    <div className="card">

      <StepHeader title="Accredited Community Language" points={points} />

      {/* QUESTION */}
      <div className="question">
        <p className="mb-3 font-medium">
          Do you hold any one of the following?
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>Accreditation at the paraprofessional level or above</li>
          <li>Certification at the certified provisional level or above</li>
          <li>A community language credential</li>
        </ul>
      </div>

      {/* YES */}
      <label className={`option ${selected === "5" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="community"
          checked={selected === "10"}
          onChange={() => selectCommunity("10", 10)}
        />
        <span>Yes</span>
      </label>

      {/* NO */}
      <label className={`option ${selected === "0" ? "active" : ""}`}>
        <input
          type="CHECKBOX"
          name="community"
          checked={selected === "0"}
          onChange={() => selectCommunity("0", 0)}
        />
        <span>No</span>
      </label>

      {/* BUTTONS */}
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "125px",
        }}
      >
        <button className="next-btn" onClick={prevStep}>
          ← Previous
        </button>

        <button
          className="next-btn"
          onClick={nextStep}        >
          Next →
        </button>
      </div>
    </div>
  );
}