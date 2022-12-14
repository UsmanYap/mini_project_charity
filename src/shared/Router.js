import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/footer/Footer";
import Users from './Users';
import Admin from './Admin';

const Router = () => {
  const role = false;
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Users />
      { role ? <Admin/> : <></> }
      <Footer />
    </BrowserRouter>
  );
};

export default Router;
