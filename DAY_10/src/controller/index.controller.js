const bcrypt = require("bcrypt");
const User = require("../Models/user.model,");

exports.PostForm = (req, res) => {
  res.render("register");
};

exports.Homepage = (req, res) => {
  res.render("index");
};

module.exports.postRegisterController = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const hatchedPassword = await bcrypt.hash(password, 10);
    await User.create({
      username,
      email,
      password: hatchedPassword,
    });
    res.redirect("/");
  } catch (error) {
    console.log(error);
  }
};
