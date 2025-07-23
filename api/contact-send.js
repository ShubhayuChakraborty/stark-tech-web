import nodemailer from "nodemailer";

// Create reusable transporter object using Gmail
const createTransporter = () => {
  // Check if environment variables are set
  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    throw new Error(
      "Gmail credentials not configured. Please set GMAIL_USER and GMAIL_APP_PASSWORD environment variables."
    );
  }

  return nodemailer.createTransporter({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD,
    },
  });
};

// Send contact form email
const sendContactEmail = async ({ name, email, message }) => {
  const transporter = createTransporter();

  const recipientEmailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER,
    subject: `🚀 New Contact Form Message from ${name}`,
    html: `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: #ffffff; border-radius: 15px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6, #ef4444); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
            ⚡ STARK TECH CONTACT
          </h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
            New message from your portfolio
          </p>
        </div>
        
        <div style="padding: 40px 30px;">
          <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 25px; margin-bottom: 20px; border: 1px solid rgba(255,255,255,0.2);">
            <h2 style="margin: 0 0 15px 0; color: #60a5fa; font-size: 20px;">👤 Contact Details</h2>
            <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #8b5cf6;">Name:</strong> ${name}</p>
            <p style="margin: 8px 0; font-size: 16px;"><strong style="color: #8b5cf6;">Email:</strong> ${email}</p>
          </div>
          
          <div style="background: rgba(255,255,255,0.1); border-radius: 10px; padding: 25px; border: 1px solid rgba(255,255,255,0.2);">
            <h2 style="margin: 0 0 15px 0; color: #60a5fa; font-size: 20px;">💬 Message</h2>
            <p style="margin: 0; font-size: 16px; line-height: 1.6; color: #e5e7eb;">${message}</p>
          </div>
        </div>
        
        <div style="background: rgba(0,0,0,0.3); padding: 20px; text-align: center; border-top: 1px solid rgba(255,255,255,0.1);">
          <p style="margin: 0; font-size: 14px; opacity: 0.8;">
            Sent from your Stark Tech Portfolio • ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `,
  };

  await transporter.sendMail(recipientEmailOptions);
};

export default async function handler(req, res) {
  // Enhanced CORS and security headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, Accept, User-Agent"
  );
  res.setHeader("Access-Control-Max-Age", "86400");
  res.setHeader("Content-Type", "application/json");

  // Security headers
  res.setHeader("X-Content-Type-Options", "nosniff");
  res.setHeader("X-Frame-Options", "DENY");
  res.setHeader("X-XSS-Protection", "1; mode=block");

  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  if (req.method !== "POST") {
    return res.status(405).json({
      success: false,
      message: "Method not allowed",
    });
  }

  try {
    const { name, email, message } = req.body;

    // Validate required fields
    const errors = [];

    if (!name || typeof name !== "string" || name.trim().length < 2) {
      errors.push("Name must be at least 2 characters long");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      errors.push("Please provide a valid email address");
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      errors.push("Message must be at least 10 characters long");
    }

    if (errors.length > 0) {
      return res.status(400).json({
        success: false,
        message: errors.join(", "),
      });
    }

    console.log("📨 Processing contact form:", {
      name,
      email,
      message: message.substring(0, 50) + "...",
    });

    // Send email
    await sendContactEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    // Provide more specific error messages
    let errorMessage = "Failed to send message. Please try again later.";

    if (error.message.includes("Gmail credentials not configured")) {
      errorMessage =
        "Email service is not configured. Please contact the administrator.";
    } else if (error.message.includes("Invalid login")) {
      errorMessage =
        "Email authentication failed. Please contact the administrator.";
    }

    res.status(500).json({
      success: false,
      message: errorMessage,
      ...(process.env.NODE_ENV === "development" && { debug: error.message }),
    });
  }
}
