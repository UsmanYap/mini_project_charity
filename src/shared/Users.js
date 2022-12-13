import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import SignupPage from "../pages/SignupPage";
import DetailPage from "../pages/DetailPage";

const Users = () => {
  
  return (
    <>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<LoginPage />} />
            <Route exact path="/signup" element={<SignupPage />} />
            <Route exact path="/detail" element={<DetailPage />} />
        </Routes>
    </>
      
  );
};

export default Users;
