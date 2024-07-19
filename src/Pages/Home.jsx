import React from "react";
import Header from "../Component/Header";
import "../Assets/Styles/Home.css";
import image6 from "../Assets/Images/lady.jpg";
import image7 from "../Assets/Images/girl.jpg";
import image8 from "../Assets/Images/scan1.jpg";
import image9 from "../Assets/Images/boy.jpg";
import image10 from "../Assets/Images/mobile.jpg";
import image11 from "../Assets/Images/dress.jpg";
import image12 from "../Assets/Images/person.jpg";
import image13 from "../Assets/Images/access.jpg";
import image14 from "../Assets/Images/french.jpg";
import image15 from "../Assets/Images/big.jpg";
import image16 from "../Assets/Images/dary.jpg";
import image17 from "../Assets/Images/island.jpg";
import image18 from "../Assets/Images/ke.jpg";
import image19 from "../Assets/Images/ola.jpg";
import image20 from "../Assets/Images/posh.jpg";
import image21 from "../Assets/Images/rolls.jpg";
import image22 from "../Assets/Images/spices.jpg";
import image23 from "../Assets/Images/store.jpg";
import image24 from "../Assets/Images/studio.jpg";
import image25 from "../Assets/Images/thelab.jpg";
import image26 from "../Assets/Images/thick.jpg";
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "../Component/Footer";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
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

     <Imageformate/>

      <div className="row ">
        <div class="mt-4 p-5  text-black ">
          <h1 className="lacs fw-bold">75lacs+</h1>
          <p className="part fw-bold">Forward-thinking Partners</p>
        </div>
      </div>
      <Merchants />
     <Empowerbusinessslide/>
<Buildgrowbusiness/>
<br/>
<br/>
      <Footer />
    </div>
  );
};

export default Home;
