const app = require("./src/app");
require("dotenv").config();

require("./src/database/db").connect();

app.listen(process.env.PORT, () => {
    console.log(`Server is running on PORT ${process.env.PORT}`);
})
