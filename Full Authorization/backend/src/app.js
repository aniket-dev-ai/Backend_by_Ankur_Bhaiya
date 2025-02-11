const express = require("express");
const app = express();
const cors = require("cors");
const router = require("./router/router");
const cookieParser = require("cookie-parser");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET, POST, PUT, DELETE, OPTIONS",
  })
);
app.use(cookieParser());

app.use("/", router);

module.exports = app;
