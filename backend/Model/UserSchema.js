const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  id: {
    type: Number,
  },
  name: {
    type: String,
  },
  category: {
    type: String,
  },
  subcategory: {
    type: String,
  },
  createdAt: {
    type: Date,
  },
  updatedAt: {
    type: Date,
  },
  price: {
    type: Number,
  },
  sale_price: {
    type: Number,
  },
});

const Data = mongoose.model("Data", userSchema);

module.exports = Data;
