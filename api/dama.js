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

  // ✅ Set CORS FIRST
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  }

  res.setHeader("Vary", "Origin"); // 🔥 CRITICAL FIX
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Handle preflight ONCE
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

    if (!data.fullName || !data.email || !data.captchaToken) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* ========= CRM ========= */
    const crmBody = new URLSearchParams({
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone || "",
      Inquiries: "DAMA Pre-Screening",
      Source: "Website DAMA Checklist",
      Message: `
Occupation: ${data.occupation}
Qualification: ${data.qualification}
Experience: ${data.experience}
Skills Assessment: ${data.skillsAssessment}
Has Job Offer: ${data.jobOffer}
Location: ${data.location}
      `.trim(),
    });

    fetch("https://leads.growmore.one/api/website-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: crmBody.toString(),
    }).catch((err) => console.error("CRM Sync Error:", err));

    /* ========= EMAIL ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: `DAMA Lead: ${data.fullName} (${data.occupation})`,
      html: `<p>New lead from website</p>`,
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