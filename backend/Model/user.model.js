const mongoose = require("mongoose");
// const validator = require("validator");
const userSchema = mongoose.Schema({
  name: String,
  email: String,
  gender: String,
  password: String,
  age: Number,
  city: String
});

const userOtpSchema = new mongoose.Schema({
    email:{
        type:String,
        required:true,
        unique:true,
    },
    otp:{
        type:String,
        required:true
    }
});


// user otp model
const userModel = mongoose.model("userModel",userSchema)
const userotp =   mongoose.model("userotps",userOtpSchema);

module.exports = {userotp,userModel}
// dnlkpoixenzfjybl google app password for gmail