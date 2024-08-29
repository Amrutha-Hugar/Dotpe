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
              padding: "2px 30px",
              background: "white",
            }}
          >
            <div>
              <img src={image1} alt="" />
            </div>
            <div className="drop">
              <div className="dropdown">
                <button className="dropbtn  text-black" style={{fontWeight:'500',fontSize:'18px'}}>Business Types</button>
                <div className="dropdown-content">
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png"
                alt="Image 1"
                width="16"
                style={{
                  marginRight: "15px",
                }}
              />

              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      marginRight: "10px",
                      fontSize:'16px',
                      fontWeight:'600'
                    }}
                  >
                  <span>Food & Beverage Industry</span>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className="mt-1 p-1 animated-navArrow"
                    style={{
                      marginBottom: "5px",
                    }}
                  />
                </div>
                <p className="text-start dropdown-item-info m-2" style={{fontFamily:'serif', lineHeight:'16px', fontSize:'11px', color:'#717171', fontWeight:'500'}}>
                  {" "}
                  Tools for front of house, back of house, and<br/> 
                  everything in between.
                </p>
              </div>
            </div>
           
          </a>
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png"
                alt="Image 1"
                width="16"
                style={{
                  marginRight: "15px",
                }}
              />

              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      
                      marginRight: "10px",
                      fontSize:'16px',
                      fontWeight:'600'
                    }}
                  >
                    <span>Retail</span>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className=" animated-navArrow  p-1"
                    style={{
                     marginTop:'6px'
                    }}
                  />
                </div>
                <p className="text-start dropdown-item-info" style={{fontFamily:'serif', lineHeight:'16px', fontSize:'11px', color:'#717171', fontWeight:'500'}}>
                  {" "}
                  All the retail tools you need from offline to<br/>
                  online, in-store &amp; online.
                </p>
              </div>
            </div>
           
          </a>
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png"
                alt="Image 1"
                width="16"
                style={{
                  marginRight: "15px",
                }}
              />

              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      marginRight: "10px",
                       fontSize:'16px',
                      fontWeight:'600'
                    }}
                  >
                    <span> Services & Others </span>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className=" p-1 animated-navArrow"
                    style={{
                      margintop: "-13px",
                    }}
                  />
                </div>
                <p className="text-start dropdown-item-info"  style={{fontFamily:'serif', lineHeight:'16px', fontSize:'11px', color:'#717171', fontWeight:'500'}} >
                  {" "}
                  Solutions for health, repair &amp; other service<br/>
                  professionals.
                </p>
              </div>
            </div>
          </a>
        </div>
              </div>
              <div>
                <div className="dropdown">
                  <button className="dropbtn  text-black" style={{fontWeight:'500',fontSize:'18px'}}>Company</button>
                  <div className="dropdown-content">
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png"
                alt="Image 1"
                width="16"
                style={{
                  marginRight: "15px",
                }}
              />

              <div>
                <div className="d-flex align-items-center">
                  <div
                    className="fw-bold"
                    style={{
                      marginRight: "15px",
                    }}
                  >
                    <h6>Press & Media</h6>
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className="animated-navArrow"
                    style={{
                     marginTop:'-3px'
                    }}
                  />
                </div>
               
              </div>
            </div>
          </a>
          
       
        </div>
                </div>
              </div>
            </div>

            <div style={{ fontSize: "18px" }}>
              <button
                style={{
                  
                  border: "1px solid #006aff",
                  color: "#006aff",
                  padding: "9px 16px",
                  fontWeight: 600,
                 backgroundColor:'white',
                  borderadius: '35px'
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
