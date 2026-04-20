import React, { useState } from "react";
import VisaStep from "../Components/VisaStep";
import AgeStep from "../Components/AgeStep";
import EnglishStep from "../Components/EnglishStep";
import OverseasStep from "../Components/OverseasStep";
import AustralianStep from "../Components/AustralianStep";
import EducationStep from "../Components/EducationStep";
import SpecialEduStep from "../Components/SpecialEduStep";
import AustralianEduStep from "../Components/AustralianEduStep";
import Credit from "../Components/Credit";
import PartnerQualificationStep from "../Components/PartnerQualificationStep";
import ProfessionalStep from "../Components/ProfessionalStep";
import FinalResult from "../Components/FinalResult";
import ScorePanel from "../Components/ScorePanel";
import { Helmet } from "react-helmet-async";

export default function PointsCalculator() {
    const url = "https://www.growmore.one/points-calculator";

  /* ---------------- STEP CONTROLLER ---------------- */ const [
    step,
    setStep,
  ] = useState(1);
  /* ---------------- SCORE STATE ---------------- */ const [
    scores,
    setScores,
  ] = useState({
    visa: 0,
    age: 0,
    english: 0,
    overseas: 0,
    australian: 0,
    education: 0,
    australianEdu: 0,
    specialEdu: 0,
    community: 0,
    partnerQualification: 0,
    professional: 0,
  });
  /* ---------------- UPDATE SCORE SAFELY ---------------- */ const updateScore =
    (key, value) => {
      setScores((prev) => ({ ...prev, [key]: value }));
    };
  /* ---------------- NAVIGATION ---------------- */ const nextStep = () =>
    setStep((prev) => prev + 1);
  const prevStep = () => setStep((prev) => prev - 1);
  /* ⭐ RESTART CALCULATOR */ const restartCalculator = () => {
    setStep(1);
    setScores({
      visa: 0,
      age: 0,
      english: 0,
      overseas: 0,
      australian: 0,
      education: 0,
      australianEdu: 0,
      specialEdu: 0,
      community: 0,
      partnerQualification: 0,
      professional: 0,
    });
  };
  /* ---------------- TOTAL POINTS ---------------- */ const totalScore =
    Object.values(scores).reduce((sum, val) => sum + (val || 0), 0);
  return (
    <>
      <Helmet>
                <title>Skilled Visa (PR) Points Test Calculator | GrowMore Immigration</title>
        
                <meta
                  name="description"
                  content="Use Growmore Immigration's Points Test Calculator to determine your eligibility for an Australian skilled permanent residence visa. Determine your score right away and look into your migration choices."
                />
        
                {/* ✅ Canonical for homepage */}
                <link rel="canonical" href={url} />
        
                {/* ✅ OG */}
                <meta
                  property="og:title"
                  content="Skilled Visa (PR) Points Test Calculator | GrowMore Immigration"
                />
                <meta
                  property="og:description"
                  content="Use Growmore Immigration's Points Test Calculator to determine your eligibility for an Australian skilled permanent residence visa. Determine your score right away and look into your migration choices."
                />
                <meta property="og:url" content={url} />
                <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
              </Helmet>
    <div className="w-full">
      {/* ================= HEADER BANNER ================= */}
      <section className="bg-[#28535B] py-16 md:py-20">
        <div className="max-w-[1400px] mx-auto px-6 md:px-15">
          <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
            Points Calculator
          </h1>
          <p className="text-white font-semibold">
            Home &gt; Points Calculator
          </p>
        </div>
      </section>

      <div className="calculator-container">
        {/* LEFT FORM */}
        <div className="form-panel">
          {step === 1 && (
            <VisaStep updateScore={updateScore} nextStep={nextStep} />
          )}

          {step === 2 && (
            <AgeStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 3 && (
            <EnglishStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 4 && (
            <OverseasStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 5 && (
            <AustralianStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 6 && (
            <EducationStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 7 && (
            <AustralianEduStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 8 && (
            <SpecialEduStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}

          {step === 9 && (
            <Credit
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 10 && (
            <PartnerQualificationStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 11 && (
            <ProfessionalStep
              updateScore={updateScore}
              nextStep={nextStep}
              prevStep={prevStep}
            />
          )}
          {step === 12 && (
            <FinalResult
              prevStep={prevStep}
              reset={restartCalculator}
            />
          )}
        </div>

        {/* RIGHT PANEL */}
        <ScorePanel scores={scores} total={totalScore} />
      </div>

      {/* DESCRIPTION */}
      <div className="max-w-7xl mx-auto px-4 text-justify md:px-16 py-20">
        <p>
          This New Point Test method is designed to help you determine
          eligibility for skilled migration to Australia. This testing mainly
          assesses your age, work experience, educational qualifications, and
          English language ability. In this, your total points will be summed
          and compared to the number of points required to qualify for the visa.
        </p>

        <p className="mt-4">
          Understanding the New Point Test System Australia is crucial for all
          applicants in the Skilled Migration program. This method will assist
          applicants in understanding their overall status and potential areas
          to improve to enhance the overall score and increase the opportunity
          for success.
        </p>

        <p className="mt-4">
          So, use our calculator now and get a clear idea of your eligibility
          under the new system, and if you need any personalized advice, contact
          our expert Immigration Agent today!
        </p>
      </div>
    </div>
    </>
  );
}
