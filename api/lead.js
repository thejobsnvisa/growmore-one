import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // 1. Handle CORS - Note: Removed trailing slash to match browser origin exactly
  res.setHeader("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Origin", "https://thejobsnvisa.github.io"); 
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET,OPTIONS,PATCH,DELETE,POST,PUT",
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version",
  );

  // Handle Preflight request
  if (req.method === "OPTIONS") return res.status(200).end();
  
  // Health check
  if (req.method === "GET")
    return res.status(200).json({ message: "API Active" });

  try {
    const { name, email, phone, visaType, message, source, captchaToken } = req.body;

    // 2. Verify reCAPTCHA
    const captchaVerify = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captchaToken}`,
      {
        method: "POST",
      },
    );
    const captchaResult = await captchaVerify.json();

    if (!captchaResult.success) {
      return res
        .status(400)
        .json({ success: false, message: "reCAPTCHA verification failed" });
    }

    // 3. CRM Integration (Webhook)
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    const crmPayload = {
      Name: name,
      Email: email,
      Phone: cleanPhone,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Hero Form",
      Message: message || "",
    };

    try {
      await fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(crmPayload),
      });
    } catch (err) { // ✅ Fixed: Added 'err' variable here
      console.error("CRM Webhook failed, continuing to email...", err);
    }

    // 4. Email Integration
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
        <h3>New Lead Received</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Visa Type:</b> ${visaType}</p>
        <p><b>Message:</b> ${message}</p>
      `,
    });

    return res
      .status(200)
      .json({ success: true, message: "Lead captured successfully" });
  } catch (error) {
    console.error("API Error:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}