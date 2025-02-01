import dotenv from "dotenv";
import express from "express";
import ConnectDB from "./config/db.js";
import router from "./routes/productRoute.js";
import cors from "cors";
dotenv.config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 5000;

const corsOptions = {
  origin: `http://localhost:5173`,
};
app.use(cors(corsOptions));

app.use("/api/products", router);

app.listen(PORT, () => {
  ConnectDB();
  console.log(`Server started at http://localhost:${PORT || 5000}`);
});
