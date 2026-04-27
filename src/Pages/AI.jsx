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
          content="GrowMore Immigration’s Artificial Intelligence Use Policy outlining ethical AI use, compliance, and data protection."
        />

        <link rel="canonical" href={url} />
        <meta name="robots" content="index, follow" />

        <meta
          property="og:title"
          content="Artificial Intelligence Use Policy - GrowMore Immigration"
        />
        <meta
          property="og:description"
          content="Understand how GrowMore Immigration uses AI responsibly and in compliance with Australian law."
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
        <section className="max-w-[1400px] mx-auto px-6 py-10 md:px-15 py-16">
          <div className="space-y-6 text-[15px] leading-relaxed">
            <p>
              Growmore Immigration is committed to the ethical, responsible, and
              transparent use of Artificial Intelligence (AI).
            </p>

            <p>
              This Policy outlines how AI tools are used within the business and
              applies to all staff, contractors, and representatives. It
              operates alongside the Privacy Policy, Terms of Service, and the
              Migration Agents Code of Conduct.
            </p>

            {/* Definition */}
            <div>
              <h3 className="font-semibold">
                Definition of Artificial Intelligence
              </h3>
              <p>
                Artificial Intelligence (AI) refers to machine-based systems
                that generate outputs such as content, recommendations,
                summaries, or predictions based on input data.
              </p>
              <p className="mt-2">
                While AI can improve efficiency, it may also produce inaccurate
                or incomplete outputs. All AI-generated content used in a
                professional capacity must be reviewed by a qualified human
                before it is relied upon or shared with a client.
              </p>
            </div>

            {/* Legal */}
            <div>
              <h3 className="font-semibold">Legal Framework & Compliance</h3>

              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Migration Act 1958 (Cth)</li>
                <li>Migration Agents Code of Conduct</li>
                <li>Privacy Act 1988 (Cth)</li>
                <li>Australian Privacy Principles (APPs)</li>
                <li>Australia’s AI Ethics Principles</li>
                <li>Policy for the Responsible Use of AI in Government</li>
              </ul>

              <p className="mt-3">
                <b>Important Legal Notice:</b> Under section 280 of the
                Migration Act 1958 (Cth), only Registered Migration Agents,
                Australian legal practitioners, and certain exempt persons may
                provide immigration assistance. There are no exemptions for
                AI-generated assistance. AI tools cannot independently provide
                lawful immigration assistance, and their use does not reduce or
                remove any legal obligations.
              </p>

              <p className="mt-2">OMARA Guidance:</p>

              <a
                href="https://www.mara.gov.au/about-us/use-of-artificial-intelligence-ai"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://www.mara.gov.au/about-us/use-of-artificial-intelligence-ai
              </a>
            </div>

            {/* Permitted */}
            <div>
              <h3 className="font-semibold">Permitted Use of AI</h3>

              <p>
                We use AI in a limited and controlled way to support our
                operations and improve efficiency. However, any content
                generated through AI does not constitute migration advice unless
                it has been reviewed and approved by a Registered Migration
                Agent.
              </p>

              <p className="mt-2">
                AI may be used for administrative and operational support, such
                as drafting and formatting documents, assisting with workflows,
                and organising or summarising internal information. This helps
                facilitate routine processes but does not replace human
                oversight.
              </p>

              <p className="mt-2">
                It is also used to support client communication in a general,
                non-advisory capacity. This includes responding to basic
                informational queries, creating FAQ content, and enabling
                preliminary chatbot-style interactions. These responses are
                intended to provide general guidance only and should not be
                considered personalised migration advice.
              </p>

              <p className="mt-2">
                For marketing and educational purposes, AI may assist in
                creating blogs, social media posts, website content, and general
                immigration awareness materials. This content is designed to
                inform and educate, not to provide case-specific
                recommendations.
              </p>

              <p className="mt-2">
                Additionally, AI supports internal business tools such as
                analytics, service improvement initiatives, CRM systems, and
                workflow automation. These uses are focused on enhancing
                operational efficiency and overall service quality.
              </p>
            </div>

            {/* Prohibited */}
            <div>
              <h3 className="font-semibold">
                Prohibited AI Practices and Usage Restrictions
              </h3>

              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>
                  Provide personalised migration advice without human review
                </li>
                <li>Make legal or visa-related decisions</li>
                <li>
                  Determine visa eligibility without a professional assessment
                </li>
                <li>Replace the role of a Registered Migration Agent</li>
                <li>Act independently in any client matter</li>
                <li>
                  Process or store sensitive client data in unapproved AI
                  systems
                </li>
              </ul>
            </div>

            {/* RMA */}
            <div>
              <h3 className="font-semibold">
                Registered Migration Agent Responsibilities and Human Oversight
              </h3>

              <p>
                Registered Migration Agents (RMAs) at Growmore Immigration
                retain full professional and legal responsibility for all advice
                and client services, regardless of AI use.
              </p>

              <p className="mt-2">
                All migration advice, client communication, and final decisions
                must be reviewed, validated, and approved by an RMA.
              </p>

              <p className="mt-2">
                All AI-generated content is carefully checked, and final
                decisions are always made by a human professional.
              </p>
            </div>

            {/* Privacy */}
            <div>
              <h3 className="font-semibold">
                Client Consent, Confidentiality, and Data Protection
              </h3>

              <p>
                Where AI tools are used in connection with client information,
                appropriate consent will be obtained before any personal data is
                entered into such systems.
              </p>

              <p className="mt-2">
                All handling of personal information is carried out in
                accordance with the Privacy Act 1988 (Cth) and internal privacy
                protocols.
              </p>

              <p className="mt-2">
                Growmore Immigration is bound by strict confidentiality
                obligations under the Code of Conduct.
              </p>

              <p className="mt-2">
                For more information, refer to our Privacy Policy:
              </p>

              <a
                href="https://www.growmore.one/privacy-policy"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 underline"
              >
                https://www.growmore.one/privacy-policy
              </a>
            </div>

            {/* Limitations */}
            <div>
              <h3 className="font-semibold">
                Limitations of AI and Governance
              </h3>

              <p>
                AI tools may produce outputs that are inaccurate, outdated,
                incomplete, or misleading.
              </p>

              <p className="mt-2">
                For this reason, AI is used strictly as a support tool and never
                as a sole basis for migration advice or decision-making.
              </p>

              <p className="mt-2">References:</p>

              <ul className="list-disc pl-6">
                <li>
                  <a
                    href="https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    https://www.industry.gov.au/publications/australias-artificial-intelligence-ethics-framework
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.digital.gov.au/policy/responsible-use-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 underline"
                  >
                    https://www.digital.gov.au/policy/responsible-use-ai
                  </a>
                </li>
              </ul>
            </div>

            {/* Staff */}
            <div>
              <h3 className="font-semibold">Staff Responsibilities</h3>
              <p>
                All staff and contractors are required to use AI strictly for
                permitted purposes, maintain client confidentiality, and verify
                all AI-generated content before use.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h3 className="font-semibold">Future Use & Policy Updates</h3>
              <p>
                This Policy will be reviewed annually or when there are material
                changes to AI usage, relevant laws, or professional standards.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-16">
              <h3 className="font-semibold">Contact</h3>
              <p>
                Growmore & Associates Pty Ltd (Trading as Growmore Immigration){" "}
                <br />
                Email: <span className="text-blue-600">
                  info@growmore.one
                </span>{" "}
                <br />
                Website: growmore.one
              </p>

              <p className="mt-4 text-sm">
                <b>Disclaimer:</b> AI tools are used for support purposes only.
                Any AI-generated content does not constitute migration advice
                unless reviewed and confirmed by a Registered Migration Agent.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default AI;
