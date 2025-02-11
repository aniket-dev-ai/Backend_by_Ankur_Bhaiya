const express = require("express");
const Router = express.Router();
const controller = require("../controller/controller");

Router.post("/register", controller.CreateUser);
Router.post("/login", controller.LoginUser);

module.exports = Router;