import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "./middleware/error.middleware.js";

const app = express();


// =======================
// 🔧 Basic configuration
// =======================
app.use(cors());
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));

// =======================
// 🌍 CORS configuration
// =======================
app.use(
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["http://localhost:5173"],
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS", "PATCH"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// =======================
// ❌ Error Handler
// =======================
app.use(errorHandler);

// =======================
// 🚀 Test Route
// =======================
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

export default app;