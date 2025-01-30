import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./config/db.js";
import router from "./routes/productRoute.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use("/api/products", router);

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server started at http://localhost:${PORT || 5000}`);
});
