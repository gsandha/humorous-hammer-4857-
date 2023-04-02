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

const AllRoutes=()=>{
    return (
        <Routes>
            <Route path="/" elements={<Home/>}/>
            <Route path="/register" elements={<Register/>}/>
            <Route path="/login" elements={<Login/>}/>
            <Route path="/cart" elements={<Cart/>}/>
            <Route path="/payments" elements={<Payments/>}/>
            <Route path="/login/otp" elements={<OtpPage/>}/>
            <Route path="/mens" elements={<Mens/>}/>
            <Route path="/simple" elements={<Simple/>}/>
        </Routes>
    )
}
export default AllRoutes