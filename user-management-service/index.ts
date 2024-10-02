import express from "express";
import mongoose from "mongoose";
import jwt from "jsonwebtoken";

const app = express();

app.use(express.json());

mongoose.connect("mongodb://mongo:27017/users", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.get("/", (req, res) => {
  res.send("User Management Service");
});

app.listen(3000, () => {
  console.log("User Management service is running on port 3000");
});
