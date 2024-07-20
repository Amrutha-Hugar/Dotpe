import React from "react";

import image6 from "../Assets/Images/lady.jpg";
import image7 from "../Assets/Images/girl.jpg";
import image8 from "../Assets/Images/scan1.jpg";
import image9 from "../Assets/Images/boy.jpg";
import image10 from "../Assets/Images/mobile.jpg";
import image11 from "../Assets/Images/dress.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "../Assets/Styles/Solutions.css"
import { useEffect,useState,useRef } from "react";

export default function Solutions() {

  
  const [isVisible, setIsVisible] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => {
      if (textRef.current) {
        observer.unobserve(textRef.current);
      }
    };
  }, []);
  return (
    <div>
      <div className="mt-5">
        <div className="container5 mt-5">
          <div className="row justify-content-center" style={{gap:'90px'}}>
            <div className="col-md-5 col-lg-4 mb-5">
            <div className="card  rounded-5">
                <div className="card-body d-flex flex-column text-start m-4  ">
                  <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>POS </h4>
                  <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px',
    position:'relative'}}>
                    Sync your in-store and online business with the{" "}
                    <span className="cardtext1">
                      industry's leading Point of Sale.
                    </span>
                  </p>
                  <div className="mt-auto">
                    <a href="" className="know btn btn-link  " style={{fontSize:"22px",fontWeight:"600",  }}>
                      Know More {" "}
                      <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
                     
                    </a>
                  </div>
                </div>
                <img src={image6} className="card-img-top rounded-5" alt="POS" />
              </div>
              
            </div>

            <div className="col-md-5 col-lg-4 mb-4" >
              <div className="card rounded-5">
                <div className="card-body d-flex flex-column text-start m-3">
                
                   <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>Online Store </h4>
                  <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px'}}>
                    Go digital in minutes with your own e-commerce <br/>website.
                  </p>
                  <div className="mt-auto">
                    <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                      Know More{" "}
                      <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
                   
                    </a>
                  </div>
                </div>
                <img src={image7} className="card-img-top rounded-5" alt="Online Store" />
              </div>
            </div>
            </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5"  style={{gap:'90px'}} >
        <div className="col-md-5 col-lg-4 mb-5">
        <div className="card rounded-5">
            <div className="card-body text-start m-3">
            <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>QR Solution</h4>
              <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px'}}>
                Provide contactless ordering experience, accept payments &amp;
                more with your store's QR code.
              </p>
              <a href="" className="know btn btn-link m-2"  style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                
                 <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
              </a>
            </div>
            <img src={image8} className="card-img-bottom rounded-5" alt="POS" />
          </div>
        </div>

        <div className="col-md-5 col-lg-4 mb-4">
        <div className="card  rounded-5">
            <div className="card-body w-100 h-100 text-start m-3">
            <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>Market Integration</h4>
              <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"55px",
    marginLeft:'1px'}}>
                Create a centralised command for your business with our best-in
                class marketplace integrations.
              </p>
              <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
              </a>
            </div>
            <img src={image9} className="card-img-bottom rounded-5" alt="Online Store" />
          </div>
        </div>
      </div>

      <div className="row justify-content-center mt-5 " style={{gap:'90px'}}>
        <div className="col-md-5 col-lg-4 mb-5">
        <div className="card rounded-5">
            <div className="card-body text-start m-3">
            <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>Payments </h4>
              <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"55px",
    marginLeft:'1px'}}>
                Accept payments quickly, easily & securely. Let shoppers pay
                their way with multiple payment options.
              </p>
              <br/>
              <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
              </a>
            </div>
            <img src={image10} className="card-img-bottom rounded-5" alt="POS" />
          </div>
        </div>

        <div className="col-md-5 col-lg-4 mb-4">
        <div className="card rounded-5">
            <div className="card-body text-start m-3">
            <h4 ref={textRef} className={`card-title fw-bold text-black m-2 animated-text1 ${isVisible ? 'visible' : ''}`} style={{fontSize:'40px', position:'relative'}}>Delivery </h4>
              <p className={`card-text text-black p-3 ${isVisible ? 'animate-text2' : ''}`} style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"50px",
    marginLeft:'1px'}}>
                Smartly manage all your deliveries with our seamless 3rd party
                integrations & Swiftly Delivered, Right on Time.
              </p>
              <br/>
              <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" /> 
              </a>
            </div>
            <img src={image11} className="card-img-bottom rounded-5" alt="Online Store" />
          </div>
        </div>
      </div>
    </div>
  );
}
