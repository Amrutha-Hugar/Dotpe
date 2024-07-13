import React, { useState } from "react";
import image1 from "../Assets/Images/dotpe.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const MobileHeader = () => {
  const [showMenue, setShowMenue] = useState(false);
  return (
    <div>
      <div
        style={{
          background: "white",
          padding: "20px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div className="col-sm-4  p-2 ">
          <img src={image1} alt="" />
        </div>
        <div onClick={() => setShowMenue(!showMenue)}>3lines</div>
      </div>
      {showMenue ? (
        <div
          style={{
            background: "white",
            padding: "20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          display me after click
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileHeader;
