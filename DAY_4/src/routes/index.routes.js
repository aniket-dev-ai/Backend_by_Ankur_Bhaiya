const express = require("express");
const router = express.Router();
const profile = require("../controller/profile.controller")

router.get("/", (req, res) => {
  res.send("Hello World");
});
router.get("/user", profile.user1);
router.post('/submit',profile.registeruser)
module.exports = router;
