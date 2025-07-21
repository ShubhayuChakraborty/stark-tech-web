import express from "express";
import {
  generateJARVISResponse,
  getQuickResponse,
} from "../services/jarvisService.js";
import { validateJARVISMessage } from "../middleware/jarvisValidation.js";

const router = express.Router();

// POST /api/jarvis/chat
router.post("/chat", validateJARVISMessage, async (req, res) => {
  try {
    const { message } = req.body;

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
});

// GET /api/jarvis/quick/:type
router.get("/quick/:type", (req, res) => {
  try {
    const { type } = req.params;
    const response = getQuickResponse(type);

    res.status(200).json({
      success: true,
      response,
      type,
      timestamp: new Date().toISOString(),
    });
  } catch (error) {
    console.error("JARVIS quick response error:", error);

    res.status(500).json({
      success: false,
      response: "System error occurred. Please try again.",
      timestamp: new Date().toISOString(),
    });
  }
});

// GET /api/jarvis/status
router.get("/status", (req, res) => {
  res.status(200).json({
    success: true,
    status: "online",
    message: "JARVIS AI Assistant is operational",
    capabilities: [
      "Answer questions about Shubhayu",
      "Provide technical information",
      "Assist with contact inquiries",
      "Discuss projects and skills",
    ],
    timestamp: new Date().toISOString(),
  });
});

export default router;
