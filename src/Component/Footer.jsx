import React from "react";
import "../Assets/Styles/Footer.css";
import "../Assets/Images/twitter.jpg";
import image12 from "../Assets/Images/twitter.jpg";
import image13 from "../Assets/Images/instagram.jpg";
import image14 from "../Assets/Images/linked.jpg";

import { useState, useEffect } from "react";
import Mobilefooter from "./Mobilefooter";



const Footer = () => {

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

  console.log(windowDimensions, "windowDimensions");

  
  
  return (
    <div>
        {windowDimensions.width < 766 ? (
        <Mobilefooter/>
      ) : (
      <div className="footer bg-black w-100" style={{ height: "350px" }}>
        <div className="foot-container ">
       <div className="d-flex justify-content-around">
       <div
            className="foot d-flex text-white  "
            style={{ gap: "100px" }}
          >
            <div className="foot1 mt-5">
              <p className="text-right" style={{color:'#909090',fontWeight:'500',}}>Business</p>
              <ul>
                <li>Food & Beverages</li>
                <li>Retail</li>
                <li>Services</li>
              </ul>
            </div>
            <div className="foot2 mt-5">
              <p className="" style={{color:'#909090',fontWeight:'500'}}>Dotpe</p>
              <ul>
                <li>Home</li>
                <li>Press & Media</li>
                
              </ul>
            </div>
          </div>
       </div>
          <hr className="h" style={{ marginTop: "-10px" }} />
          <br />
          <br />
          <div className="pay d-flex justify-content-around">
            <div className="text-start">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/dotpe-white-logo-svg.svg"
                alt=""
                height={"40%"}
                width={"100"}
                className="m-4 "
              />
              <p
                style={{
                  fontSize: "18px",
                  color: "gray",
                  opacity: "1",
                  fontWeight: "300",
                  marginTop: "-9px",
                }}
              >
                © DotPe, All rights reserved
              </p>
            </div>

            <div
              className="d-flex"
             
            >
              <a href="" className="text-white m-4" style={{fontWeight:'500', textDecoration:'none'}}>Terms & Conditions</a>
              <a href="" className="text-white m-4" style={{fontWeight:'500', textDecoration:'none'}}>Privacy Policy</a>
              
              <img
                src={image12}
                className="m-3"
                alt=""
                height={"30vh"}
                width={"30vh"}
              />
              <img
                src={image13}
                className="m-3"
                alt=""
                height={"30vh"}
                width={"30vh"}
              />
              <img
                src={image14}
                className="m-3"
                alt=""
                height={"30vh"}
                width={"30vh"}
              />
            </div>
          </div>
        </div>
      </div>
      )}
    </div>
  );
};

export default Footer;
