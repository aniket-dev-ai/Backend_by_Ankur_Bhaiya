const cors = require("cors");
const express = require("express");
const app = require("./src/app");



require("./src/Db/Db").connect();
app.listen(5000, () => {
  console.log("Server is running on port 5000");
});
