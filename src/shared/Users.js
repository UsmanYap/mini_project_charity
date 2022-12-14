import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailPage from "../pages/DetailPage";
import ListCharity from "../pages/ListCharity";
import MyCharity from "../pages/MyCharity";

const Users = () => {
  
  return (
    <>
        <Routes>
            <Route exact path="/" element={<HomePage />} />
            <Route exact path="/login" element={<Login />} />
            <Route exact path="/charity" element={<ListCharity />} />
            <Route exact path="/signup" element={<Signup />} />
            <Route exact path="/detail" element={<DetailPage />} />
            <Route exact path="/mycharity" element={<MyCharity />} />
        </Routes>
    </>
      
  );
};

export default Users;
