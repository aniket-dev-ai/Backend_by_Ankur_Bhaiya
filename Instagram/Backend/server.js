require("dotenv").config(); // ✅ Sabse pehle env load karo

const express = require("express");
const cors = require("cors");
const authRoutes = require("./routes/UserRoutes");
const postRoutes = require("./routes/PostRoutes");

require("./config/db").connect(); // ✅ Database connection

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api/auth", authRoutes);
app.use("/api/post", postRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log("Port is running on " + PORT);
});
