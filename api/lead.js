import nodemailer from "nodemailer";
import dotenv from "dotenv";

dotenv.config();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, visaType, message, source } = req.body;

    // ✅ Validation
    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // ✅ Clean phone number
    const cleanPhone = phone.replace("+", "");
    const countryCodeMatch = cleanPhone.match(/^\d{1,3}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";
    const phoneNumber = cleanPhone.replace(countryCode, "");

    // ✅ Prepare CRM payload
    const body = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    });

    // ✅ Send data to CRM
    const response = await fetch(
      "https://case.growmore.one/api/webhooks/website-form",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: body.toString(),
      }
    );

    const crmData = await response.json();

    // ✅ DEBUG (remove after testing)
    console.log("EMAIL_USER:", process.env.EMAIL_USER);
    console.log("EMAIL_PASS:", process.env.EMAIL_PASS);

    // ❌ Stop if email config missing
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      return res.status(500).json({
        success: false,
        message: "Email configuration missing",
      });
    }

    // ✅ Setup Nodemailer (FIXED)
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
      subject: "Appointment Booking from the website",
      html: `
        <h3>New Lead Received</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> +${countryCode} ${phoneNumber}</p>
        <p><strong>Visa Type:</strong> ${visaType || "General Inquiry"}</p>
        <p><strong>Message:</strong> ${message || "N/A"}</p>
        <p><strong>Source:</strong> ${source || "Website Form"}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      crmResponse: crmData,
      message: "Lead submitted and email sent successfully",
    });

  } catch (error) {
    console.error("Webhook / Email error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });
  }
}