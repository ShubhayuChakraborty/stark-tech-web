import express from "express";
import cors from "cors";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import jarvisRoutes from "./routes/jarvis.js";

// Load environment variables
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3001;

// Security middleware
app.use(helmet());

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // limit each IP to 5 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
  standardHeaders: true,
  legacyHeaders: false,
});

// CORS configuration
app.use(
  cors({
    origin: [
      "http://localhost:8080",
      "https://stark-tech-portfolio-o9cd6ppux.vercel.app",
      /^https:\/\/stark-tech-portfolio.*\.vercel\.app$/,
    ],
    credentials: true,
  })
);

// Body parsing middleware
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ extended: true, limit: "10mb" }));

// Apply rate limiting to specific routes
app.use("/api/contact", limiter);

// Separate rate limiting for JARVIS (more permissive)
const jarvisLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: 20, // limit each IP to 20 requests per windowMs for chat
  message: "Too many chat requests from this IP, please wait a moment.",
  standardHeaders: true,
  legacyHeaders: false,
});

app.use("/api/jarvis", jarvisLimiter);

// Routes
app.use("/api/contact", contactRoutes);
app.use("/api/jarvis", jarvisRoutes);

// Health check endpoint
app.get("/api/health", (req, res) => {
  res.status(200).json({ status: "OK", message: "Stark Tech API is running" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({
    success: false,
    message: "Something went wrong!",
  });
});

// 404 handler
app.use("*", (req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found",
  });
});

app.listen(PORT, () => {
  console.log(`🚀 Stark Tech API server running on port ${PORT}`);
  console.log(`📧 Email service configured with Gmail`);
});

// Export for Vercel serverless functions
export default app;
