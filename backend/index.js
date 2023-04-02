const express=require("express")
const connection=require("./configs/db")
require("dotenv").config()
const cors=require("cors")
const userRouter = require("./Routes/auth.routes")
const app=express()
app.use(express.json())
const port=process.env.port|| 9090

app.use(cors())
app.use("/users",userRouter)
app.get("/",(req,res)=>{
    res.send("Welcome to homepage")
})
app.listen(port,async()=>{
    try {
        await connection
        console.log("Connnection succesfull")
    } catch (error) {
      console.log(error)  
    }
    console.log(`Running at port ${port}`)
})