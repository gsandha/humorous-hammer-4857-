import React from "react";
import PinVerifyInput from "../components/pin";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { loginUserData } from "../Redux/Authentication/auth.actions";
import "../Styles/otp.css";
import { Spinner } from "@chakra-ui/react";
export const OtpPage = () => {
  const [pin, setPin] = React.useState("");
  const location = useLocation();
  console.log(location)
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { msg, token, isLoading } = useSelector((store) => store.authManager);
  console.log(isLoading)
  const LoginUser = async (e) => {
    e.preventDefault();

    if (pin === "") {
      toast.error("Enter Your pin");
    } else if (!/[^a-zA-Z]/.test(pin)) {
      toast.error("Enter Valid pin");
    } else if (pin.length < 4) {
      toast.error("pin Length minimum 6 digit");
    } else {
      const data = {
        otp: pin,
        email: location.state,
      };
      dispatch(loginUserData(data));
      if (msg === "login successfully") {
        localStorage.setItem("userToken", token);
        toast.success(`login successfully`);
          navigate("/");
      } else {
        toast.error("login failed try again");
      }
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
