import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ✅ DYNAMIC CORS: Trust the incoming origin
  const origin = req.headers.origin;
  res.setHeader("Access-Control-Allow-Origin", origin || "*");
  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // ✅ PREFLIGHT FIX: Must return 200 immediately for browser security checks
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, visaType, message } = body;

    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Required fields missing" });
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
        subject: "New Lead from Website",
        html: `<p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p><p><b>Visa:</b> ${visaType}</p>`,
      });
    } catch (e) { 
      console.error("Email hidden error:", e.message); 
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
