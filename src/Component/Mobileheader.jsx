import React, { useState } from "react";
import image1 from "../Assets/Images/dotpe.jpg";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap/dist/css/bootstrap.min.css";
import Dropdown from "react-bootstrap/Dropdown";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';
import { Collapse, Button } from 'react-bootstrap';


const MobileHeader = () => {
  const [showMenue, setShowMenue] = useState(false);
  const [open, setOpen] = useState(false);
  const [press,setpress] =useState(false);

 
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
        <div onClick={() => setShowMenue(!showMenue)}>  <FontAwesomeIcon icon={faBars} /></div>
      </div>
      {showMenue ? (
        <div
          style={{
            background: "white",
             padding: "20px",
           
          }}
        >

<div>
<div>
      <Button
        onClick={() => setOpen(!open)}
        aria-controls="example-collapse-text"
        aria-expanded={open}
        variant="link"
        className="text-black text-decoration-none fw-bold d-flex justify-content-between"
  style={{ width: '100%' }} // Ensure the button takes full width
      >
       Business Type <FontAwesomeIcon icon={open ? faMinus : faPlus} />
      </Button>
      <Collapse in={open}>
        <div id="example-collapse-text" className=" ">
        <a class="dropdown-item" href="#" >
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png" alt="Image 1" width="25"/>
                    <h3 className="fw-bold">Food & Beverages </h3>
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}> Tools for front of house, back of house, and<br/> everything in between.</p>
            </a>
            <a class="dropdown-item" href="#">
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/retail-icon.png" alt="Image 2" width="25"/>
                    <h3 className="fw-bold">Retail </h3>
                    
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}>All the retail tools you need from offline to<br/>
                online, in-store &amp; online.</p>
            </a>
            <a class="dropdown-item" href="#">
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/services-icon.png" alt="Image 3" width="25"/>
                    <h3 className="fw-bold">Services & Others </h3>
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}>Solutions for health, repair &amp; other service<br/>
                professionals.</p>
            </a>
        </div>


      </Collapse>
    </div>
</div>
  


    <div className="text-start  ">
    <Button
  onClick={() => setpress(!press)}
  aria-controls="example-collapse-text"
  aria-expanded={press}
  variant="link"
  className="text-black text-decoration-none fw-bold d-flex justify-content-between"
  style={{ width: '100%' }} 
>
  <span>Company</span>
  <span>
    <FontAwesomeIcon icon={press ? faMinus : faPlus} />
  </span>



</Button>
      <Collapse in={press}>
        <div id="example-collapse-text">
        <a class="dropdown-item" href="#">
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png" alt="Image 1" width="25"/>
                    <p className="fw-bold m-3" style={{fontSize:'15px'}}>Press & Media </p>
                </div>
                
            </a>
        
        </div>

        
      </Collapse>
    </div>
    
  
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default MobileHeader;
