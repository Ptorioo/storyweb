import { Outlet } from "react-router-dom";
import React from "react";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";

const Layout = () => {
  return (
    <div className="app">
      <nav>
        <Navigation />
      </nav>

      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
