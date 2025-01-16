const express = require('express');
const route = express.Router()

route.get('/',(req,res)=>{
    res.send("Hello World")
})
route.get('/user',(req,res)=>{
    res.send("Hello Aniket ji")
})

module.exports = route;