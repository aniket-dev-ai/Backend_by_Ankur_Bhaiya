const userModel = require("../models/useModel")


module.exports.showHomeController = async (req, res) => {
    const data = await userModel.find()
    res.json(data)
}

module.exports.createUser = async (req, res) => {
    try {
        const { username, email, password } = req.body;
        const user = await userModel.create({
            username,
            email,
            password
        })
        res.json(user)
    } catch (error) {
        console.log(error)
    } 
}