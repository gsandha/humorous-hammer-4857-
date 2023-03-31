const formValidator = (req,res,next)=>{
    // console.log("hi")
    const {name,email,gender,password,age,city} = req.body
    if(!name || !email || !gender || !password || !age || !city){
        res.status(400).send({msg:"form is invalid please fill all the fields"})
    }else{
        next()
    }
}
const formValidatorLogin = (req,res,next)=>{
    const {email} = req.body
    if(!email){
        res.status(400).send({msg:"form is invalid please fill all the fields"})
    }else{
        next()
    }
}
module.exports = {formValidator,formValidatorLogin}