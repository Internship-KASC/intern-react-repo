const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  itemName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 0,
  },
});

const quotationSchema = new mongoose.Schema({
  vendorName: {
    type: String,
    required: true,
  },
  items: {
    type: [itemSchema],
    required: true,
  },
});

function itemsLimit(val) {
  return val.length <= 10;
}

const Quotation = mongoose.model("Quotation", quotationSchema);

module.exports = Quotation;
