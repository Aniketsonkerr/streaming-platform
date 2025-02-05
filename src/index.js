import mongoose from "mongoose";
import express from "express";
import cors from "cors";
import dotenv from "dotenv";

dotenv.config({ path: "../.env" });

const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(` server running on port ${port} `);
});

app.use(express.json());
app.use(cors());
app.use(express.urlencoded());
app.use(express.static("public"));

mongoose.connect(`${process.env.MONGODB_URI}`);

const db = mongoose.connection;

db.on("open", () => {
  console.log("Database connection succesfull");
});

db.on("error", () => {
  console.log("Database connection failed");
});
