import nodemailer from "nodemailer";
 
export async function POST(req) {
  try {
    const formData = await req.formData();
 
    const firstName = formData.get("firstName");
    const lastName = formData.get("lastName");
    const email = formData.get("email");
    const phone = formData.get("phone");
    const position = formData.get("position");
    const resume = formData.get("resume");
 
    if (!firstName || !lastName || !email || !phone || !position || !resume) {
      return new Response(
        JSON.stringify({ error: "All fields are required" }),
        { status: 400 }
      );
    }
 
    // Convert file to buffer
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
 
    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: Number(process.env.SMTP_PORT),
      secure: false,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });
 
    // Verify transporter configuration
    await transporter.verify();
 
    // Send email with attachment
    const info = await transporter.sendMail({
      from: `"Bharat Sports Foundation" <${process.env.SMTP_USER}>`,
      to: process.env.MY_EMAIL,
      replyTo: email,
      subject: `Job Application: ${position} - ${firstName} ${lastName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 3px solid #B8EA80; padding-bottom: 10px;">New Job Application</h2>
         
          <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="color: #B8EA80; margin-top: 0;">Applicant Information</h3>
            <p style="margin: 10px 0;"><strong>Name:</strong> ${firstName} ${lastName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> ${email}</p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> ${phone}</p>
            <p style="margin: 10px 0;"><strong>Position Applied:</strong> ${position}</p>
          </div>
 
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #ddd; color: #666; font-size: 12px;">
            <p>This application was submitted through the Bharat Sports Foundation careers page.</p>
            <p>Resume is attached to this email.</p>
          </div>
        </div>
      `,
      attachments: [
        {
          filename: resume.name,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    });
 
    console.log("Email sent successfully:", info.messageId);
 
    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("APPLICATION EMAIL ERROR:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to submit application. Please try again.",
        details: error.message,
      }),
      { status: 500 }
    );
  }
}