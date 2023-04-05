const User = require("../models/RegisterModel");
const asyncHandler = require("express-async-handler");
const generateToken = require("../Database/generateToken");

const RegisterUser = asyncHandler(async (req, res) => {
  const { userName, email, Password, confirmPassword } = req.body;

  if (!userName || !email || !Password || !confirmPassword) {
    res.status(400);
    throw new Error("Please enter all fields");
  }

  const userExists = await User.findOne({ email });

  if (userExists) {
    res.status(400);
    throw new Error("User already exists");
  }

  const user = await User.create({
    userName,
    email,
    Password,
    confirmPassword,
  });

  if (user) {
    res.status(201).json({
      _id: user.id,
      userName: user.userName,
      email: user.email,
      Password: user.Password,
      confirmPassword: user.confirmPassword,
      token: generateToken(user._id),
    });
  } else {
    res.status(400);
    throw new Error("User not Found");
  }
});

// const authUser = asyncHandler(async (req, res) => {
//   const { email, Password } = req.body;

//   const user = await User.findOne({ email });

//   if (user && (await user.matchPassword)) {
//     res.json({
//       _id: user._id,
//       userName: user.userName,
//       email: user.email,
//       Password: user.Password,
//       confirmPassword: user.confirmPassword,
//       token: generateToken(user._id),
//     });
//   } else {
//     res.status(401);
//     throw new Error("Invalid Email or Password");
//   }
// });

module.exports = RegisterUser;
//module.exports = authUser;
