import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ success: false, message: "Method not allowed" });
  }

  try {
    const data = req.body;

    // 1. Basic Validation
    if (!data.fullName || !data.email) {
      return res.status(400).json({ success: false, message: "Name and Email are required" });
    }

    /* ========= CRM API ========= */
    const crmBody = new URLSearchParams({
      Name: data.fullName,
      Email: data.email,
      Phone: data.phone || "",
      Country: data.country || "",
      Inquiries: "GSM Visa Eligibility Assessment",
      Source: "Website GSM Form",
      Message: data.comments || "",
    });

    try {
      await fetch("https://case.growmore.one/api/webhooks/website-form", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: crmBody.toString(),
      });
    } catch (err) {
      console.error("CRM API Error:", err);
    }

    /* ========= Nodemailer ========= */
    // IMPORTANT: Move these to your .env file
    const transporter = nodemailer.createTransport({
      service: "gmail",
       auth: {
        user: "upadhyayriddhi445@gmail.com",
        pass: "rodq fksy juyo tvlm"
      },
    });

    const emailHtml = `
      <h2>GSM Visa Eligibility Assessment</h2>
      <h3>Basic Info</h3>
      <p><b>Name:</b> ${data.fullName}</p>
      <p><b>Email:</b> ${data.email}</p>
      <p><b>Phone:</b> ${data.phone}</p>
      <p><b>Country:</b> ${data.country}</p>
      <p><b>Currently in Australia:</b> ${data.location}</p>
      <hr/>
      <h3>Eligibility & Points</h3>
      <p><b>Occupation:</b> ${data.occupation}</p>
      <p><b>Estimated Points:</b> ${data.estimatedPoints}</p>
      <p><b>Comments:</b> ${data.comments}</p>
    `;

    await transporter.sendMail({
      from: `"Growmore Immigration"`,
      to: "growmoreimmigration@gmail.com",
      subject: "New GSM Visa Eligibility Assessment",
      html: emailHtml,
    });

    return res.status(200).json({ success: true, message: "Form submitted successfully" });

  } catch (error) {
    console.error("Server Error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}