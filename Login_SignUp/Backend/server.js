const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcrypt");
const registerModel = require("./models/register");

const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect("mongodb://127.0.0.1:27017/login-signup")
  .then(() => console.log("Mongoose Connected"))
  .catch(() => console.log("Mongoose Connection Failed"));

// 🟢 REGISTER ROUTE  
app.post("/register", async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await registerModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new registerModel({ name, email, password: hashedPassword });

    await newUser.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (error) {
    res.status(500).json({ message: "User creation failed", error: error.message });
  }
});

// 🔵 LOGIN ROUTE  
app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await registerModel.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "User not found" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.status(200).json({ message: "Login successful" });
  } catch (error) {
    res.status(500).json({ message: "Login failed", error: error.message });
  }
});

app.listen(5000, () => console.log("Server started at port 5000"));
