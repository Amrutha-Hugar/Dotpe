import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../Assets/Styles/Merchants.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

export default function Merchants() {
  const [windowDimensions, setWindowDimensions] = useState(
    getWindowDimensions()
  );
  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    dots: false,
    centerPadding:
      windowDimensions.width < 400
        ? "10%"
        : windowDimensions.width < 767
        ? "20%"
        : windowDimensions.width < 1200
        ? "10%"
        : "15%",
    slidesToShow: 1,
    speed: 500,
  };

  let sliderRef = useRef(null);

  const next = () => {
    sliderRef.slickNext();
  };
  const previous = () => {
    sliderRef.slickPrev();
  };

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
  <div className="Merchants">
      <div className="Merchants-container">
      <h1 className="title" style={{fontSize:'60px'}}>Moments with our Merchants</h1>
      <br />
      <Slider
        ref={(slider) => {
          sliderRef = slider;
        }}
        {...settings}
      >
        <div className="merchent-slider-Item-outer">
          <div className="merchent-slider-Item">
            <div ref={elementRef}
            className={`merchent-card-text ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="merchent-name"><h1>Karthik<br/> Ranganathan</h1></div>
              <div className="merchent-designation">
                <h3>Assistant VP, eCommerce, The<br/> ThickShake Factory</h3>
              </div>
              <br/>
              <div className="merchent-quote">
                <p>“Clarity of thought behind building the modules<br/> and having an
                answer to the problems/use<br/> cases we brought up earned the
                brownie points<br/> in choosing DotPe POS.”</p>
              </div>
            </div>
            <div ref={elementRef}
      className={`merchent-card-img ${isVisible ? 'slide-in-up' : ''}`}>
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                alt="merchent"
              />
            </div>
          </div>
        </div>
        <div className="merchent-slider-Item-outer">
          <div className="merchent-slider-Item">
            <div ref={elementRef}
            className={`merchent-card-text ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="merchent-name"><h2>Aparna Andrews</h2></div>
              <div className="merchent-designation">
              <h3>Co-Founder, Biryani Blues</h3>
              </div>
              <br/>
              <div className="merchent-quote">
              <p>“By far the best inventory management system<br/> in the entire
                    market. We love the flow and<br/> thought put into developing the
                    product.”</p>
              </div>
            </div>
            <div ref={elementRef}
      className={`merchent-card-img ${isVisible ? 'slide-in-up' : ''}`}>
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png"
                alt="merchent"
              />
            </div>
          </div>
        </div>
        <div className="merchent-slider-Item-outer">
          <div className="merchent-slider-Item">
            <div ref={elementRef}
            className={`merchent-card-text ${isVisible ? 'slide-in-left' : ''}`}>
              <div className="merchent-name"><h2>Rajat Jaiswal</h2></div>
              <div className="merchent-designation">
             <h3> Co-founder, Wat-a-Burger</h3>
              </div>
              <br/>
              <div className="merchent-quote">
             <p> “With DotPe's QR solutions, we've been able to<br/>reduce our
                    3rd party commission by a whopping<br/>98%. Growing in this
                    challenging fast food<br/> industry is not so difficult anymore,
                    with DotPe as<br/> our partner.”</p>
              </div>
            </div>
            <div ref={elementRef}
      className={`merchent-card-img ${isVisible ? 'slide-in-up' : ''}`}>
              <img
                src="https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png"
                alt="merchent"
              />
            </div>
          </div>
        </div>
      </Slider>
      <br/>
      <div className="arrows">
        <button className="left-btn" onClick={next}>
          <FontAwesomeIcon icon={faAngleLeft} style={{ color: "white" }} />
        </button>
        <button className="right-btn" onClick={previous}>
          <FontAwesomeIcon icon={faAngleRight} style={{ color: "white" }} />
        </button>
      </div>
    </div>
  </div>


  );
}
