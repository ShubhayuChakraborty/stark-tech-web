export default async function handler(req, res) {
  // Enhanced CORS and security headers
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS");
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

  res.status(200).json({
    success: true,
    message: "API is running",
    timestamp: new Date().toISOString(),
    endpoints: ["/api/health", "/api/contact-send", "/api/jarvis-chat"],
    method: req.method,
    userAgent: req.headers["user-agent"] || "unknown",
    origin: req.headers["origin"] || "unknown",
  });
}
