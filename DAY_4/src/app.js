const express = require("express");
const app = express();
const routes = require("./routes/index.routes");

app.use(express.urlencoded({ extended: true }));

app.set('view engine' , 'ejs')
app.set('views' , './src/views')

app.use("/", routes);

module.exports = app;
