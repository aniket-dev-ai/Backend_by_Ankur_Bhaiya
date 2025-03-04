const app = require("./src/app");
require("dotenv").config();

require("./src/DataBase/Db").connect();

app.listen(process.env.PORT, () => {
  console.log(`Server is running on port ${process.env.PORT}`);
});
