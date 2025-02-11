const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true },
    phone: { type: String, required: true, unique: true },
    username: { type: String, required: true, unique: true, trim: true },
    password: { type: String, required: true, minlength: 6 },
    dob: { type: Date, required: true },
    gender: { type: String,  required: true },
    bio: { type: String, maxlength: 300 },
    termsAccepted: { type: Boolean, required: true },
  },
  { timestamps: true }
);

module.exports = mongoose.model("User", UserSchema);
