const mongoose = require("mongoose");

mongoose
  .connect("mongodb://127.0.0.1:27017/kodr")
  .then(() => {
    console.log("Connected to DataBase");
  })
  .catch((err) => {
    console.log("connection failed");
  });

module.exports = mongoose;

const driverSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  mobileNumber: {
    type: String,
  },
  password: {
    type: String,
  },
});

const driverModel = mongoose.model("driver", driverSchema);

module.exports = driverModel;
