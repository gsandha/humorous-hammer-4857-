import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Mens from "../pages/Mens";
import Register from "../pages/Signup";
import Simple from "../pages/SingleProductPage";
import { OtpPage } from "../pages/otp";
import Cart from "../pages/Cart"
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<Simple />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/login/otp" element={<OtpPage />} />
    </Routes>
  );
};

export default Allroutes;
