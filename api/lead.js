import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // ✅ Preflight
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

  // ❌ Only POST
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
    // ✅ 1. VERIFY CAPTCHA (NON-BLOCKING)
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
      console.log("Captcha result:", captchaData);

      captchaSuccess = captchaData.success;
    } catch (err) {
      console.error("Captcha error:", err);
    }

    // ==============================
    // ✅ 2. SEND TO CRM (ALWAYS RUNS)
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
          CaptchaVerified: captchaSuccess ? "Yes" : "No", // ✅ IMPORTANT
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
        <p><b>Captcha Verified:</b> ${captchaSuccess ? "Yes" : "No"}</p>
      `,
    });

    // ==============================
    // ✅ SUCCESS RESPONSE
    // ==============================
    return res.status(200).json({
      success: true,
      message: captchaSuccess
        ? "Lead submitted successfully ✅"
        : "Lead submitted (captcha failed ⚠️)",
    });

  } catch (error) {
    console.error("API ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
}
