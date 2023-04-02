import React from "react";
import PinVerifyInput from "../components/pin";
import { useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { loginUserData } from "../Redux/Authentication/auth.actions";
import "../Styles/otp.css";
import { Spinner, useToast } from "@chakra-ui/react";
export const OtpPage = () => {
  const [pin, setPin] = React.useState("");
  const location = useLocation();
  console.log(location)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {  token, isLoading } = useSelector((store) => store.authManager);
  const userData = useSelector((store) => store.authManager.data)
  console.log(userData)
  const toast = useToast()
  const LoginUser = async (e) => {
    e.preventDefault();

    if (pin === "") {
      toast({
        title: 'OTP error.',
        description: "Please enter your pin.",
        status: 'error',
        duration: 3000,
        position:"top",
        isClosable: true,
      })
    } else if (!/[^a-zA-Z]/.test(pin)) {
      toast({
        title: 'OTP error.',
        description: "Enter Valid pin.",
        status: 'error',
        duration: 3000,
        position:"top",
        isClosable: true,
      })
    } else if (pin.length < 4) {
      toast({
        title: 'OTP error.',
        description: "pin Length minimum 4 digit.",
        status: 'error',
        duration: 3000,
        position:"top",
        isClosable: true,
      })
    } else {
      const data = {
        otp: pin,
        email: location.state,
      };
      dispatch(loginUserData(data));
      if (token!=="") {
        localStorage.setItem("userToken", token);
        toast({
          title: 'OTP Message.',
          description: `Welcome back ${userData.name}.`,
          status: 'success',
          duration: 3000,
          position:"top",
          isClosable: true,
        })
        
        navigate("/");
      } 
      // else if(token){
      //   toast({
      //     title: 'OTP error.',
      //     description: "login failed try again",
      //     status: 'error',
      //     duration: 3000,
      //     position:"top",
      //     isClosable: true,
      //   })
      // }
    }
  };

  return (
    <div className="otp_page">
      <h2>Please enter the otp sent on your mail</h2>
      <div>
        <PinVerifyInput
          placeholder="•"
          style={{ marginLeft: "-2px" }}
          fieldStyle={{
            margin: "0 2px",
            padding: "12px 0.5ch",
            fontFamily: "monospace",
            fontSize: "2rem",
            width: "3ch",
          }}
          onChange={(value) => setPin(value)}
        />
      </div>
      <div>
        <button onClick={(e) => LoginUser(e)}>
          login <span>{isLoading ? <Spinner /> : ""}</span>
        </button>
      </div>
    </div>
  );
};
