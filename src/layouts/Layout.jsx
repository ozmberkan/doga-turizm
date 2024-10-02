import React from "react";
import Navbar from "./components/Navbar/Navbar";
import FlexContainer from "./container/FlexContainer";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Layout = () => {
  return (
    <FlexContainer>
      <Navbar />
      <Outlet />
      <ToastContainer position="bottom-right" />
    </FlexContainer>
  );
};

export default Layout;
