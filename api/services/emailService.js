import nodemailer from "nodemailer";

// Create reusable transporter object using Gmail
const createTransporter = () => {
  return nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_APP_PASSWORD, // Use App Password, not regular password
    },
  });
};

// Send contact form email
export const sendContactEmail = async ({ name, email, message }) => {
  const transporter = createTransporter();

  // Email template for you (the recipient)
  const recipientEmailOptions = {
    from: process.env.GMAIL_USER,
    to: process.env.GMAIL_USER, // Your email
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
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #8b5cf6; margin: 0 0 20px 0; font-size: 20px;">
              📨 Message Details
            </h2>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #3b82f6;">Name:</strong> 
              <span style="margin-left: 10px;">${name}</span>
            </div>
            
            <div style="margin-bottom: 15px;">
              <strong style="color: #3b82f6;">Email:</strong> 
              <span style="margin-left: 10px;">${email}</span>
            </div>
            
            <div>
              <strong style="color: #3b82f6;">Message:</strong>
              <div style="background: rgba(255,255,255,0.03); border: 1px solid rgba(255,255,255,0.1); border-radius: 8px; padding: 15px; margin-top: 10px; line-height: 1.6;">
                ${message.replace(/\n/g, "<br>")}
              </div>
            </div>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: #a1a1aa; font-size: 14px;">
              💡 Respond quickly to maintain that Stark Industries efficiency!
            </p>
          </div>
        </div>
      </div>
    `,
  };

  // Confirmation email for the sender
  const senderEmailOptions = {
    from: process.env.GMAIL_USER,
    to: email,
    subject: "🚀 Message Received - Stark Tech Portfolio",
    html: `
      <div style="font-family: 'Arial', sans-serif; max-width: 600px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #16213e); color: #ffffff; border-radius: 15px; overflow: hidden;">
        <div style="background: linear-gradient(135deg, #8b5cf6, #3b82f6, #ef4444); padding: 30px; text-align: center;">
          <h1 style="margin: 0; font-size: 28px; font-weight: bold; text-shadow: 0 2px 4px rgba(0,0,0,0.3);">
            ⚡ STARK TECH
          </h1>
          <p style="margin: 10px 0 0 0; font-size: 16px; opacity: 0.9;">
            Message Confirmation
          </p>
        </div>
        
        <div style="padding: 40px 30px; text-align: center;">
          <div style="background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 12px; padding: 25px; margin-bottom: 25px;">
            <h2 style="color: #8b5cf6; margin: 0 0 15px 0; font-size: 24px;">
              ✅ Message Received!
            </h2>
            <p style="margin: 0; line-height: 1.6; font-size: 16px;">
              Hi <strong>${name}</strong>,<br><br>
              Thank you for reaching out! Your message has been successfully received and I'll get back to you as soon as possible.
            </p>
          </div>
          
          <div style="background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); border-radius: 12px; padding: 20px; margin-bottom: 25px;">
            <h3 style="color: #3b82f6; margin: 0 0 15px 0;">Your Message:</h3>
            <p style="margin: 0; line-height: 1.6; font-style: italic; opacity: 0.8;">
              "${message}"
            </p>
          </div>
          
          <div style="text-align: center; padding: 20px 0; border-top: 1px solid rgba(255,255,255,0.1);">
            <p style="margin: 0; color: #a1a1aa; font-size: 14px;">
              🔧 Building the future, one line of code at a time<br>
              <strong>Shubhayu Chakraborty</strong>
            </p>
          </div>
        </div>
      </div>
    `,
  };

  try {
    // Send both emails
    await Promise.all([
      transporter.sendMail(recipientEmailOptions),
      transporter.sendMail(senderEmailOptions),
    ]);

    console.log("📧 Contact emails sent successfully");
  } catch (error) {
    console.error("❌ Error sending emails:", error);
    throw error;
  }
};
