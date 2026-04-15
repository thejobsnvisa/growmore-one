import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ Allow only your frontend domain
const allowedOrigin = "https://thejobsnvisa.github.io,https://www.growmore.one,,https://www.growmore.au";

const origin = req.headers.origin;

if (origin === allowedOrigin) {
  res.setHeader("Access-Control-Allow-Origin", origin);
}

res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ IMPORTANT: Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res
      .status(405)
      .json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // ✅ Validation
    if (!data.companyName || !data.abn || !data.contactPerson) {
      return res.status(400).json({
        success: false,
        message: "Required business fields missing",
      });
    }

    /* ========= CRM Integration ========= */
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
      subject: `DAMA Interest: ${data.contactPerson}`, // ✅ FIXED
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
      message: error.message,
    });
  }
}
