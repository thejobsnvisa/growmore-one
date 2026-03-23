import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const { name, email, phone, visaType, message, source, captchaToken } =
      typeof req.body === "string" ? JSON.parse(req.body) : req.body;

    // 1. Verify reCAPTCHA first
    const captchaResponse = await fetch(
      `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SITE_KEY}&response=${captchaToken}`,
      { method: "POST" }
    );
    const captchaData = await captchaResponse.json();

    if (!captchaData.success) {
      return res.status(400).json({ success: false, message: "Captcha verification failed" });
    }

    // 2. Validate required fields
    if (!name || !email || !phone) {
      return res.status(400).json({ success: false, message: "Name, email and phone are required" });
    }

    // ✅ Phone parsing
    const cleanPhone = phone.replace("+", "");
    const countryCode = cleanPhone.slice(0, 3);
    const phoneNumber = cleanPhone.slice(3);

    // ✅ CRM Webhook
    const body = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    });

    await fetch("https://case.growmore.one/api/webhooks/website-form", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: body.toString(),
    });

    // ✅ Transporter using ENV variables
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ✅ Send Email
    await transporter.sendMail({
      from: `"Growmore Immigration" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: "Appointment Booking from Website",
      html: `
        <h3>New Lead</h3>
        <p>Name: ${name}</p>
        <p>Email: ${email}</p>
        <p>Phone: +${countryCode} ${phoneNumber}</p>
        <p>Inquiry: ${visaType}</p>
        <p>Message: ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, message: "Success" });

  } catch (error) {
    console.error("ERROR:", error);
    return res.status(500).json({ success: false, message: error.message });
  }
}