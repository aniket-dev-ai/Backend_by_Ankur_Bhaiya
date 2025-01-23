const userModel = require("../models/user.model");

module.exports.indexcontrol = (req, res) => {
  //   res.send("Hello World");
  res.render("index");
};

module.exports.createcontrol = async (req, res) => {
    console.log(req.body);
    const { name, email, bio, imgUrl } = req.body;

    const newUser = await userModel.create({
        name,
    email,
    bio,
    imgUrl,
  });
//   res.send("Create Page");
  res.redirect("/users");
};


module.exports.showdatacontrol = async(req,res)=>{
    const users = await userModel.find()
    res.render("users",{users})
}