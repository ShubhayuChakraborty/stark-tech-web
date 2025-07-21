// Validation middleware for JARVIS chat messages
export const validateJARVISMessage = (req, res, next) => {
  const { message } = req.body;
  const errors = [];

  // Log incoming data for debugging
  console.log("🤖 Incoming JARVIS message:", { message });

  // Validate message
  if (!message || typeof message !== "string") {
    errors.push("Message is required and must be a string");
  } else if (message.trim().length < 1) {
    errors.push("Message cannot be empty");
  } else if (message.trim().length > 500) {
    errors.push("Message must be less than 500 characters");
  }

  // Check for potentially harmful content (basic filtering)
  const bannedWords = ["hack", "exploit", "virus", "malware", "spam"];
  const messageWords = message.toLowerCase().split(" ");
  const hasBannedWords = bannedWords.some((word) =>
    messageWords.some((msgWord) => msgWord.includes(word))
  );

  if (hasBannedWords) {
    errors.push("Message contains inappropriate content");
  }

  if (errors.length > 0) {
    console.log("❌ JARVIS validation errors:", errors);
    return res.status(400).json({
      success: false,
      message: "Message validation failed",
      errors,
    });
  }

  // Sanitize input
  req.body.message = message.trim();

  console.log("✅ JARVIS validation passed");
  next();
};
