// Validation middleware for contact form
export const validateContactForm = (req, res, next) => {
  const { name, email, message } = req.body;
  const errors = [];

  // Log incoming data for debugging
  console.log("📨 Incoming contact form data:", { name, email, message });

  // Validate name
  if (!name || typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  // Validate email
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!email || !emailRegex.test(email)) {
    errors.push("Please provide a valid email address");
  }

  // Validate message
  if (!message || typeof message !== "string" || message.trim().length < 10) {
    errors.push("Message must be at least 10 characters long");
  }

  // Check for excessive length
  if (name && name.length > 100) {
    errors.push("Name must be less than 100 characters");
  }

  if (email && email.length > 100) {
    errors.push("Email must be less than 100 characters");
  }

  if (message && message.length > 1000) {
    errors.push("Message must be less than 1000 characters");
  }

  if (errors.length > 0) {
    console.log("❌ Validation errors:", errors);
    return res.status(400).json({
      success: false,
      message: "Validation failed",
      errors,
    });
  }

  // Sanitize inputs
  req.body.name = name.trim();
  req.body.email = email.trim().toLowerCase();
  req.body.message = message.trim();

  console.log("✅ Validation passed");
  next();
};
