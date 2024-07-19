import React from "react";
import Slider from "react-slick";
import "../Assets/Styles/Empowerbusinessslide.css";
import { useEffect } from "react";
import image14 from "../Assets/Images/french.jpg";
import image15 from "../Assets/Images/big.jpg";
import image16 from "../Assets/Images/dary.jpg";
import image17 from "../Assets/Images/island.jpg";
import image18 from "../Assets/Images/ke.jpg";
import image19 from "../Assets/Images/ola.jpg";
import image20 from "../Assets/Images/posh.jpg";
import image21 from "../Assets/Images/rolls.jpg";
import image22 from "../Assets/Images/spices.jpg";
import image23 from "../Assets/Images/store.jpg";
import image24 from "../Assets/Images/studio.jpg";
import image25 from "../Assets/Images/thelab.jpg";
import image26 from "../Assets/Images/thick.jpg";
import "../Assets/Styles/Buildgrowbusiness.css"



const images = [
  image14,
  image15,
  image16,
  image17,
  image18,
  image19,
  image20,
  image21,
  image22,
  image23,
  image24,
  image25,
  image26,
];

const Empowerbusinessslide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelector(".empower");

      if (entry.isIntersecting) {
        square.classList.add("fade-in-text1");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove("fade-in-text1");
    });
  });

  useEffect(() => {
    observer.observe(document.querySelector(".empower2"));
  }, []);
  return (
    <div>
      <div className="mt-5">
        <div className="empower2 m-5">
          <h1 className="empower fw-bold  fade-in-text1" style={{fontSize:'70px', marginTop:'220px',position:'relative'}}>
            Empowering lacs of businesses, <br />
            Enabling millions of transactions
          </h1>
        </div>
        <div className="slider-container d-flex justify-content-center">
          <Slider {...settings} style={{ width: "60%" }}>
            {images.map((image, index) => (
              <div key={index}>
                <img src={image} alt="" className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Empowerbusinessslide;
