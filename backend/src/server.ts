import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db";
import serviceRoutes from "./routes/serviceRoutes";
import authRoutes from "./routes/authRoutes";
import bookingsRoutes from "./routes/bookingsRoutes";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.CLIENT_URL || "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

app.use("/api/auth", authRoutes);
app.use("/api/services", serviceRoutes);
app.use("/api/bookings", bookingsRoutes);
app.use("/api/services", serviceRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));