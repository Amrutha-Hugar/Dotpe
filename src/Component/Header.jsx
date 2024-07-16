import React from "react";
import image1 from "../Assets/Images/dotpe.svg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import BusinessTypeNavItem from "./Businesstype";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
       
        padding: "25px",
      }}
    >
      <div>
        <img src={image1} alt="" className="h-50"/>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
          
        }}
      >
        <BusinessTypeNavItem />
      </div>
      <div style={{ visibility: "hidden", fontSize: "20px" }}>Request Demo</div>
    </div>
  );
};

export default Header;
