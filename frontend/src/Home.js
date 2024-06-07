import React from "react";
import section5 from "./assets/img/svg/Section5.svg";
import "./Home.css";
import videoFile from "./assets/bgvideodcb.mp4";
import ContentOverlay from "./components/web.3";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
const Home = () => {
  return (
    <>
    <Navbar/>
      <div className="video-background-container">
        <video className="video-background" autoPlay loop muted>
          <source src={videoFile} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <ContentOverlay />
      </div>

      <div className="full-screen-container">
        <img
          src={section5}
          alt="Full Screen Logo"
          className="full-screen-logo"
        />
      </div>
      <Footer/>
    </>
  );
};

export default Home;
