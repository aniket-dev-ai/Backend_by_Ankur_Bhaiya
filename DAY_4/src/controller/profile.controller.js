const { query } = require("express");
const driverModel = require("../db/db");
module.exports.user1 = (req, res) => {
  res.render("index");
};

module.exports.registeruser = async (req, res) => {
  //   console.log(req, query);
  const { name, mobileNumber, password } = req.body;

  const newDriver = new driverModel({
    name: name,
    mobileNumber: mobileNumber,
    password: password,
  });
  await newDriver.save();
  res.send(newDriver);
};
