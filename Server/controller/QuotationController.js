const Quotation = require("../models/Quotation");

// GET /quotations - returns all quotations
exports.getAllQuotations = (req, res, next) => {
  Quotation.find()
    .then((quotations) => {
      res.status(200).json(quotations);
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while retrieving quotations." });
    });
};

// GET /quotations/:id - returns a single quotation by id
exports.getQuotationById = (req, res, next) => {
  const quotationId = req.params.id;
  Quotation.findById(quotationId)
    .then((quotation) => {
      if (!quotation) {
        res.status(404).json({ message: "Quotation not found." });
      } else {
        res.status(200).json(quotation);
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while retrieving the quotation." });
    });
};

// POST /quotations - creates a new quotation
exports.createQuotation = (req, res, next) => {
  const quotation = new Quotation({
    vendorName: req.body.vendorName,
    items: req.body.items,
  });
  quotation
    .save()
    .then((createdQuotation) => {
      res.status(201).json({
        message: "Quotation created successfully!",
        quotation: createdQuotation,
      });
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while creating the quotation." });
    });
};

// PUT /quotations/:id - updates a quotation by id
exports.updateQuotation = (req, res, next) => {
  const quotationId = req.params.id;
  const updatedQuotation = new Quotation({
    _id: quotationId,
    vendorName: req.body.vendorName,
    items: req.body.items,
  });
  Quotation.updateOne({ _id: quotationId }, updatedQuotation)
    .then((result) => {
      if (result.nModified > 0) {
        res.status(200).json({ message: "Quotation updated successfully!" });
      } else {
        res.status(404).json({ message: "Quotation not found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while updating the quotation." });
    });
};

// DELETE /quotations/:id - deletes a quotation by id
exports.deleteQuotation = (req, res, next) => {
  const quotationId = req.params.id;
  Quotation.deleteOne({ _id: quotationId })
    .then((result) => {
      if (result.deletedCount > 0) {
        res.status(200).json({ message: "Quotation deleted successfully!" });
      } else {
        res.status(404).json({ message: "Quotation not found." });
      }
    })
    .catch((error) => {
      console.log(error);
      res
        .status(500)
        .json({ message: "An error occurred while deleting the quotation." });
    });
};
