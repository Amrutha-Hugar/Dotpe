import React, { useEffect, useState } from "react";
import image1 from "../Assets/Images/dotpe.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import "../Assets/Styles/Dynamicheader.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const DynamicHeader = () => {
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className={
        scrollPosition > 200 ? "main-header sticky-nav" : "main-header"
      }
    >
      <div className="top-fixed-navbar d-none d-md-block">
        <div className="navbar navbar-expand-md nav-v1 top-bar">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              width: "100%",
              padding: "12px 32px",
              background: "white",
            }}
          >
            <div>
              <img src={image1} alt="" />
            </div>
            <div className="drop">
              <div className="dropdown">
                <button className="dropbtn  text-black" style={{fontWeight:'500'}}>Business Types</button>
                <div className="dropdown-content ">
                  <a class="dropdown-item " href="#">
                    <div className="d-flex ">
                      <img
                        src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png"
                        alt="Image 1"
                        width="16"
                       
                      />
                      <h5 className="fw-bold m-1 p-1" >
                        Food & Beverages{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className="mt-2 p-1  animated-navArrow1"
                        />
                      </h5>
                    </div>
                    <p className="text-start" style={{ paddingLeft: "25px" }}>
                      {" "}
                      Tools for front of house, back of house, and
                      <br /> everything in between.
                    </p>
                  </a>
                  <a class="dropdown-item" href="#">
                    <div className="d-flex">
                      <img
                        src="https://cdn.dotpe.in/dotpe-website-live/images/retail-icon.png"
                        alt="Image 2"
                        width="25"
                      />
                      <h5 className="fw-bold m-1 p-1">
                        Retail{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className="mt-2 p-1  animated-navArrow1"
                        />
                      </h5>
                    </div>
                    <p className="text-start" style={{ paddingLeft: "25px" }}>
                      All the retail tools you need from offline to
                      <br />
                      online, in-store &amp; online.
                    </p>
                  </a>
                  <a class="dropdown-item " href="#">
                    <div className="d-flex">
                      <img
                        src="https://cdn.dotpe.in/dotpe-website-live/images/services-icon.png"
                        alt="Image 3"
                        width="15"
                      />
                      <h5 className="fw-bold m-1 p-1">
                        Services & Others{" "}
                        <FontAwesomeIcon
                          icon={faArrowRight}
                          size="1x"
                          className="mt-3  p-1  animated-navArrow1"
                        />
                      </h5>
                    </div>
                    <p className="text-start  " style={{ paddingLeft: "25px" }}>
                      Solutions for health, repair &amp; other service
                      <br />
                      professionals.
                    </p>
                  </a>
                </div>
              </div>
              <div>
                <div className="dropdown">
                  <button className="dropbtn  text-black" style={{fontWeight:'500'}}>Company</button>
                  <div className="dropdown-content " style={{ height: "50px" }}>
                    <a class="dropdown-item" href="#">
                      <div className="d-flex">
                        <img
                          src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png"
                          alt="Image 3"
                          width="15"
                        />
                        <h5 className="fw-bold" >
                          Press & Media{" "}
                          <FontAwesomeIcon icon={faArrowRight} className="animated-navArrow1" />
                        </h5>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "16px" }}>
              <button
                style={{
                  border: "1px solid #0F73FF",
                  color: "#0F73FF",
                  padding: "8px 16px",
                  background: "white",
                  fontWeight: 600,
                }}
                className="rounded-5 h-100"
              >
                Request Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DynamicHeader;
