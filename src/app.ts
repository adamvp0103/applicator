import dotenv from "dotenv";
import mongoose from "mongoose";
import express from "express";

dotenv.config();

try {
  mongoose.connect(process.env.MONGODB_URI || "");
  console.log("MongoDB connected successfully");
} catch (error) {
  console.error(`Error connecting to MongoDB: ${error}`);
  process.exit(1);
}

const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send("Hello, world!");
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}...`);
});
