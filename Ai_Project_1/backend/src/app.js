const express = require("express");
const app = express();
const cors = require("cors");
const route = require("./Router/Routes");

app.use(require("morgan")("dev"));

app.use(
  cors({
    origin: "http://localhost:5173", // React app URL
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);
app.use(express.json({ limit: "50mb" }));
app.use(express.urlencoded({ extended: true, limit: "50mb" }));
console.log(1);
app.use("/api/v1/project", route);

module.exports = app;
