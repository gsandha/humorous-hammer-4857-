import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mens from "../pages/Mens";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/men" element={<Mens />} />
    </Routes>
  );
};

export default Allroutes;
