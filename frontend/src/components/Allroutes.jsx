import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Mens from "../pages/Mens";
import Simple from "../pages/SingleProductPage";
const Allroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/mens" element={<Mens />} />
      <Route path="/mens/:id" element={<Simple />} />
    </Routes>
  );
};

export default Allroutes;
