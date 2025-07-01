import React from "react";
import SuccessStory from "../components/core/home/SuccessStory";
import AIHAgents from "../components/core/home/AIHAgents";
import AIHStudio from "../components/core/home/AIHStudio";
import Blogs from "../components/core/home/Blogs";
import HomePage from "../components/core/home/HomePage";
// import Footer from "../components/common/Footer";
import CloudPartners from "../components/core/home/CloudPartners";
import TestBG from "../components/TestBg";

const Home = () => {
  // const googleMapsApiKey = "AIzaSyAWpGF4YuL4EUS37-tUy0xOeldVIKkVnVY";

  return (
    <>
      <HomePage />
      <SuccessStory />
      <CloudPartners />
      <AIHAgents />
      <AIHStudio />
      <Blogs />
      {/* <Footer apiKey={googleMapsApiKey} /> */}
      <TestBG />
    </>
  );
};

export default Home;
