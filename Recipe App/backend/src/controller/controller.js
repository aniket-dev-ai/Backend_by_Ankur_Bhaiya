const jwt = require("jsonwebtoken");
const User = require("../model/model");
const bcrypt = require("bcrypt");

exports.register = async (req, res) => {
  try {
    console.log("📩 Request Body:", req.body); // 🔥 Debugging ke liye print karein

    const {
      fullName,
      email,
      phone,
      username,
      password,
      confirmPassword,
      dob,
      gender,
      bio,
      termsAccepted,
    } = req.body;

    if (
      !fullName ||
      !email ||
      !phone ||
      !username ||
      !password ||
      !dob ||
      !gender ||
      !termsAccepted
    ) {
      console.log("⚠ Missing Fields!");
      return res
        .status(400)
        .json({ message: "All required fields must be filled!" });
    }

    if (password !== confirmPassword) {
      console.log("⚠ Passwords do not match!");
      return res.status(400).json({ message: "Passwords do not match!" });
    }

    const existingUser = await User.findOne({
      $or: [{ email }, { username }, { phone }],
    });
    if (existingUser) {
      console.log("⚠ User already exists!");
      return res
        .status(400)
        .json({
          message: "User with this email, username, or phone already exists!",
        });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("🔑 Password Hashed Successfully!");

    const newUser = new User({
      fullName,
      email,
      phone,
      username,
      password: hashedPassword,
      dob,
      gender,
      bio,
      termsAccepted,
    });

    await newUser.save();
    console.log("✅ User Registered Successfully:", newUser);

    return res
      .status(201)
      .json({ message: "User registered successfully!", user: newUser });
  } catch (error) {
    console.error("❌ Error in Register Route:", error); // 🔥 Properly log error
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      console.log("⚠ Email aur Password zaroori hai!");
      return res
        .status(400)
        .json({ message: "Email aur Password zaroori hai!" });
    }
    const existingUser = await User.findOne({ email });
    if (!existingUser) {
      console.log("⚠ Invalid credentials! Dubara check karein.");
      return res
        .status(400)
        .json({ message: "Invalid credentials! Dubara check karein." });
    }
    const passwordMatch = await bcrypt.compare(password, existingUser.password);
    if (!passwordMatch) {
      console.log("⚠ Invalid credentials! Dubara check karein.");
      return res
        .status(400)
        .json({ message: "Invalid credentials! Dubara check karein." });
    }
    const token = jwt.sign(
      { email: existingUser.email, id: existingUser._id },
      "Secret",
      { expiresIn: "1h" }
    );
    console.log("🔑 Token Generated:", token);
    res.cookie("token", token, { httpOnly: true });
    return res
      .status(200)
      .json({ message: "Login Successful!", user: existingUser });
  } catch (error) {
    console.error("❌ Error in Login Route:", error); // 🔥 Properly log error
    return res
      .status(500)
      .json({ message: "Server Error", error: error.message });
  }
};
