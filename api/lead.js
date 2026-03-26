import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ CORS Configuration
  res.setHeader("Access-Control-Allow-Credentials", "true");
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://thejobsnvisa.github.io"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,POST"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // ✅ Handle preflight request (VERY IMPORTANT)
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Health check
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "API is working 🚀",
    });
  }

  // ❌ Only POST allowed
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method Not Allowed",
    });
  }

  try {
    const {
      name,
      email,
      phone,
      visaType,
      message,
      source,
      captchaToken,
    } = req.body;

    // ================================
    // ✅ 1. VERIFY RECAPTCHA
    // ================================
    const captchaRes = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      }
    );

    const captchaData = await captchaRes.json();

    if (!captchaData.success) {
      return res.status(400).json({
        success: false,
        message: "reCAPTCHA failed",
      });
    }

    // ================================
    // ✅ 2. SEND DATA TO CRM
    // ================================
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";

    const crmPayload = {
      Name: name,
      Email: email,
      Phone: cleanPhone,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website",
      Message: message || "",
    };

    try {
      await fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(crmPayload),
      });
    } catch (err) {
      console.error("CRM failed (ignored):", err);
    }

    // ================================
    // ✅ 3. SEND EMAIL (FIXED SMTP)
    // ================================
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Growmore Website" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      subject: `New Lead: ${name}`,
      html: `
        <div style="font-family: Arial; line-height: 1.6;">
          <h2>New Lead Captured</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Visa Type:</b> ${visaType}</p>
          <p><b>Message:</b> ${message}</p>
          <hr/>
          <p style="font-size:12px;">Sent from Growmore Website</p>
        </div>
      `,
    });

    // ================================
    // ✅ SUCCESS RESPONSE
    // ================================
    return res.status(200).json({
      success: true,
      message: "Lead submitted successfully ✅",
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}

// ✅ Important for Vercel
export const config = {
  api: {
    bodyParser: true,
  },
};