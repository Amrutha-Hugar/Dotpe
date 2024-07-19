import React from "react";
import "../Assets/Styles/Footer.css";
import "../Assets/Images/twitter.jpg";
import image12 from "../Assets/Images/twitter.jpg";
import image13 from "../Assets/Images/instagram.jpg";
import image14 from "../Assets/Images/linked.jpg";

import { useState, useEffect } from "react";

const Footer = () => {
  return (
    <div>
      <div className="footer bg-black w-100" style={{ height: "600px" }}>
        <div className="foot-container ">
          <div
            className="foot d-flex text-white justify-content-center "
            style={{ gap: "180px", marginTop: "6px" }}
          >
            <div className="foot1 mt-5">
              <h4 className="text-gray text-start">Business</h4>
              <p className="text-start" style={{ fontSize: "20px" }}>
                Food & Beverages
              </p>
              <p className="text-start" style={{ fontSize: "20px" }}>
                Retail
              </p>
              <p className="text-start" style={{ fontSize: "20px" }}>
                Services
              </p>
            </div>
            <div className="foot2 mt-5">
              <h4 className="text-start">Dotpe</h4>
              <p className="text-start" style={{ fontSize: "20px" }}>
                Home
              </p>
              <p className="text-start" style={{ fontSize: "20px" }}>
                Press & Media
              </p>
            </div>
          </div>
          <hr className="h" style={{ marginTop: "5px" }} />
          <br />
          <br />
          <div className="pay d-flex justify-content-around">
            <div className="text-start">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/dotpe-white-logo-svg.svg"
                alt=""
                height={"50vh"}
                width={"100"}
                className="m-4 "
              />
              <p
                style={{
                  fontSize: "20px",
                  color: "gray",
                  opacity: "1",
                  fontWeight: "300",
                  marginTop: "-11px",
                }}
              >
                © DotPe, All rights reserved
              </p>
            </div>

            <div
              className="m-4 d-flex"
              style={{
                marginLeft: "30px",
                fontSize: "20px",
                fontWeight: "bold",
              }}
            >
              <p className="text-white m-4">Terms & Conditions</p>
              <p className="text-white m-4">Privacy Policy</p>
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
    </div>
  );
};

export default Footer;
