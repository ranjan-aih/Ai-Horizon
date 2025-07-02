import React from "react";
import Navbar from "../common/Navbar";
import Footer from "../common/Footer";
import { Outlet } from "react-router";

const AppLayout = () => {
  const googleMapsApiKey = "AIzaSyAWpGF4YuL4EUS37-tUy0xOeldVIKkVnVY";

  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer apiKey={googleMapsApiKey} />
    </div>
  );
};

export default AppLayout;
