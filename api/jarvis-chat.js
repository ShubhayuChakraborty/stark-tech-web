import { GoogleGenerativeAI } from "@google/generative-ai";

// Initialize Gemini AI
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

// Get the Gemini model
const model = genAI.getGenerativeModel({ model: "gemini-pro" });

// JARVIS personality and context
const JARVIS_CONTEXT = `
You are JARVIS (Just A Rather Very Intelligent System), Shubhayu Chakraborty's AI assistant for his portfolio website. You embody the sophisticated, helpful, and slightly witty personality of Tony Stark's AI assistant.

CONTEXT ABOUT SHUBHAYU:
- Full-stack developer and tech enthusiast
- Student passionate about AI, web development, and innovation
- Creates projects inspired by Marvel/Stark Industries theme
- Has experience with React, Node.js, Python, AI/ML
- Currently building a portfolio with Stark Tech branding
- Contact email: shubhayuchakraborty69@gmail.com
- Portfolio features: glass morphism design, advanced animations, contact form with email integration

YOUR PERSONALITY:
- Professional yet friendly, like Tony Stark's JARVIS
- Knowledgeable about technology and Shubhayu's work
- Helpful and efficient in responses
- Use occasional tech/Marvel references but keep it professional
- Address users respectfully and offer assistance

CAPABILITIES:
- Answer questions about Shubhayu's skills and projects
- Provide information about his technical expertise
- Guide users to relevant sections of the portfolio
- Offer to help with contact or project inquiries
- Discuss technology and development topics

Keep responses concise (2-3 sentences max unless asked for detail), helpful, and maintain the JARVIS personality.
`;

const generateJARVISResponse = async (userMessage) => {
  try {
    const prompt = `${JARVIS_CONTEXT}

User message: "${userMessage}"

Respond as JARVIS:`;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    console.log("🤖 JARVIS generated response for:", userMessage);
    return text;
  } catch (error) {
    console.error("❌ JARVIS AI error:", error);

    // Fallback responses for common scenarios
    const fallbackResponses = {
      greeting:
        "Hello! I'm JARVIS, Shubhayu's AI assistant. How may I assist you today?",
      contact:
        "You can reach Shubhayu at shubhayuchakraborty69@gmail.com or use the contact form on this website.",
      skills:
        "Shubhayu specializes in full-stack development with React, Node.js, TypeScript, Python, and AI/ML technologies. He's currently a student passionate about building innovative web applications and AI solutions.",
      projects:
        "Shubhayu has created several innovative projects including this AI-powered portfolio with JARVIS integration. You can view his latest work at https://wealth-ruby.vercel.app/",
      qualifications:
        "Shubhayu is currently a student pursuing his studies while actively developing his expertise in full-stack development. He has hands-on experience with modern technologies like React, Node.js, Python, and AI/ML frameworks. His practical skills are demonstrated through projects like this AI-integrated portfolio.",
      about:
        "Shubhayu Chakraborty is a passionate student and full-stack developer who combines academic learning with practical project development. He's skilled in modern web technologies and AI integration.",
      default:
        "I apologize, but I'm experiencing technical difficulties. Please try asking again or contact Shubhayu directly.",
    };

    // Enhanced keyword matching for fallbacks
    const message = userMessage.toLowerCase();
    if (
      message.includes("hello") ||
      message.includes("hi") ||
      message.includes("hey")
    ) {
      return fallbackResponses.greeting;
    } else if (
      message.includes("qualification") ||
      message.includes("education") ||
      message.includes("degree") ||
      message.includes("study")
    ) {
      return fallbackResponses.qualifications;
    } else if (
      message.includes("contact") ||
      message.includes("email") ||
      message.includes("reach")
    ) {
      return fallbackResponses.contact;
    } else if (
      message.includes("skill") ||
      message.includes("technology") ||
      message.includes("tech")
    ) {
      return fallbackResponses.skills;
    } else if (
      message.includes("project") ||
      message.includes("work") ||
      message.includes("portfolio")
    ) {
      return fallbackResponses.projects;
    } else if (
      message.includes("about") ||
      message.includes("who") ||
      message.includes("tell me")
    ) {
      return fallbackResponses.about;
    } else {
      return fallbackResponses.default;
    }
  }
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
