const express = require("express")
const router = express.Router()
const indexControllers = require("../Controller/index.controller")


router.get("/",indexControllers.showHomeController)
router.post("/create",indexControllers.createUser)

module.exports = router