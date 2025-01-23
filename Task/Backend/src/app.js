const express = require("express");
const app = express();
const path = require("path");
const indexRoutes = require("./Routes/index.route");

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({extended:true}))

app.use("/", indexRoutes);

module.exports = app;
