const mongoose = require("mongoose");
// require("dotenv").config();

const connectDatabase = async () => {
  // console.log()
  await mongoose
    .connect(`${process.env.MONGO_DB_URI}:${process.env.MONGO_DB_PORT}`)
    .then((data) => console.log(data.connection.host));
};
module.exports = connectDatabase;
