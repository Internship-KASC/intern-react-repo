const express = require("express");
const router = express.Router();

const RegisterUser = require("../controller/RegisterController");
//const authUser = require("../controller/RegisterController");
// const { notFound, errorHandler } = require("../middlewares/errorHandler");

router.route("/api/register").post(RegisterUser);
//router.route("/api/login").post(authUser);

module.exports = router;
