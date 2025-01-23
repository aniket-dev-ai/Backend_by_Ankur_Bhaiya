const app = require("./src/app.js");
const connect = require("./src/db/db");

connect();

app.listen(3000, () => {
  console.log("Server is Running");
});
