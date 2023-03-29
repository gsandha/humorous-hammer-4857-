const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
  age: Number,
  city: String
});

const userModel = mongoose.model("userModel",userSchema)

module.exports = userModel