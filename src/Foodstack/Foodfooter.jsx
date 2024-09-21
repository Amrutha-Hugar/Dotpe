import React from "react";
import "../Assets/Styles/Foodfooter.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Button } from "react-bootstrap";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import {  faTimes } from "@fortawesome/free-solid-svg-icons";

const Foodfooter = () => {
  const [Dotperight, setdotperight] = useState(false);

  return (
    <div className="foodfotter-container">
      <div className="fooddfooter-content">
        <h1 className="text-white">FAQ'S</h1>
        <hr style={{ color: "white" }} />
        <div className="">
  <div className="">
    <Button
      onClick={() => setdotperight(!Dotperight)}
      aria-controls="example-collapse-text"
      aria-expanded={Dotperight}
      variant="link"
      className="text-white text-decoration-none fw-bold d-flex justify-content-around align-items-center"
      style={{ width: "80%",gap:'100px' }}
    >
      <span className="text-start">Company</span>
      <span>
      <FontAwesomeIcon icon={Dotperight ? faTimes : faPlus} />
      </span>
    </Button>
    <Collapse in={Dotperight}>
      <div id="example-collapse-text">
        <a className="dropdown-item" href="#">
          <div className="d-flex align-items-start">
            <img
              src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png"
              alt="Image 1"
              width="15"
              height={"20px"}
              className="mt-3"
            />
            <p className="text-white text-start" style={{ fontSize: "15px",  }}>
              DotPe's ecosystem is tailored to meet the needs of
              companies of all sizes and types. With integrations with
              all popular online sales<br/> channels, in-store billing,
              inventory management, and reporting and analytics,
              businesses can streamline operations. Moreover, we<br/> assist
              businesses in building online ecommerce stores as well as
              marketing and CRM systems.
            </p>
          </div>
        </a>
      </div>
    </Collapse>
  </div>
</div>

        <hr style={{ color: "white" }} />
        <div className="">
          <div className="text-start  ">
            <Button
              onClick={() => setdotperight(!Dotperight)}
              aria-controls="example-collapse-text"
              aria-expanded={Dotperight}
              variant="link"
              className="text-white text-decoration-none fw-bold d-flex justify-content-around"
              style={{ width: "100%", gap: "100px" }}
            >
              <span className="">Company</span>
              <span>
                <FontAwesomeIcon icon={Dotperight ? faMinus : faPlus} />
              </span>
            </Button>
            <Collapse in={Dotperight}>
              <div id="example-collapse-text">
                <a class="dropdown-item" href="#">
                  <div className="d-flex">
                    <img
                      src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png"
                      alt="Image 1"
                      width="15"
                      height={"20px"}
                      className="mt-3"
                    />
                    <p className="fw-bold m-3" style={{ fontSize: "15px" }}>
                      DotPe's ecosystem is tailored to meet the needs of
                      companies of all sizes and types. With integrations with
                      all popular online sales<br/> channels, in-store billing,
                      inventory management, and reporting and analytics,
                      businesses can streamline operations. Moreover, we
                      <br /> assist businesses in building online ecommerce
                      stores as well as marketing and CRM systems.{" "}
                    </p>
                  </div>
                </a>
              </div>
            </Collapse>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Foodfooter;
