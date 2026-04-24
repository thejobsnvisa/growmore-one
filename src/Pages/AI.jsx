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
          content="Learn how Growmore Immigration uses AI responsibly, safeguards your data, and ensures all migration advice is reviewed by a Registered Migration Agent."
        />

        {/* Canonical */}
        <link rel="canonical" href={url} />

        {/* Robots */}
        <meta name="robots" content="index, follow" />

        {/* Open Graph */}
        <meta
          property="og:title"
          content="Artificial Intelligence Use Policy - GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Learn how GrowMore Immigration uses AI responsibly, safeguards your data, and ensures all migration advice is reviewed by a Registered Migration Agent."
        />
        <meta property="og:url" content={url} />
        <meta property="og:type" content="website" />
        <meta property="og:image" content="https://www.growmore.one/logo.jpg" />
      </Helmet>

      <div className="bg-white">
        {/* HERO */}
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

        {/* CONTENT */}
        <section className="max-w-[1400px] mx-auto px-6 md:px-15 py-12">
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              Growmore Immigration is committed to the ethical, responsible, and
              transparent use of Artificial Intelligence (AI). This Policy
              outlines how AI tools are used within the business and applies to
              all staff, contractors, and representatives. It operates alongside
              the Privacy Policy, Terms of Service, and the Migration Agents
              Code of Conduct.
            </p>

            {/* Definition */}
            <div>
              <h3 className="font-semibold mb-2">
                Definition of Artificial Intelligence
              </h3>
              <p>
                Artificial Intelligence (AI) refers to machine-based systems
                that generate outputs such as content, recommendations,
                summaries, or predictions based on input data.
              </p>
              <p className="mt-2">
                While AI can improve efficiency, it may also produce inaccurate
                or incomplete outputs. All AI-generated content must be reviewed
                by a qualified human before being shared with clients.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold mb-2">
                Legal Framework & Compliance
              </h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Migration Act 1958 (Cth)</li>
                <li>Migration Agents Code of Conduct</li>
                <li>Privacy Act 1988 (Cth)</li>
                <li>Australian Privacy Principles (APPs)</li>
                <li>Australia’s AI Ethics Principles</li>
                <li>Policy for the Responsible Use of AI in Government</li>
              </ul>

              <p className="mt-3">
                <b>Important Legal Notice:</b> Only Registered Migration Agents
                or authorised professionals may provide immigration assistance.
                AI cannot independently provide lawful advice.
              </p>

              <a
                href="https://www.mara.gov.au/about-us/use-of-artificial-intelligence-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                OMARA Guidance
              </a>
            </div>

            {/* Permitted */}
            <div>
              <h3 className="font-semibold mb-2">Permitted Use of AI</h3>
              <p>
                AI is used in a limited and controlled manner to support
                operations. It does not constitute migration advice unless
                reviewed by a Registered Migration Agent.
              </p>

              <ul className="list-disc pl-6 space-y-2 mt-2">
                <li>
                  <b>Administrative:</b> Drafting, formatting, workflows
                </li>
                <li>
                  <b>Client Communication:</b> FAQs and general guidance
                </li>
                <li>
                  <b>Marketing:</b> Blogs, social media, awareness content
                </li>
                <li>
                  <b>Internal Tools:</b> CRM, analytics, automation
                </li>
              </ul>
            </div>

            {/* Prohibited */}
            <div>
              <h3 className="font-semibold mb-2">Prohibited AI Practices</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Providing advice without human review</li>
                <li>Making visa or legal decisions</li>
                <li>Automated eligibility assessments</li>
                <li>Replacing Registered Migration Agents</li>
                <li>Handling sensitive data in unapproved systems</li>
              </ul>
            </div>

            {/* RMA */}
            <div>
              <h3 className="font-semibold mb-2">
                RMA Responsibilities & Oversight
              </h3>
              <p>
                Registered Migration Agents retain full responsibility for all
                advice. All outputs are reviewed and approved by a qualified
                professional before use.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="font-semibold mb-2">
                Client Consent & Data Protection
              </h3>
              <p>
                Client consent is obtained before using AI with personal data.
                All data handling complies with the Privacy Act and internal
                protocols.
              </p>

              <a
                href="https://www.growmore.one/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline mt-2 inline-block"
              >
                View Privacy Policy
              </a>
            </div>

            {/* Limitations */}
            <div>
              <h3 className="font-semibold mb-2">Limitations & Governance</h3>
              <p>
                AI outputs may be inaccurate or outdated. AI is used strictly as
                a support tool with strong internal governance and risk
                monitoring.
              </p>
            </div>

            {/* Staff */}
            <div>
              <h3 className="font-semibold mb-2">Staff Responsibilities</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>Use AI only for approved purposes</li>
                <li>Maintain confidentiality</li>
                <li>Verify all outputs</li>
                <li>Avoid reliance for migration advice</li>
              </ul>
            </div>

            {/* Updates */}
            <div>
              <h3 className="font-semibold mb-2">Policy Updates</h3>
              <p>
                This policy is reviewed annually and updated based on legal and
                operational changes.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-16">
              <h3 className="font-semibold mb-2">Contact</h3>
              <p>
                Growmore Immigration <br />
                Email: <span className="text-blue-600">
                  info@growmore.one
                </span>{" "}
                <br />
                Website: growmore.one
              </p>

              <p className="mt-4 text-sm">
                <b>Disclaimer:</b> AI tools are for support only and do not
                constitute migration advice unless reviewed by a Registered
                Migration Agent.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI;
