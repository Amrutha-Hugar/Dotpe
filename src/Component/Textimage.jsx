import React, { useState } from "react";
import "../Assets/Styles/textimage.css"; // Import the CSS file
import Mobilefood from "./Mobilefood";
import { useEffect } from "react";

const TextImageSwitcher = () => {
  const [imageSrc, setImageSrc] = useState({
    image1:
      "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg",
    image2:
      "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-2-240622.jpg",
    image3:
      "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-3-240622.jpg",
  });

  const handleMouseEnter = (src) => {
    setImageSrc(src);
  };

  const handleMouseLeave = () => {
    setImageSrc({
      image1:
        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg",
      image2:
        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-2-240622.jpg",
      image3:
        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-3-240622.jpg",
    });
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
    <div className="containersolution">
      {windowDimensions.width < 766 ? (
        <Mobilefood />
      ) : (
        <>
          <div className="">
            <div className="sell">
            <h1 className="text-start">
              Ecosystem to sell everything
              <br /> through DotPe
            </h1>
            </div>
            <div className="d-flex justify-content-around m-5">
              <div className="text1">
                <div
                  className="text-section  text-start text-top position-relative m-5"
                  onMouseEnter={() =>
                    handleMouseEnter({
                      image1:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-1-240622.jpg",
                      image2:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-2-240622.jpg",
                      image3:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-fnb-image-3-240622.jpg",
                    })
                  }
                  onMouseLeave={handleMouseLeave}
                >
                  <div className="" style={{marginLeft:'5%'}}>
                  <h1 className="m-2 p-2" style={{ opacity: "1" }}>
                    Food & Beverage
                  </h1>
                  <p className="tool sm-2 p-2" style={{ fontSize:'22px',fontFamily:'sans-serif'}}>
                    Tools that connect the front of house with the back of house
                    and integrate everything that you need to run your
                    restaurant into one dashboard.
                  </p>
                  <button className="know-btn m-2 p-2">Know More</button>
                  </div>
                </div>
                <div
                  className="text-section text-light-gray text-start m-5"
                  onMouseEnter={() =>
                    handleMouseEnter({
                      image1:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-1-240622.jpg",
                      image2:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-retail-image-2-240622.jpg",
                      image3:
                        "https://cdn.dotpe.in/dotpe-website-live/images/home/retail-img-3.jpg",
                    })
                  }
                  onMouseLeave={handleMouseLeave}
                >
               <div style={{marginLeft:'5%'}}>
               <h1 className="m-2 p-2" >
                    Retail
                  </h1>
                  <p className="tool1 m-2 p-2" style={{ fontSize:'22px',fontFamily:'sans-serif'}}>
                    Everything you need to build and run your e-commerce website
                    <br /> with tools like inventory management, marketing and
                    more.
                  </p>
                  <button className="know-btn m-2 p-2" style={{fontSize:'25px'}}>Know More</button>
               </div>
                </div>
                <div
                  className="text-section text-gray text-start m-5"
                  onMouseEnter={() =>
                    handleMouseEnter({
                      image1:
                        "https://cdn.dotpe.in/dotpe-website-live/images/home/services-img-1.jpg" ,
                      image2:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-2-240622.jpg",
                      image3:
                        "https://cdn.dotpe.in/dotpe-website-live/images/latest-services-image-3-240622.jpg",
                    })
                  }
                  onMouseLeave={handleMouseLeave}
                >
                 <div style={{marginLeft:'5%'}}>
                 <h1 className="m-2 p-2" >
                    Services & Others
                  </h1>
                  <p className="tool2 m-2 p-2" style={{ fontSize:'22px', fontWeight:'300', fontFamily:'sans-serif'}} >
                    All the tools you need to deliver the best customer service
                    with <br />
                    features like ePOS and CRM. Flexible for any use case.
                  </p>
                  <button className="know-btn m-2 p-2">Know More</button>
                 </div>
                </div>
              </div>
              <div className="image-section m-5">
                <img
                  src={imageSrc.image1}
                  alt="Image"
                  className="image-top rounded-5"
                  style={{marginRight:'-25%',
                }}
                  height={"500px"}
                  width={"1100px"}
                />
                <div className="image-bottom m-5 d-flex">
                  <img
                    src={imageSrc.image2}
                    alt="Image 2"
                    className="image-left rounded-5"
                    style={{marginLeft:'8%',
                    }}
                    height={"350px"}
                    width={"400px"}
                  />

                  <img
                    src={imageSrc.image3}
                    alt="Image 3"
                    className="image-right  rounded-5 p-2 m-1"
                   
                    height={"350px"}
                    width={"700px"}
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
