import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ Allow only your frontend domain
const allowedOrigin = "https://thejobsnvisa.github.io,https://www.growmore.one,https://www.growmore.au";

const origin = req.headers.origin;

if (origin === allowedOrigin) {
  res.setHeader("Access-Control-Allow-Origin", origin);
}

res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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
      service: "gmail", // ✅ cleaner
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const emailHtml = `
      <div style="padding:20px;line-height:1.5;">
        <h3>DAMA Lead</h3>
        <p><b>Name:</b> ${data.fullName}</p>
        <p><b>Email:</b> ${data.email}</p>
        <p><b>Phone:</b> ${data.phone || "N/A"}</p>
        <p><b>Residence:</b> ${data.country || "N/A"}</p>
        <p><b>Location:</b> ${data.location || "N/A"}</p>

        <hr/>

        <h4>Professional Profile</h4>
        <ul>
          <li><b>Qualification:</b> ${data.qualification}</li>
          <li><b>Occupation:</b> ${data.occupation}</li>
          <li><b>Skills Assessment:</b> ${data.skillsAssessment}</li>
          <li><b>Experience:</b> ${data.experience}</li>
          <li><b>Job Offer:</b> ${data.jobOffer}</li>
        </ul>
      </div>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: `DAMA Lead: ${data.fullName} (${data.occupation})`,
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
