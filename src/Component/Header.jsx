import React from "react";
import image1 from "../Assets/Images/dotpe.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";

const Header = () => {
  return (
    <div className="row ">
      <div className="col-sm-4  p-2 ">
        <img src={image1} alt="" />
      </div>
      <div className="col-sm-4  d-flex flex-row">
        <Dropdown className="m-2 text-black">
          <Dropdown.Toggle id="dropdown-basic">Business Type</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>

        <Dropdown className="m-2 text-black">
          <Dropdown.Toggle id="dropdown-basic">Company</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className="col-sm-4  p-2">
        <button className="btn  border-primary text-white rounded-5 fw-bold">
          Request Demo
        </button>
      </div>
    </div>
  );
};

export default Header;
