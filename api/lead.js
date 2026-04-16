import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // ✅ Step 1: Dynamic Reflection (Must be exactly what the browser sends)
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400"); // Cache preflight for 24h

  // ✅ Step 2: Immediate Preflight Return
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    // Standardize body parsing
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, visaType, message } = body;

    // Your Nodemailer logic...
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: process.env.EMAIL_USER, pass: process.env.EMAIL_PASS },
    });

    await transporter.sendMail({
        from: `"Growmore" <${process.env.EMAIL_USER}>`,
        to: "info@growmore.one",
        bcc: "info@growmoreimmigration.com",
        subject: "New Appointment Booking",
        html: `<p><b>Name:</b> ${name}</p><p><b>Email:</b> ${email}</p><p><b>Phone:</b> +${countryCode}${phoneNumber}</p>`,
      });

    return res.status(200).json({
      success: true,
      message: "Thank you! Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ success: false, message: "Internal Server Error" });
  }
}
