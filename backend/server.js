const dotenv = require("dotenv");
dotenv.config({ path: "./config.env" });

const connectDb = require("./db");
const app = require("./app");
connectDb();
const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`App Running on port ${port}...`);
});
