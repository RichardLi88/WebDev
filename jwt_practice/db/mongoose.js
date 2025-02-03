import mongoose from "mongoose";

function connectDB() {
  try {
    const conn = mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to mongoose");
  } catch (err) {
    console.log(`connection failed: ${err.message}`);
  }
}

export default connectDB;
