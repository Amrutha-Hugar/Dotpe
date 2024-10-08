import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import "../Assets/Styles/Navfood.css";

const Navfood = () => {
  return (
    <div className="drop">
      <div className="dropdown">
        <button
          className="dropbtn  text-white"
          style={{
            fontWeight: 500,
            fontSize: "18px",
          }}
        >
          Products
        </button>
        <div className="dropdown-content">
          <a className="dropdown-item" href="#">
            <div
              className=" dropdown-item-title"
              style={{ textAlign: "left", margin: "10px", padding: "5px" }}
            >
              <div className="product-name">
                <div>
                  <span className="">Online Store</span>
                </div>
                <hr />
                <div>
                  <span>Point of Sale(POS)</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
                <hr />
                <div>
                  <span>Maketing</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
                <hr />
                <div>
                  <span>Deliveries & Logistics</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
                <hr />
                <div>
                  <span>Payments</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
                <hr />
                <div>
                  <span>In-Store Solution</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
                <hr />
                <div>
                  <span>Whatsapp for Business</span>
                  <br />
                  <p>Website in devlopment</p>
                </div>
              </div>
              <div></div>
            </div>
          </a>
        </div>
      </div>
      <div className="dropdown">
        <button
          className="dropbtn  text-white"
          style={{
            fontWeight: 500,
            fontSize: "18px",
          }}
        >
          Business Types
        </button>
        <div className="dropdown-content">
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    <Link to="/foodstack">Food & Beverage Industry</Link>{" "}
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
                <p
                  className="text-start dropdown-item-info m-2"
                  style={{
                    fontFamily: "serif",
                    lineHeight: "16px",
                    fontSize: "11px",
                    color: "#717171",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Tools for front of house, back of house, and
                  <br />
                  everything in between.
                </p>
              </div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      fontWeight: "600",
                    }}
                  >
                    <span>Retail</span>{" "}
                  </div>
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    size="1x"
                    className=" animated-navArrow  p-1"
                    style={{
                      marginTop: "6px",
                    }}
                  />
                </div>
                <p
                  className="text-start dropdown-item-info"
                  style={{
                    fontFamily: "serif",
                    lineHeight: "16px",
                    fontSize: "11px",
                    color: "#717171",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  All the retail tools you need from offline to
                  <br />
                  online, in-store &amp; online.
                </p>
              </div>
            </div>
          </a>
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
              <div>
                <div className="d-flex align-items-center">
                  <div
                    className=""
                    style={{
                      marginRight: "10px",
                      fontSize: "16px",
                      fontWeight: "600",
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
                <p
                  className="text-start dropdown-item-info"
                  style={{
                    fontFamily: "serif",
                    lineHeight: "16px",
                    fontSize: "11px",
                    color: "#717171",
                    fontWeight: "500",
                  }}
                >
                  {" "}
                  Solutions for health, repair &amp; other service
                  <br />
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
            fontSize: "18px",
          }}
        >
          Company
        </button>
        <div className="dropdown-content">
          <a class="dropdown-item" href="#">
            <div className="d-flex align-items-baseline dropdown-item-title">
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
                      marginTop: "-3px",
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
};

export default Navfood;
