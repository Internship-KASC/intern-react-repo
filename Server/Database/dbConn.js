require("dotenv").config;
const mongoose = require("mongoose");
const uri = process.env.MONGO_URI;

const connectDB = (req, res) => {
  mongoose
    .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
    .then((res) => {
      console.log("Connection success");
    })
    .catch((err) => {
      console.error(err.message);
    });
};

module.exports = { connectDB };
