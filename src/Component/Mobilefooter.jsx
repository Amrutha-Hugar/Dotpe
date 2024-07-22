import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import { useState } from "react";
import $ from "jquery";
import image12 from "../Assets/Images/twitter.jpg";
import image13 from "../Assets/Images/instagram.jpg";
import image14 from "../Assets/Images/linked.jpg";


const Mobilefooter = () => {
  return (
    <div>
      <div
        style={{
          padding: "20px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          maxWidth: "100%",
        }}
      ></div>

      <div
        className="mobilefoot bg-black"
        style={{ height: "400px", width: "100%" }}
      >
        <div className="">
          <div>
            <div className="dropdown">
              <button
                className="btn text-#757575  dropdown-toggle"
                style={{ marginTop: "80px", border: "none",fontSize:'20px', fontWeight:'500', color:'gray' }}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
               Business
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  width: "50%",
                  textAlign: "center",
                  
                  fontSize: "20px",
                }}
              >
                <li>
                  <a className="dropdown-item">Food & Beverages</a>
                </li>
                <li>
                  <a className="dropdown-item">Retail</a>
                </li>
                <li>
                  <a className="dropdown-item">Services & Others</a>
                </li>
              </ul>
            </div>
            <div className="dropdown">
              <button
                className="btn   dropdown-toggle"
                style={{ marginTop: "10px", border: "none", fontSize:'20px', fontWeight:'500', color:'gray' }}
                type="button"
                id="dropdownMenuButton"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                DotPe
              </button>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton"
                style={{
                  width: "40%",
                  textAlign: "center",
              
                }}
              >
                <li>
                  <a className="dropdown-item">Home</a>
                </li>
                <li>
                  <a className="dropdown-item">Press & Media</a>
                </li>
              </ul>
            </div>
          </div>
          <hr  style={{opacity:'1.5'}}/>
      <div>
        <img src={image12} alt="" height={"10%"} width={"10%"} className="m-2"/>
        <img src={image13} alt=""  height={"10%"} width={"10%"} className="m-2"/>
        <img src={image14} alt=""  height={"10%"} width={"10%"} className="m-2"/>
      </div>
      <hr  style={{opacity:'1.5'}}/>
        </div>
       <div className="d-flex justify-content-around" style={{fontWeight:'500', color:'gray'}}>
        <p className="">Terms & Conditions</p>
        <p>Privacy Policy</p>
       </div>
      </div>
     
    </div>
  );
};

export default Mobilefooter;
