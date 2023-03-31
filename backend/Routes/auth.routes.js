const express = require("express")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
require("dotenv").config()
const {userModel,userotp} = require("../Model/user.model")
const {formValidator,formValidatorLogin} = require("../Middlewares/formValidator.middleware")
const nodemailer = require("nodemailer");


// email config
const tarnsporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
})


userRouter.post("/register",formValidator,async(req,res)=>{
    const {email,password} = req.body
    const hashedPass = bcrypt.hashSync(password,10)
    const userData = {...req.body,password:hashedPass}
    try {
        const checkedData = await userModel.find({email:email})
        if(checkedData.length>0){
            res.status(200).send({msg:"User already exist, please login"})
        }else{
            const setuserData = new userModel(userData)
            await setuserData.save()
            res.status(200).send({msg:"registerd successfully"})
        }
    } catch (error) {
        res.status(400).send({msg:"registeration failed"})
    }
})
userRouter.post("/login",formValidatorLogin,async(req,res)=>{
    const {email,otp} = req.body;
    if(!otp || !email){
        res.status(400).json({ error: "Please Enter Your OTP and email" })
    try {
        const userData = await userModel.find({email})
        const OTP = userData[0].otp
        if(OTP===otp){
            res.status(200).send({msg:"login successfully",token:jwt.sign({userId:userData[0]._id},"user")})
        }else{
            res.status(400).json({error:"Invalid Otp"})
        }
    } catch (error) {
        res.status(400).send({msg:"Login error"})
    }
}
})



userRouter.post("/verify",formValidatorLogin,async(req,res)=>{
    const { email } = req.body;
    try {
        const presuer = await userModel.findOne({ email: email });
        if (presuer) {
            const OTP = Math.floor(1000 + Math.random() * 9000);

            const existEmail = await userotp.findOne({ email: email });


            if (existEmail) {
                const updateData = await userotp.findByIdAndUpdate({ _id: existEmail._id }, {
                    otp: OTP
                }, { new: true }
                );
                await updateData.save();

                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Eamil For Otp Validation",
                    text: `OTP:- ${OTP}`
                }


                tarnsporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })

            } else {

                const saveOtpData = new userotp({
                    email, otp: OTP
                });

                await saveOtpData.save();
                const mailOptions = {
                    from: process.env.EMAIL,
                    to: email,
                    subject: "Sending Eamil For Otp Validation",
                    text: `OTP:- ${OTP}`
                }

                tarnsporter.sendMail(mailOptions, (error, info) => {
                    if (error) {
                        console.log("error", error);
                        res.status(400).json({ error: "email not send" })
                    } else {
                        console.log("Email sent", info.response);
                        res.status(200).json({ message: "Email sent Successfully" })
                    }
                })
            }
        } else {
            res.status(400).json({ error: "This User Not Exist In our Db" })
        }
    } catch (error) {
        res.status(400).json({ error: "Invalid Details", error })
    }
})

module.exports = userRouter