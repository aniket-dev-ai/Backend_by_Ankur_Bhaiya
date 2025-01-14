

module.exports.indexController = (req,res) => {
    res.send('Hello world')
}


module.exports.aboutController = (req, res) => {
     
    req.send("about page")
    };

