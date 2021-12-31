const mongoose = require("mongoose");
const url =
  process.env.MONGODB_CONNECTION_LOCAL != undefined
    ? process.env.MONGODB_CONNECTION_LOCAL
    : "mongodb://localhost:27017/quora-clone";
const connectDb = () => {
  mongoose
    .connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection) => console.log("DB Connection Successful"))
    .catch((error) => console.log(error));
};
module.exports = connectDb;
