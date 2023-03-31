import React, { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
// import {registerfunction} from "../services/Apis";
import {useDispatch, useSelector} from "react-redux"
import {useNavigate} from "react-router-dom"
import "../Styles/mix.css"
import { registerUserData } from '../Redux/Authentication/auth.actions';

const Register = () => {
  const [passhow,setPassShow] = useState(false);
  const [inputdata,setInputdata] = useState({});
  const {msg,isAuth,isError,isLoading} = useSelector((store)=>store.authManager)
  console.log(msg)
  const navigate = useNavigate();
  // console.log(inputdata)

  // dispatch function
  const dispatch = useDispatch()

  // setinputvalue
  const handleChange = (e)=>{
    const {name,value} = e.target;
    setInputdata({...inputdata,[name]:value})
  }


  // register data
  const handleSubmit = async(e)=>{
    e.preventDefault();
    const {fname,email,password,gender,age,city} = inputdata;

    if(fname === ""){
        console.log("ho")
        toast.error('Enter your name');
    }else if(email === ""){
      toast.error("Enter Your Email")
    }else if(!email.includes("@")){
      toast.error("Enter Valid Email")
    }else if(password === ""){
      toast.error("Enter Your Password")
    }else if(password.length < 6){
      toast.error("password length minimum 6 character")
    }else if(gender===undefined || gender===""){
      toast.error("Please provide your gender")
    }else if(age===undefined || age===""){
      toast.error("Please provide your age")
    }else if(city===undefined || city===""){
      toast.error("Please provide your city")
    }else{
      dispatch(registerUserData(inputdata))
      if(msg==="registerd successfully"){
        toast.success("you are now the member of cartify")
      }else if(msg==="User already exist, please login"){
        toast.error("you are already the member of cartify Please Login!")
      }else{
        toast.error("there is an error while registering the data Please Signup later!")
      }
    }
  }


  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Sign Up</h1>
            <p style={{textAlign:"center"}}>Signup to enjoy all the Cartify benefits</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="fname">Name</label>
              <input type="text" name="name" onChange={handleChange} placeholder='Enter Your Name' />
            </div>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input type="email" name="email"  onChange={handleChange}  placeholder='Enter Your Email Address' />
            </div>
            <div className="form_input">
              <label htmlFor="password">Password</label>
              <div className='two'>
              <input type={!passhow ? "password" : "text"} name="password"   onChange={handleChange}  placeholder='Enter Your password' />
              <div className='showpass' onClick={()=>setPassShow(!passhow)} >
              {!passhow ? "Show" : "Hide"}
              </div>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="email">Gender</label>
              <div className='radio-btns'>
              <input type="radio" name="gender" value="male"  onChange={handleChange} /> Male<br/>
              <input type="radio" name="gender"  value="female" onChange={handleChange}/> Female<br/>
              </div>
            </div>
            <div className="form_input">
              <label htmlFor="age">Age</label>
              <input type="number" name="age"  onChange={handleChange}  placeholder='Enter Your age' />
            </div>
            <div className="form_input">
              <label htmlFor="city">City</label>
              <input type="text" name="city"  onChange={handleChange}  placeholder='Enter Your city' />
            </div>
            <button className='btn' onClick={handleSubmit}>Sign Up</button>
            {/* <p>Don't have and account </p> */}
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}

export default Register