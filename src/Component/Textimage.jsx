import React, { useState } from "react";
import "../Assets/Styles/textimage.css"; 
import Mobilefood from "./Mobilefood";
import { useEffect,useRef } from "react";

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

  const elementRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      {
        threshold: 0.1, // Adjust this threshold as needed
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div className="containersolution">
      {windowDimensions.width < 766 ? (
        <Mobilefood />
      ) : (
        <>
          <div className="w-100" >
            <div className="sell">
            <h1  ref={elementRef} className={`text-start ${isVisible ? 'slide-in-down' : ''}`}>
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
                  <div className={`food-and-beverage ${isVisible ? 'slide-in-left' : ''}`} style={{marginLeft:'5%'}}>
                  <h2 className="m-2 p-2" style={{  fontSize:'30px', fontWeight:'600', }}>
                    Food & Beverage  <span><img src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-grey-image-270522.svg" alt="" className="m-2" height={"20px"}/></span>
                  </h2>
                  <p className="sm-2 p-2" style={{ fontSize:'16px', fontWeight:'300',lineHeight:'20px' }}>
                    Tools that connect the front of house with the back  of house and integrate everything that you need  to run your restaurant into one dashboard.
                  </p>
                  <button className="know-btn m-2 p-2 rounded-1" style={{fontSize:'14px',color: '#ffffff'}}>Know More</button>
                  </div>
                </div>
                <div
                  className="text-section text-start m-5"
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
               <div  className={`Retail ${isVisible ? 'slide-in-left' : ''}`} style={{marginLeft:'5%'}}>
               <h2 className="m-2 p-2" style={{  fontSize:'30px', fontWeight:'600', }} >
                    Retail <span><img src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-grey-image-270522.svg" alt="" className="m-2" height={"20px"}/></span>
                  </h2>
                  <p className=" m-2 p-2"  style={{ fontSize:'16px', fontWeight:'300',lineHeight:'20px' }}>
                    Everything you need to build and run your e-commerce  website
                   with tools like inventory management, marketing and
                    more.
                  </p>
                  <button className="know-btn m-2 p-2 rounded-1" style={{fontSize:'14px',color: '#ffffff'}}>Know More</button>
               </div>
                </div>
                <div
                  className="text-section  text-start m-5"
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
                 <div  className={`Services-and-Others ${isVisible ? 'slide-in-left' : ''}`}style={{marginLeft:'5%'}}>
                 <h2 className="m-2 p-2"style={{  fontSize:'30px', fontWeight:'600', }}>
                    Services & Others <span><img src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-grey-image-270522.svg" alt="" className="m-2" height={"20px"}/></span>
                  </h2>
                  <p className="m-2 p-2"  style={{ fontSize:'16px', fontWeight:'300',lineHeight:'20px' }} >
                    All the tools you need to deliver the best customer service
                    with features like ePOS and CRM. Flexible for any use case.
                  </p>
                  <button className="know-btn m-2 p-2 rounded-1" style={{fontSize:'14px',color: '#ffffff'}}>Know More</button>
                 </div>
                </div>
              </div>
              <div className="image-section m-5">
                <img
                  src={imageSrc.image1}
                  alt="Image"
                  className="image-top rounded-5"
                  style={{marginRight:'-30%',
                }}
                  height={"500px"}
                  width={"900px"}
                />
                <div className="image-bottom m-5 d-flex">
                  <img
                    src={imageSrc.image2}
                    alt="Image 2"
                    className="image-left rounded-5"
                    style={{marginLeft:'8%',
                    }}
                    height={"250px"}
                    width={"300px"}
                  />

                  <img
                    src={imageSrc.image3}
                    alt="Image 3"
                    className="image-right  rounded-5 p-2 m-1"
                   
                    height={"250px"}
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
