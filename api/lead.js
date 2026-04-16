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

  // ✅ CORS Headers
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    return res.status(403).json({ success: false, message: "Origin not allowed" });
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method === "GET") {
    return res.status(200).json({ success: true, message: "API is running 🚀" });
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, visaType, message, source } = body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
    }

    // Phone parsing logic
    const cleanPhone = phone.replace(/\D/g, "");
    let countryCode = "91";
    let phoneNumber = cleanPhone;
    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 8000);

      const crmResponse = await fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: phoneNumber,
          Country_Code: countryCode,
          Inquiries: visaType || "General Inquiry",
          Source: source || "Website Form",
          Message: message || "",
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      await crmResponse.json().catch(() => ({ status: "No JSON response" }));
    } catch (err) {
      console.error("CRM Error:", err.message);
    }

    /* ========= EMAIL NOTIFICATION ========= */
    try {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS,
        },
      });

      await transporter.sendMail({
        from: `"Growmore" <${process.env.EMAIL_USER}>`,
        to: "info@growmore.one",
        bcc: "info@growmoreimmigration.com",
        subject: "New Appointment Booking",
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> +${countryCode}${phoneNumber}</p>`,
      });
    } catch (emailErr) {
      console.error("Email Error:", emailErr.message);
    }

    return res.status(200).json({
      success: true,
      message: "Thank you! Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("Global Error:", error);
    return res.status(500).json({ success: false, message: "Internal server error" });
  }
}