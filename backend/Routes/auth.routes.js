const express = require("express")
const userRouter = express.Router()
const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const userModel = require("../Model/user.model")
const {formValidator,formValidatorLogin} = require("../Middlewares/formValidator.middleware")

userRouter.post("/register",formValidator,async(req,res)=>{
    const {email,password} = req.body
    const hashedPass = bcrypt.hashSync(password,10)
    const userData = {...req.body,password:hashedPass}
    try {
        const checkedData = await userModel.find({email:email})
        if(checkedData.length>0){
            res.status(400).send({msg:"User already exist, please login"})
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
    const {email,password} = req.body
    try {
        const userData = await userModel.find({email})
        const hashedPass = userData[0].password
        const decoded = bcrypt.compareSync(password,hashedPass)
        if(decoded){
            res.status(200).send({msg:"login successfully",token:jwt.sign({userId:userData[0]._id},"user")})
        }else{
            res.status(400).send({msg:"No account exist"})
        }
    } catch (error) {
        res.status(400).send({msg:"Login failed"})
    }
})

module.exports = userRouter