import nodemailer from "nodemailer";

export default async function handler(req, res) {
const allowedOrigins = [
  "https://thejobsnvisa.github.io",
  "https://www.growmore.one",
  "https://growmore.one",
  "https://www.growmore.au",
  "https://growmore.au"
];

const origin = req.headers.origin;

if (allowedOrigins.includes(origin)) {
  res.setHeader("Access-Control-Allow-Origin", origin);
}

res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

if (req.method === "OPTIONS") {
  return res.status(200).end();
}

  // ✅ IMPORTANT: Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const data = req.body;

    // ✅ Validation
    if (!data.fullName || !data.email || !data.captchaToken) {
      return res.status(400).json({
        success: false,
        message: "Required fields missing",
      });
    }

    /* ========= CRM Integration ========= */
    const crmBody = new URLSearchParams({
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone || "",
      Country: data.country || "",
      Inquiries: "GSM Visa Eligibility Assessment",
      Source: "Website GSM Form",
      Message: `
Occupation: ${data.occupation}
Qualification: ${data.qualification}
Points: ${data.estimatedPoints}
Location: ${data.location}
Comments: ${data.comments || "None"}
      `.trim(),
    });

    fetch("https://leads.growmore.one/api/website-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: crmBody.toString(),
    }).catch((err) => console.error("CRM Error:", err));

    /* ========= EMAIL ========= */
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
      <h2>New GSM Assessment Lead</h2>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Residence:</b> ${data.country}</p>
      <p><b>Location:</b> ${data.location}</p>

      <hr/>
      <h3>Eligibility Profile</h3>
      <ul>
        <li><b>Age:</b> ${data.age}</li>
        <li><b>Occupation:</b> ${data.occupation}</li>
        <li><b>Qualification:</b> ${data.qualification}</li>
        <li><b>Skills Assessment:</b> ${data.skillsAssessment}</li>
        <li><b>English Test:</b> ${data.englishTest}</li>
      </ul>

      <h3>Points & Experience</h3>
      <ul>
        <li><b>Overseas Exp:</b> ${data.overseasExperience}</li>
        <li><b>Australian Exp:</b> ${data.australiaExperience}</li>
        <li><b>Estimated Points:</b> ${data.estimatedPoints}</li>
        <li><b>Partner Skills:</b> ${data.partnerSkills}</li>
        <li><b>Regional Work:</b> ${data.regionalWork}</li>
        <li><b>Professional Year:</b> ${data.professionalYear}</li>
      </ul>

      <p><b>Comments:</b> ${data.comments || "N/A"}</p>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: `GSM Lead: ${data.fullName} (${data.occupation})`, // ✅ fixed title
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Submission successful",
    });

  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}
