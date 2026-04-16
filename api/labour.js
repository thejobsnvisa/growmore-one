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

  // ✅ ALWAYS set CORS (critical)
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // 🔥 TEMP fallback (remove later)
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Blocked Origin:", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ❌ Only POST allowed
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
    if (!data.companyName || !data.abn || !data.contactPerson) {
      return res.status(400).json({
        success: false,
        message: "Required business fields missing",
      });
    }

    /* ========= CRM ========= */
    try {
      const crmBody = new URLSearchParams({
        Name: data.contactPerson,
        Company: data.companyName,
        Email: "Employer Inquiry",
        Phone: data.abn,
        Inquiries: "Employer-Sponsored Visa Assessment",
        Source: "Website Employer Form",
        Message: `
ABN: ${data.abn}
Staff: ${data.totalEmployees}
Revenue: ${data.turnoverRange}
Job Title: ${data.jobTitle}
ANZSCO: ${data.anzscoCode}
DAMA Status: ${data.dama}
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
      console.error("CRM Error:", crmError);
    }

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
      <h3>Employer Lead</h3>
      <p><b>Company:</b> ${data.companyName}</p>
      <p><b>ABN:</b> ${data.abn}</p>
      <p><b>Website:</b> ${data.website || "N/A"}</p>
      <p><b>Address:</b> ${data.businessAddress}</p>
      <p><b>Employees:</b> ${data.totalEmployees}</p>
      <p><b>Turnover:</b> ${data.turnoverRange}</p>
      <p><b>DAMA:</b> ${data.dama}</p>
      <p><b>Job Title:</b> ${data.jobTitle}</p>
      <p><b>ANZSCO:</b> ${data.anzscoCode}</p>
      <p><b>Contact Person:</b> ${data.contactPerson}</p>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: `DAMA Interest: ${data.contactPerson}`,
      html: emailHtml,
    });

    return res.status(200).json({
      success: true,
      message: "Employer assessment submitted",
    });

  } catch (error) {
    console.error("Employer API Error:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
