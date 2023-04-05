const mongoose = require("mongoose");
const RegisterSchema = require("./RegisterModel");

const LoginSchema = mongoose.Schema(
  {
    email: {
      type: "String",
      required: true,
    },
    Password: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

const Login = mongoose.model("Login", LoginSchema);
module.exports = Login;
