import React from "react";
import { Route, Routes } from "react-router-dom";
import DonationPage from "../pages/DonationPage";

const Users = () => {
  
  return (
    <>
        <Routes>
            <Route exact path="/donation" element={<DonationPage />} />
        </Routes>
    </>
      
  );
};

export default Users;
