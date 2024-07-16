import React from "react";
import "../Assets/Styles/Businesstype.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

export default function BusinessTypeNavItem() {
  return (
    <div className="drop" >
      <div className="dropdown">
        <button className="dropbtn  text-white fw-bold">Business Types</button>
        <div className="dropdown-content ">
       
            <a class="dropdown-item " href="#">
                <div className="d-flex  align-items-center ">
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/food-beverage-icon.png" alt="Image 1" width="25"/>
                    <div className="d-flex justify-content-center align-items-center"><h5 className="fw-bold " style={{fontSize:'20px'}}>Food & Beverages<FontAwesomeIcon icon={faArrowRight} size="1x" className="mt-3" /></h5></div>
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}> Tools for front of house, back of house, and<br/> everything in between.</p>
            </a>
            <a class="dropdown-item" href="#">
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/retail-icon.png" alt="Image 2" width="25"/>
                    <h5 className="fw-bold">Retail <FontAwesomeIcon icon={faArrowRight} size="1x" className="mt-2 p-1" /></h5>
                    
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}>All the retail tools you need from offline to<br/>
                online, in-store &amp; online.</p>
            </a>
            <a class="dropdown-item " href="#">
                <div >
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/services-icon.png" alt="Image 3" width="25"/>
                    <h5 className="fw-bold">Services & Others <FontAwesomeIcon icon={faArrowRight} size="1x" className="mt-2  p-1" /></h5>
                </div>
                <p className="text-start" style={{paddingLeft:"25px"}}>Solutions for health, repair &amp; other service<br/>
                professionals.</p>
            </a>
        </div>
      </div>
  <div>

  </div>
  <div className="dropdown">
        <button className="dropbtn fw-bold text-white">Company</button>
        <div className="dropdown-content " style={{  height:'50px'}} >
        <a class="dropdown-item" href="#">
                <div>
                    <img src="https://cdn.dotpe.in/dotpe-website-live/images/press-media-icon.png" alt="Image 3" width="25"/>
                    <h3 className="fw-bold" style={{fontSize:"18px" }}>Press & Media <FontAwesomeIcon icon={faArrowRight}  className=" " /></h3>
                </div>
                </a>
        </div>
      </div>
      <br/>
      <br/>
    </div>
   

  );
}
