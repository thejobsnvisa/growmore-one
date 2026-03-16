import nodemailer from "nodemailer";

export default async function handler(req, res) {

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {

    const {
      fullName,
      email,
      phone,
      country,
      location,
      age,
      qualification,
      occupation,
      skillsAssessment,
      overseasExperience,
      australiaExperience,
      englishTest,
      estimatedPoints,
      partnerSkills,
      studiedInAustralia,
      professionalYear,
      regionalWork,
      comments
    } = req.body;

    if (!fullName || !email) {
      return res.status(400).json({
        success: false,
        message: "Name and Email are required",
      });
    }

    /* ========= CRM API ========= */

    const body = new URLSearchParams({
      Name: fullName,
      Email: email,
      Phone: phone || "",
      Country: country || "",
      Inquiries: "GSM Visa Eligibility Assessment",
      Source: "Website GSM Form",
      Message: comments || "",
    });

    let crmData = null;

    try {

      const crmResponse = await fetch(
        "https://case.growmore.one/api/webhooks/website-form",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
          body: body.toString(),
        }
      );

      crmData = await crmResponse.json();

    } catch (err) {
      console.error("CRM API Error:", err);
    }

    /* ========= Nodemailer ========= */

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "upadhyayriddhi445@gmail.com",
        pass: "rodq fksy juyo tvlm"
      },
    });

    await transporter.sendMail({
      from: `"Growmore Immigration"`,
      to: "growmoreimmigration@gmail.com",
      subject: "New GSM Visa Eligibility Assessment",
      html: `
        <h2>GSM Visa Eligibility Assessment</h2>

        <h3>Basic Info</h3>
        <p><b>Name:</b> ${fullName}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Phone:</b> ${phone}</p>
        <p><b>Country:</b> ${country}</p>
        <p><b>Currently in Australia:</b> ${location}</p>

        <h3>Eligibility</h3>
        <p><b>Age:</b> ${age}</p>
        <p><b>Qualification:</b> ${qualification}</p>
        <p><b>Occupation:</b> ${occupation}</p>
        <p><b>Skills Assessment:</b> ${skillsAssessment}</p>

        <h3>Work Experience</h3>
        <p><b>Overseas:</b> ${overseasExperience}</p>
        <p><b>Australia:</b> ${australiaExperience}</p>

        <h3>English Test</h3>
        <p>${englishTest}</p>

        <h3>Points</h3>
        <p><b>Estimated Points:</b> ${estimatedPoints}</p>
        <p><b>Partner Skills:</b> ${partnerSkills}</p>
        <p><b>Studied in Australia:</b> ${studiedInAustralia}</p>
        <p><b>Professional Year:</b> ${professionalYear}</p>
        <p><b>Regional Work:</b> ${regionalWork}</p>

        <h3>Comments</h3>
        <p>${comments}</p>
      `,
    });

    return res.status(200).json({
      success: true,
      crmResponse: crmData,
      message: "Form submitted successfully",
    });

  } catch (error) {

    console.error("Server Error:", error);

    return res.status(500).json({
      success: false,
      message: "Something went wrong",
      error: error.message,
    });

  }
}