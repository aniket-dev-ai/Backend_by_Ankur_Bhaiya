const express = require("express");
const app = express();
const userRouter = require("./routes/user.route");

app.set("view engine", "ejs");
app.set("views", "./src/views");
app.use(express.urlencoded({ extended: true }));2

app.use(express.json());
app.use("/", userRouter);


module.exports = app;
