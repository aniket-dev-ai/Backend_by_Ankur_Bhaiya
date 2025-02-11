const express = require("express");
const cors = require("cors"); // ✅ CORS ko import karein
const app = express();
const router = require("./Router/router");

app.use(express.json()); // ✅ JSON parsing middleware sabse pehle hona chahiye!
app.use(express.urlencoded({ extended: true })); // ✅ Form-data parsing ke liye

app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  })
);

app.use("/", router); // ✅ Ab middleware ke baad likha hai!

module.exports = app;
