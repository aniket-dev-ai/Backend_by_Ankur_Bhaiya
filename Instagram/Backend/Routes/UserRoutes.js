const express = require("express");
const { register, login ,forgotPassword , resetPassword} = require("../controller/authController");
const { auth } = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/me", auth, (req, res) => {
  res.status(200).json({ message: "Protected Route Accessed", user: req.user });
});
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);


module.exports = router;
