import React from "react";
import { Route, Routes } from "react-router-dom";
import Cart from "../pages/Cart";
import Payments from "../pages/Payments";
import Login from "../pages/Login";
import Register from "../pages/Signup";
import { OtpPage } from "../pages/otp";
const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/register" elements={<Register/>}/>
            <Route path="/login" elements={<Login/>}/>
            <Route path="/cart" elements={<Cart/>}/>
            <Route path="/payments" elements={<Payments/>}/>
            <Route path="/login/otp" elements={<OtpPage/>}/>
            
        </Routes>
    )
}
export default AllRoutes