import React, { useState } from "react";
import "../Assets/Styles/textimage.css"; // Import the CSS file
import Mobilefood from "./Mobilefood";
import {useEffect } from "react";


const TextImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState("https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg");

  const handleMouseEnter = (src) => {
    setImageSrc(src);
  };

  const handleMouseLeave = () => {
    setImageSrc("https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg");
  };

  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );

  function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height,
    };
  }

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimensions, "windowDimensions");

  return (
    <div className="container bg-black">
          {windowDimensions.width < 766 ? (
          <Mobilefood />
        ) : (
          <>
        
             <div>
        <h1 className="sell text-white text-start m-5 p-5">
          Ecosystem to sell everything<br /> through DotPe
        </h1>
        <br />
        <br />
        <div className="d-flex justify-content-around m-5">
          <div className="text1">
            <div
            
              className="text-section text-gray text-start text-top position-relative m-5"
              onMouseEnter={() => handleMouseEnter("https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg")}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="m-2 p-2" style={{opacity:'2.5'}}>Food & Beverage</h1>
              <p className="tool sm-2 p-2"  style={{opacity:'2.5'}}>Tools that connect the front of house with the back of house and<br /> integrate everything that you need to run your restaurant into one<br /> dashboard.</p>
              <button className="mm1 m-2 p-2">Know More</button>
            </div>
            <div
              className="text-section text-gray text-start m-5"
              onMouseEnter={() => handleMouseEnter("https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-1-240622.jpg")}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="m-2 p-2"  style={{opacity:'2.5'}}>Retail</h1>
              <p className="tool1 m-2 p-2"  style={{opacity:'2.5'}}>Everything you need to build and run your e-commerce website<br /> with tools like inventory management, marketing and more.</p>
              <button className="mm2 m-2 p-2">Know More</button>
            </div>
            <div
              className="text-section text-gray text-start m-5"
              onMouseEnter={() => handleMouseEnter("https://cdn.dotpe.in/dotpe-website-live/images/home/services-img-1.jpg")}
              onMouseLeave={handleMouseLeave}
            >
              <h1 className="m-2 p-2"  style={{opacity:'2.5'}}>Services & Others</h1>
              <p className="tool2 m-2 p-2"  style={{opacity:'2.5'}}>All the tools you need to deliver the best customer service with <br />features like ePOS and CRM. Flexible for any use case.</p>
              <button className="mm3 m-2 p-2">Know More</button>
            </div>
          </div>
          <div className="image-section m-5">
            <img
              src={imageSrc}
              alt="Image"
              className="image-top rounded-5"
              height={"400px"}
              width={"700px"}
            />
            <div className="image-bottom m-5 d-flex">
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-2-240622.jpg"
                alt="Image 2"
                className="image-left rounded-5"
                height={"300px"}
                width={"400px"}
              />
              
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-3-240622.jpg"
                alt="Image 3"
                className="image-right  rounded-5 p-2 m-1"
               
                height={"300px"}
                width={"400px"}
              />
            </div>
          </div>
        </div>
      </div>
          </>
        )}
     
    </div>
  );
};

export default TextImageSwitcher;

