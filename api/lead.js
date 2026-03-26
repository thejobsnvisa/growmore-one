import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ CORS (Allow GitHub Pages)
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://thejobsnvisa.github.io"
  );
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Authorization"
  );

  // ❗ IMPORTANT: remove credentials unless needed
  // res.setHeader("Access-Control-Allow-Credentials", "true");

  // ✅ Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  // ✅ Health check
  if (req.method === "GET") {
    return res.status(200).json({
      success: true,
      message: "API Active 🚀",
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

    // ==============================
    // ✅ 1. VERIFY reCAPTCHA
    // ==============================
    let captchaSuccess = false;

    try {
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
      console.log("Captcha response:", captchaData);

      captchaSuccess = captchaData.success;
    } catch (err) {
      console.error("Captcha verification error:", err);
    }

    // ❗ TEMP DEBUG: comment this if testing
    if (!captchaSuccess) {
      return res.status(400).json({
        success: false,
        message: "reCAPTCHA failed",
      });
    }

    // ==============================
    // ✅ 2. SEND TO CRM
    // ==============================
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";

    try {
      await fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          Name: name,
          Email: email,
          Phone: cleanPhone,
          Inquiries: visaType || "General Inquiry",
          Source: source || "Website",
          Message: message || "",
        }),
      });
    } catch (err) {
      console.error("CRM Webhook failed:", err);
    }

    // ==============================
    // ✅ 3. SEND EMAIL
    // ==============================
    const transporter = nodemailer.createTransport({
      service: "gmail",
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
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Visa Type:</b> ${visaType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    // ==============================
    // ✅ SUCCESS RESPONSE
    // ==============================
    return res.status(200).json({
      success: true,
      message: "Lead captured successfully!",
    });
  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
