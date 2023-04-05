const express = require("express");
const router = express.Router();

// const getAllQuotations = require("../controller/QuotationController");
// const getQuotationById = require("../controller/QuotationController");
const { createQuotation } = require("../controller/QuotationController");
// const updateQuotation = require("../controller/QuotationController");
// const {deleteQuotation}= require("../controller/QuotationController");

router.route("/api/createQuotation").post(createQuotation);

module.exports = router;
