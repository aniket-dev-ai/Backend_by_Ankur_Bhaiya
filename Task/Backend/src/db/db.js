const mongoose = require("mongoose");

const connect = () => {
  mongoose
    .connect("mongodb://127.0.0.1:27017/Task1")
    .then(() => {
      console.log("Db Connected");
    })
    .catch((err) => console.log(err));
};

module.exports = connect;
