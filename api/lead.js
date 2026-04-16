import nodemailer from "nodemailer";

export default async function handler(req, res) {
  const origin = req.headers.origin;

  // 1. CORS Setup
  if (origin) {
    res.setHeader("Access-Control-Allow-Origin", origin);
  } else {
    res.setHeader("Access-Control-Allow-Origin", "*");
  }

  res.setHeader("Vary", "Origin");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const body = typeof req.body === "string" ? JSON.parse(req.body) : req.body;
    const { name, email, phone, visaType, message } = body;
    
    // Set source safely
    const leadSource = body.source || "Website Form";

    // Phone parsing logic
    const cleanPhone = phone ? phone.replace(/\D/g, "") : "";
    let countryCode = "91";
    let phoneNumber = cleanPhone;
    if (cleanPhone.length > 10) {
      countryCode = cleanPhone.slice(0, cleanPhone.length - 10);
      phoneNumber = cleanPhone.slice(-10);
    }

    /* ========= CRM SYNC ========= */
    console.log(`[CRM] Attempting sync for: ${email}`);
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
          Source: leadSource,
          Message: message || "",
        }),
        signal: controller.signal,
      });
      clearTimeout(timeout);
      
      // We use .text() because if the CRM returns an error page (HTML), .json() would crash the code
      const crmData = await crmResponse.text();
      console.log("[CRM] Response Status:", crmResponse.status);
      console.log("[CRM] Response Body:", crmData);
    } catch (err) {
      console.error("[CRM] Sync Failed:", err.message);
    }

    /* ========= EMAIL NOTIFICATION ========= */
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { 
        user: process.env.EMAIL_USER, 
        pass: process.env.EMAIL_PASS 
      },
    });

    await transporter.sendMail({
      from: `"Growmore" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      bcc: "info@growmoreimmigration.com",
      subject: "New Appointment Booking",
      html: `
        <h3>New Lead Details</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Visa Type:</b> ${visaType || 'Not specified'}</p>
        <p><b>Message:</b> ${message || 'No message'}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      message: "Thank you! Our team will contact you shortly.",
    });

  } catch (error) {
    console.error("Critical API Error:", error.message);
    return res.status(500).json({ 
      success: false, 
      message: "Internal Server Error", 
      error: error.message 
    });
  }
}
