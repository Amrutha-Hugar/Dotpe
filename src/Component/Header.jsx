import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import image1 from "../Assets/Images/dot.png"

import NavItems from "./NavItems";

const Header = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        padding: "30px 50px",
      }}
    >
      <div>
        <img
          src={image1}
          alt="Logo"
          style={{
            width: "120px",
            height: "auto",
          }}
        />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "50px",
        }}
      >
        <NavItems />
      </div>
      <div style={{ visibility: "hidden", fontSize: "20px" }}>Request Demo</div>
    </div>
  );
};

export default Header;
