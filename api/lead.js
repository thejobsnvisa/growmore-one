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

  // ✅ ALWAYS set CORS (critical fix)
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // 🔥 TEMP fallback (remove after testing)
    res.setHeader("Access-Control-Allow-Origin", "*");
    console.log("Blocked Origin:", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ Handle preflight ONLY ONCE
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Allow GET for testing
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "API is running 🚀",
    });
  }

  // ❌ Only POST allowed for main logic
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    // ✅ Safe body parsing
    const body =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    const { name, email, phone, visaType, message, source } = body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // ✅ Phone parsing
    const cleanPhone = phone.replace(/\D/g, "");
    let countryCode = "91";
    let phoneNumber = cleanPhone;

    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM ========= */
    let crmData = null;

    try {
      const controller = new AbortController();
      const timeout = setTimeout(() => controller.abort(), 10000);

      const crmResponse = await fetch(
        "https://case.growmore.one/api/webhooks/website-form",
        {
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
        }
      );

      clearTimeout(timeout);

      const text = await crmResponse.text();

      try {
        crmData = JSON.parse(text);
      } catch {
        crmData = { raw: text };
      }

      if (!crmResponse.ok) throw new Error(text);

    } catch (err) {
      console.error("❌ CRM ERROR:", err.message);
      crmData = { error: err.message };
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
      subject: "Appointment Booking from Website",
      html: `
        <h3>New Lead</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
        <p><b>Inquiry:</b> ${visaType || "N/A"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Form submitted successfully",
      crm: crmData,
    });

  } catch (error) {
    console.error("❌ ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal server error",
    });
  }
}
