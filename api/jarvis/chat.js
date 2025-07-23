import {
  generateJARVISResponse,
  getQuickResponse,
} from "../services/jarvisService.js";

export default async function handler(req, res) {
  // Enable CORS
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, OPTIONS"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");

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
    const { message } = req.body;

    // Validate message
    if (
      !message ||
      typeof message !== "string" ||
      message.trim().length === 0
    ) {
      return res.status(400).json({
        success: false,
        message: "Message is required",
      });
    }

    if (message.length > 1000) {
      return res.status(400).json({
        success: false,
        message: "Message is too long (max 1000 characters)",
      });
    }

    console.log("🤖 JARVIS received message:", message);

    // Generate AI response
    const aiResponse = await generateJARVISResponse(message);

    res.status(200).json({
      success: true,
      response: aiResponse,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("JARVIS chat error:", error);

    res.status(500).json({
      success: false,
      response:
        "I apologize, but I'm experiencing technical difficulties. Please try again or contact Shubhayu directly.",
      timestamp: new Date().toISOString(),
    });
  }
}
