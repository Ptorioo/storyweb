import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";

const Layout = () => {
  return (
    <div>
      <nav></nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
