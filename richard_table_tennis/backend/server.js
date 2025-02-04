import express from "express";
import dotenv from "dotenv";
import connectDB from "./db/db.js";
import authRouter from "./routes/authRoute.js";
import cookieParser from "cookie-parser";
import lessonRouter from "./routes/lessonRoute.js";

const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();

app.use("/api/user", authRouter);
app.use("/api/lessons", lessonRouter);

app.listen(5000, () => {
  connectDB();
  console.log("Connected to http://localhost:5000");
});
