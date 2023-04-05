import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Pages/Home";
import LoginSignup from "./components/Pages/LoginSignup";
import Quotation from "./components/Pages/Quotation";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/LoginSignup' element={<LoginSignup />} />
        <Route path='/Quotation' element={<Quotation />} />
      </Routes>
    </>
  );
};

export default MainRoutes;
