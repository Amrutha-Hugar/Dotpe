import React from "react";
import Header from "../Component/Header";
import "../Assets/Styles/Home.css";
import { useState } from "react";
import { useEffect } from "react";
import Footer from "../Component/Footer";
import TextImageSwitcher from "../Component/Textimage";
import DynamicHeader from "../Component/Dyanmicheader";
import MobileHeader from "../Component/Mobileheader";
import CustomCarousel from "../Component/carosel";
import AnimationText from "../Component/Flexible";
import AnimationText1 from "../Animation/Pos";
import "react-multi-carousel/lib/styles.css";
import Carousel1 from "react-multi-carousel";
import HomePageBannerText from "../Component/HomePageBannerText";
import Solutions from "../Component/Solutions";
import Merchants from "../Component/Merchants";
import Empowerbusinessslide from "../Component/Empowerbusinessslide";
import Buildgrowbusiness from "../Component/Buildgrowbusiness";
import Imageforamt from "../Component/Imageformate";
import Imageformate from "../Component/Imageformate";
import Forwardthinkingpartners from "../Component/Forwardthinkingpartners";

const Home = () => {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="home-container">
      <div className="purpleContainer">
        {windowDimensions.width < 766 ? (
          <MobileHeader />
        ) : (
          <>
            <DynamicHeader />
            <Header />
          </>
        )}
        <HomePageBannerText />
      </div>

      <AnimationText />

      <Solutions />

      <TextImageSwitcher />

      <Imageformate />

      <Forwardthinkingpartners />
      <Merchants />
      <Empowerbusinessslide />
      <Buildgrowbusiness />
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
