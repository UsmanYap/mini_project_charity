import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import DetailPage from "../pages/DetailPage";
import ListCharity from "../pages/ListCharity";
import MyCharity from "../pages/MyCharity";

const Users = () => {
  
  return (
    <>
        <Routes>
            <Route exact path="/" element={<Home />} />
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
