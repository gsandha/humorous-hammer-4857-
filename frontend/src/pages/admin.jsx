import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "@chakra-ui/react";
import "../Styles/mix.css";

export const Admin = () => {
  const [data, setData] = useState({email:"",password:""});
  const [spiner, setSpiner] = useState(false);
  const navigate = useNavigate();
  // sendotp
  const {email,password} = data
  console.log(data)
  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      setSpiner(true);

      if(email==="admin@cartify.com" && password==="admin@123"){
        setSpiner(false)
        window.location.replace('https://limeroad-admin.vercel.app/dashboard');
      }else{
        setSpiner(false)
        toast.error("Invalid credentials")
      }
  }
}

  const handleChange = (e)=>{
    setData({...data,[e.target.name]:e.target.value})
  }

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login to view your dashboard</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => handleChange(e)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <div className="form_input">
              <label htmlFor="email">Password</label>
              <input
                type="password"
                name="password"
                id=""
                onChange={(e) => handleChange(e)}
                placeholder="Enter Your Password"
              />
            </div>
            <button className="btn" onClick={(e)=>sendOtp(e)}>
              Login
              {spiner ? (
                <span>
                  <Spinner />
                </span>
              ) : (
                ""
              )}
            </button>
            <p>
              Don't have an account <NavLink to="/register">Sign up</NavLink>{" "}
            </p>
          </form>
        </div>
        <ToastContainer />
      </section>
    </>
  )
}