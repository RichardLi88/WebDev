import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./config/db.js";

dotenv.config();

const app = express();

app.get("/", (req, res) => {
  res.send("API is running...");
});

app.listen(5000, () => {
  ConnectDB();
  console.log("Server started at http://localhost:5000");
});

//4UA0T6hQMiWOTelu
