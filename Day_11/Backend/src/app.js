const express = require("express")
const app = express()
const cookieParser = require("cookie-parser")
const env = require("dotenv").config()
const indexRoutes = require("./Routes/index.routes")
const cors = require("cors")


app.set("view engine","ejs")
app.set('views','./src/views')
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())




app.use("/",indexRoutes)






module.exports = app