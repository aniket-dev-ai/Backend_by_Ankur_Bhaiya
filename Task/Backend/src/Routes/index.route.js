const express = require("express");
const controll = require("../controllers/index.controller.js");
const router = express.Router();
router.get("/", controll.indexcontrol);

router.post("/create", controll.createcontrol);

router.get("/users",controll.showdatacontrol)

module.exports = router;
