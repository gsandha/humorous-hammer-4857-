const mongoose = require("mongoose");

const OrdersSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  color: String,
  size: String,
  brand: String,
  category: String,
  discount: {
    type: Number,
    default: 0,
  },
});

const Orders = mongoose.model("Orders", OrdersSchema);

module.exports = Orders;
