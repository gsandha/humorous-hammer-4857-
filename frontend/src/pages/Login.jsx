import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { Spinner } from "@chakra-ui/react";
import "../Styles/mix.css";
import { sentOtpFunction } from "../Redux/Authentication/auth.api";

const Login = () => {
  const [email, setEmail] = useState("");
  const [spiner, setSpiner] = useState(false);
  const navigate = useNavigate();

  // sendotp
  const sendOtp = async (e) => {
    e.preventDefault();
    if (email === "") {
      toast.error("Enter Your Email !");
    } else if (!email.includes("@")) {
      toast.error("Enter Valid Email !");
    } else {
      setSpiner(true);
      const data = {
        email: email,
      };

      const response = await sentOtpFunction(data);
      console.log(response);
      if (response === 200) {
        setSpiner(false);
        navigate("/login/otp", { state: email });
      } else {
        toast.error("there is an error while sending email");
      }
    }
  };

  return (
    <>
      <section>
        <div className="form_data">
          <div className="form_heading">
            <h1>Welcome Back, Log In</h1>
            <p>Hi, we are you glad you are back. Please login.</p>
          </div>
          <form>
            <div className="form_input">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                id=""
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email Address"
              />
            </div>
            <button className="btn" onClick={sendOtp}>
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
  );
};

export default Login;
