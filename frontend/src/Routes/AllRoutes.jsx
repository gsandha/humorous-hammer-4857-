import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Cart from "../pages/Cart";
import Mens from "../pages/Mens";
import Simple from "../pages/SingleProductPage";
import Register from "../pages/Signup";
import Login from "../pages/Login";
import { OtpPage } from "../pages/otp";
import { Admin } from "../pages/admin";
import { Privateroute } from "./Privateroute";
const AllRoutes=()=>{
    return (
        <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<Privateroute><Cart /></Privateroute>} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<Simple />} />
      <Route path="/register" element={<Register />} />
      <Route path="/login" element={<Login />} />
      <Route path="/admin" element={<Admin />} />
      <Route path="/login/otp" element={<OtpPage />} />
    </Routes>
    )
}
export default AllRoutes