import React from "react";
import "../Assets/Styles/Businesstype.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function NavItems() {
  return (
    <div className="drop">
      <div className="dropdown">
        <button
          className="dropbtn  text-white"
          style={{
            fontWeight: 600,
            fontSize: "23px",
          }}
        >
          Business Types
        </button>
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
                    className="fw-bold"
                    style={{
                      marginRight: "15px",
                    }}
                  >
                  <h4>  Food & Beverage Industry</h4>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className="mt-2 p-1 animated-navArrow"
                    style={{
                      marginBottom: "5px",
                    }}
                  />
                </div>
                <p className="text-start dropdown-item-info">
                  {" "}
                  Tools for front of house, back of house, and
                  <br /> everything in between.
                </p>
              </div>
            </div>
            <br/>
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
                    className="fw-bold"
                    style={{
                      marginRight: "15px",
                      
                    }}
                  >
                    <h4>Retail</h4>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className=" animated-navArrow"
                    style={{
                      margintop: "10px",
                    }}
                  />
                </div>
                <p className="text-start dropdown-item-info">
                  {" "}
                  All the retail tools you need from offline to<br/>
                  online, in-store &amp; online.
                </p>
              </div>
            </div>
            <br/>
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
                    className="fw-bold"
                    style={{
                      marginRight: "15px",
                    }}
                  >
                    <h4> Services & Others </h4>{" "}
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
                <p className="text-start dropdown-item-info"   >
                  {" "}
                  Solutions for health, repair &amp; other service<br/>
                  professionals.
                </p>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="dropbtn  text-white"
          style={{
            fontWeight: 500,
            fontSize: "23px",
          }}
        >
          Company
        </button>
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
                    className="  animated-navArrow"
                    style={{
                      margintop: "20px",
                    }}
                  />
                </div>
               
              </div>
            </div>
          </a>
          
       
        </div>
      </div>
    </div>
  );
}
