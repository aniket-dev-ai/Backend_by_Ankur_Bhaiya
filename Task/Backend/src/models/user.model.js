const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  bio: String,
  imgUrl: String,
});

module.exports = mongoose.model("user", userSchema);
