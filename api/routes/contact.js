import express from "express";
import { sendContactEmail } from "../services/emailService.js";
import { validateContactForm } from "../middleware/validation.js";

const router = express.Router();

// POST /api/contact/send
router.post("/send", validateContactForm, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Send email
    await sendContactEmail({ name, email, message });

    res.status(200).json({
      success: true,
      message: "Message sent successfully! We'll get back to you soon.",
    });
  } catch (error) {
    console.error("Contact form error:", error);

    res.status(500).json({
      success: false,
      message: "Failed to send message. Please try again later.",
    });
  }
});

export default router;
