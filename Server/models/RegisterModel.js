const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const RegisterSchema = mongoose.Schema(
  {
    userName: {
      type: "String",
      required: true,
    },
    email: {
      type: "String",
      required: true,
      unique: true,
    },
    Password: {
      type: "String",
      required: true,
    },
    confirmPassword: {
      type: "String",
      required: true,
    },
  },
  { timestamps: true }
);

RegisterSchema.pre("save", async function (next) {
  if (!this.isModified) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  this.confirmPassword = await bcrypt.hash(this.confirmPassword, salt);
});

RegisterSchema.methods.matchPassword = async function (enteredPassword) {
  return await bcrypt.compare(enteredPassword, this.Password);
};

const User = mongoose.model("Users", RegisterSchema);
module.exports = User;
