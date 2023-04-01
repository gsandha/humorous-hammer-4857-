import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Register from "../pages/Signup";
import Simple from "../pages/SingleProductPage";
import { OtpPage } from "./otp";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/:id" element={<Simple />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/otp" element={<OtpPage />} />
    </Routes>
  );
};

export default Allroutes;
