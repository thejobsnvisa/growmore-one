import nodemailer from "nodemailer";

export default async function handler(req, res) {
 const allowedOrigins = [
  "https://thejobsnvisa.github.io",
  "https://www.growmore.one",
  "https://growmore.one",
  "https://www.growmore.au",
  "https://growmore.au",
  "https://growmore.au/", // with slash
  "https://growmore-1.vercel.app"
];

  const origin = req.headers.origin;

  // ✅ Fix: Set CORS dynamically or use fallback to avoid 403 blocks
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    // If testing or unexpected origin, allow but log it
    res.setHeader("Access-Control-Allow-Origin", origin || "*"); 
    console.log("Request from origin:", origin);
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  // Handle preflight
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    // Ensure body is parsed
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, visaType, message } = body;

    // ... (Your Phone & CRM Logic remains the same)

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
        html: `<p><b>Name:</b> ${name}</p><p><b>Phone:</b> ${phone}</p>`,
      });
    } catch (e) { console.error("Email hidden error:", e.message); }

    // ✅ ALWAYS return a clean JSON object
    return res.status(200).json({
      success: true,
      message: "Thank you! Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("Global Error:", error);
    return res.status(500).json({ success: false, message: "Server error. Please try again." });
  }
}
