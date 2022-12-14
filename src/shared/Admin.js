import React from "react";
import { Route, Routes } from "react-router-dom";
import DonationPage from "../pages/Donation";

const Admin = () => {
  
  return (
    <>
        <Routes>
            <Route exact path="/donation" element={<DonationPage />} />
        </Routes>
    </>
      
  );
};

export default Admin;
