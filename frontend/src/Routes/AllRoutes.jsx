import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Payments from "../pages/Payments";
import Login from "../pages/Login";
import Register from "../pages/Signup";
import { OtpPage } from "../pages/otp";
import Home from "../pages/Home";
import Simple from "../pages/SingleProductPage";
import Mens from "../pages/Mens";
import Abc from "../pages/Abc";
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/payments" element={<Payments/>}/>
            <Route path="/signin/otp" element={<OtpPage/>}/>
            <Route path="/mens" element={<Mens/>}/>
            <Route path="/simple" element={<Simple/>}/>
            <Route path="/abc" element={<Abc/>}/>
        </Routes>
    )
}
export default AllRoutes