import React from "react";
import { faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { Collapse, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const Mobilefood = () => {
 
  const [food, setfood] = useState(false);
  const [retail, setretail] = useState(false);
  const [service, setservice] = useState(false);
  return (
    <div>
      <div>
        <div
          style={{
            color:'white',
            padding: "30px",
            display: "flex",
            marginRight:'20px',
            alignItems: "center",
            fontSize:"30px"
          }}
        >
          <div className="text-center">Ecosystem to sell<br />  everything<br /> through DotPe</div>
        </div>

         
            <div>
              <div>
                <Button
                  onClick={() => setfood(!food)}
                  aria-controls="example-collapse-text"
                  aria-expanded={food}
                  variant="link"
                  className="text-white text-decoration-none fw-bold d-flex justify-content-between text-center"
                  style={{ width: "100%",
                     fontSize:'18px',
                     margin:'10px',
                       
                   }}
                >
                  Food & Beverages{" "}
                  <FontAwesomeIcon className="" icon={food ? faMinus : faPlus} />
                </Button>
                <Collapse in={food}>
                  <div id="example-collapse-text" className=" ">
                    <a class="dropdown-item" href="#">
                      <p className="text-start  " style={{ paddingLeft: "18px", color:'#ffffff', opacity:'0.5'}}>
                        {" "}
                        Tools for front of house, back of house, and
                        <br /> everything in between.
                      </p>
                      <button className="mm1 " style={{marginRight:'170px'}}>Know More</button>
                      <div style={{width:'300px' }}>
                        <img
                          src="https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg"
                          alt="Image 1"
                          className="m-4"
                        />
                      </div>
                      <div className="d-flex m-2">
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-2-240622.jpg" alt="" width={"200px"}/>
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-3-240622.jpg" alt=""  width={"140px"} />
                        </div>
                    </a>
                  </div>
                </Collapse>
              </div>
            </div>

            <div className="text-start  ">
              <Button
                onClick={() => setretail(!retail)}
                aria-controls="example-collapse-text"
                aria-expanded={retail}
                variant="link"
                className="text-white text-decoration-none fw-bold d-flex justify-content-between"
                style={{ width: "100%",
                     fontSize:'18px',
                     margin:'10px',
                 }}
              >
                Retail
                <span>
                  <FontAwesomeIcon icon={retail ? faMinus : faPlus} />
                </span>
              </Button>
              <Collapse in={retail}>
                <div id="example-collapse-text">
                  <a class="dropdown-item" href="#">
                  <p className="fw-bold m-2 text-white" style={{ fontSize: "15px",paddingLeft: "18px", color:'#ffffff', opacity:'0.5' }}>
                  Everything you need to build and run your<br /> e-commerce website with tools like inventory<br/> management, marketing and more.  
                        </p>
                        <button className="mm1 m-4 ">Know More</button>
                    <div style={{width:"300px"}} className="m-4">
                      <img
                        src="https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-1-240622.jpg"
                        alt="Image 1"
                        
                      />
                    </div>
                    <div className="d-flex m-2">
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-2-240622.jpg" alt="" width={"200px"}/>
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/home/retail-img-3.jpg" alt=""  width={"140px"} />
                        </div>
                  </a>
                </div>
              </Collapse>
            </div>
          
          
            <div className="text-start  ">
              <Button
                onClick={() => setservice(!service)}
                aria-controls="example-collapse-text"
                aria-expanded={service}
                variant="link"
                className="text-white text-decoration-none fw-bold d-flex justify-content-between"
                style={{ width: "100%",
                    fontSize:'18px',
                    margin:'10px',
                 }}
              >
               Services & Others
                <span>
                  <FontAwesomeIcon icon={service ? faMinus : faPlus} />
                </span>
              </Button>
              <Collapse in={service}>
                <div id="example-collapse-text">
                  <a class="dropdown-item" href="#">
                  <p className="fw-bold m-2 text-white" style={{ fontSize: "15px",paddingLeft: "18px", color:'#ffffff', opacity:'0.5' }}>
                  All the tools you need to deliver the best<br /> customer service with features like ePOS and<br /> CRM. Flexible for any use case.  
                        </p>
                        <button className="mm1 m-4 p-2 ">Know More</button>
                    <div className="m-4" style={{ width:"300px"}}>
                      <img
                        src="https://cdn.dotpe.in/dotpe-website-live/images/home/services-img-1.jpg"
                        alt="Image 1"
                       
                      />
                    </div>
                    <div className="d-flex m-2">
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-2-240622.jpg" alt="" width={"200px"}/>
                            <img src="https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-3-240622.jpg" alt=""  width={"140px"} />
                        </div>
                  </a>
                </div>
              </Collapse>
            </div>
      
      </div>
    </div>
  );
};

export default Mobilefood;
