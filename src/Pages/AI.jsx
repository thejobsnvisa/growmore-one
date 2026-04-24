import React from "react";
import { Helmet } from "react-helmet-async";

const AI = () => {
  const url = "https://www.growmore.one/artificial-intelligence-use-policy";

  return (
    <>
      <Helmet>
        <title>Artificial Intelligence Use Policy - GrowMore Immigration</title>

        <meta
          name="description"
          content="GrowMore Immigration’s Artificial Intelligence Use Policy to understand how we utilize AI in our services and the implications for our clients."
        />

        {/* ✅ Canonical for homepage */}
        <link rel="canonical" href={url} />

        {/* ✅ OG */}
        <meta
          property="og:title"
          content="Artificial Intelligence Use Policy - GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="GrowMore Immigration’s Artificial Intelligence Use Policy to understand how we utilize AI in our services and the implications for our clients."
        />
        <meta property="og:url" content={url} />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>
      <div className="bg-white">
        {/* ================= HERO SECTION ================= */}
        <section className="bg-[#28535B] py-12 md:py-16">
          <div className="max-w-[1400px] mx-auto px-6 md:px-15">
            <h1 className="text-3xl md:text-5xl font-semibold text-white mb-3">
              Artificial Intelligence Use Policy
            </h1>
            <p className="text-white font-semibold">
              Home &gt; Artificial Intelligence Use Policy
            </p>
          </div>
        </section>

        {/* ================= MAIN CONTENT ================= */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-15 py-12">
          {/* Title */}
          <h2 className="text-[28px] font-bold text-[#042325] mt-[80px] mb-6">
            Artificial Intelligence Use Policy
          </h2>

          <p className="text-[#042325] font-medium text-[16px] mb-4">
            Growmore & Associates Pty Ltd — Trading as Growmore Immigration{" "}
            <br />
            Effective: 1 January 2026
          </p>

          {/* Section 1 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">1. Purpose & Commitment</p>
            <p>
              Growmore Immigration is committed to the ethical, responsible, and
              transparent use of Artificial Intelligence (AI). This Policy sets
              out how AI tools are used within our business and applies to all
              staff, contractors, and representatives. It operates alongside our
              Privacy Policy, Terms of Service, and the Migration Agents Code of
              Conduct.
            </p>
          </div>

          {/* Section 2 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              2. What Is Artificial Intelligence?
            </p>
            <p>
              AI refers to machine-based systems that generate outputs such as
              content, recommendations, summaries, or predictions based on input
              data. While AI can improve efficiency, it may also produce
              inaccurate or incomplete outputs. All AI-generated content must be
              reviewed by a qualified human before being relied upon or shared
              with clients.
            </p>
          </div>

          {/* Section 3 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              3. Legal Framework & Compliance
            </p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Migration Act 1958 (Cth)</li>
              <li>Migration Agents Code of Conduct</li>
              <li>Privacy Act 1988 (Cth)</li>
              <li>Australian Privacy Principles (APPs)</li>
              <li>Australia's AI Ethics Principles</li>
              <li>Policy for the Responsible Use of AI in Government</li>
            </ul>

            <p className="mt-3">
              Under section 280 of the Migration Act, only authorised
              professionals may provide immigration assistance. AI tools cannot
              independently provide lawful immigration advice.
            </p>

            <p className="mt-2">
              OMARA guidance:{" "}
              <a
                href="https://www.mara.gov.au/about-us/use-of-artificial-intelligence-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View here
              </a>
            </p>
          </div>

          {/* Section 4 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">4. Permitted Uses of AI</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>
                <span className="font-semibold">Administrative Support:</span>{" "}
                Document drafting, workflow assistance, summarisation.
              </li>
              <li>
                <span className="font-semibold">Client Communication:</span>{" "}
                General FAQs and chatbot interactions (non-advisory).
              </li>
              <li>
                <span className="font-semibold">Marketing:</span> Blogs, social
                media, educational content.
              </li>
              <li>
                <span className="font-semibold">Internal Tools:</span>{" "}
                Analytics, CRM, workflow automation.
              </li>
            </ul>
          </div>

          {/* Section 5 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">5. Prohibited Uses of AI</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Providing migration advice without human review</li>
              <li>Making visa decisions</li>
              <li>Determining eligibility automatically</li>
              <li>Replacing Registered Migration Agents</li>
              <li>Handling sensitive data in unapproved systems</li>
            </ul>
          </div>

          {/* Section 6 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              6. Registered Migration Agent Responsibilities
            </p>
            <p>
              RMAs retain full legal responsibility for all advice, including
              reviewing AI-generated content and ensuring compliance with
              applicable laws.
            </p>
          </div>

          {/* Section 7 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              7. Client Consent & Personal Information
            </p>
            <p>
              We obtain consent before using AI with personal data and ensure
              compliance with privacy laws.
            </p>

            <p className="mt-2">
              Privacy Policy:{" "}
              <a
                href="https://www.growmore.one/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600"
              >
                View here
              </a>
            </p>
          </div>

          {/* Section 8 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              8. Confidentiality & Data Protection
            </p>
            <p>
              Client data is handled securely with strict confidentiality,
              controlled access, and careful evaluation of AI tools.
            </p>
          </div>

          {/* Section 9 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">9. Limitations of AI</p>
            <p>
              AI outputs may be inaccurate or incomplete. Migration advice is
              never based solely on AI.
            </p>
          </div>

          {/* Section 10 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">10. Human Oversight</p>
            <p>
              All AI outputs are reviewed by qualified professionals, with final
              decisions made by humans.
            </p>
          </div>

          {/* Section 11 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">11. AI Governance</p>
            <p>
              We apply internal controls, risk monitoring, and align with
              government AI frameworks.
            </p>
          </div>

          {/* Section 12 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">12. Staff Responsibilities</p>

            <ul className="list-disc pl-6 space-y-2">
              <li>Use AI only for approved purposes</li>
              <li>Protect client confidentiality</li>
              <li>Verify AI-generated content</li>
              <li>Avoid reliance on AI for migration advice</li>
            </ul>
          </div>

          {/* Section 13 */}
          <div className="text-[#042325] text-[16px] mb-6 leading-relaxed">
            <p className="font-semibold mb-2">
              13. Future Use & Policy Updates
            </p>
            <p>
              This policy will be reviewed annually and updated when required.
            </p>
          </div>

          {/* Section 14 */}
          <div className="text-[#042325] text-[16px] mb-[80px] leading-relaxed">
            <p className="font-semibold mb-2">14. Contact</p>
            <p>
              Growmore Immigration <br />
              Email: <span className="text-blue-600">
                info@growmore.one
              </span>{" "}
              <br />
              Website: growmore.one
            </p>

            <p className="mt-4">
              <span className="font-semibold">Disclaimer:</span> AI tools are
              used for support purposes only and do not constitute migration
              advice unless reviewed by a Registered Migration Agent.
            </p>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI;
