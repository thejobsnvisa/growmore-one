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

  // ✅ Always set CORS headers FIRST
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // 🔥 TEMP fallback (remove in production if needed)
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Blocked Origin:", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Handle preflight request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ❌ Only allow POST
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // ✅ Safe body parsing
    const data =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // ✅ Validation
    if (!data.fullName || !data.email || !data.captchaToken) {
      return res.status(400).json({
        success: false,
        message: "Missing required fields",
      });
    }

    /* ========= CRM ========= */
    try {
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

      await fetch("https://leads.growmore.one/api/website-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: crmBody.toString(),
      });
    } catch (crmError) {
      console.error("CRM Sync Error:", crmError);
    }

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
      html: `
        <h2>New DAMA Lead</h2>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone}</p>
        <p><b>Occupation:</b> ${data.occupation}</p>
        <p><b>Qualification:</b> ${data.qualification}</p>
        <p><b>Experience:</b> ${data.experience}</p>
        <p><b>Skills Assessment:</b> ${data.skillsAssessment}</p>
        <p><b>Job Offer:</b> ${data.jobOffer}</p>
        <p><b>Location:</b> ${data.location}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Submission successful",
    });

  } catch (error) {
    console.error("API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
