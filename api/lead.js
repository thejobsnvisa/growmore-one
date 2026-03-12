import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, phone, visaType, message, source } = req.body;

    if (!name || !email || !phone) {
      return res.status(400).json({
        success: false,
        message: "Name, email and phone are required",
      });
    }

    // Clean phone and extract country code (1–3 digits)
    const cleanPhone = phone.replace(/\D/g, ""); // remove all non-digit characters
    const countryCodeMatch = cleanPhone.match(/^\d{1,3}/);
    const countryCode = countryCodeMatch ? countryCodeMatch[0] : "";
    const phoneNumber = cleanPhone.replace(countryCode, "");

    // Prepare data for CRM webhook
    const body = new URLSearchParams({
      Name: name,
      Email: email,
      Phone: phoneNumber,
      Country_Code: countryCode,
      Inquiries: visaType || "General Inquiry",
      Source: source || "Website Form",
      Message: message || "",
    });

    const crmResponse = await fetch(
      "https://case.growmore.one/api/webhooks/website-form",
      {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: body.toString(),
      }
    );
    const crmData = await crmResponse.json();

    // Setup email transporter using environment variables
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER, // Gmail address
        pass: process.env.EMAIL_PASS, // App password
      },
    });

    // Send email
    await transporter.sendMail({
      from: `"Website Form" <${process.env.EMAIL_USER}>`,
      to: "info@growmore.one",
      subject: "New Website Inquiry",
      html: `
        <h2>New Website Lead</h2>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> +${countryCode} ${phoneNumber}</p>
        <p><b>Visa Type:</b> ${visaType || "General Inquiry"}</p>
        <p><b>Message:</b> ${message || "N/A"}</p>
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
      message: error.message,
    });
  }
}