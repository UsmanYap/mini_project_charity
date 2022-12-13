import React from "react";
import { BrowserRouter } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Users from './Users';
import Admin from './Admin';

const Router = () => {
  const role = false;
  
  return (
    <BrowserRouter>
      <Navbar/>
      <Users />
      { role ? <Admin/> : <></> }
    </BrowserRouter>
  );
};

export default Router;
