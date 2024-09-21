import React from 'react'
import Slider from "react-slick";
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
import "../Assets/Styles/Leadingbrands.css"



const Leadingbrand = () => {

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


  const settings = {
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };


  return (
    <div>
       <div className="slider-contain d-flex justify-content-center">
          <Slider {...settings} style={{ width: "70%" }}>
            {images.map((image, index) => (
              <div key={index} className="zoomIn">
                <img src={image} alt="" className="slider-image" />
              </div>
            ))}
          </Slider>
        </div>
        <br/>
        <div className='leadingbrands'>
          <p>Leading F&B brands trust DotPe as their partner - from local hotspots to large-scale<br/> bars, restaurants, pubs, hotels, airports and entertainment venues.</p>
        </div>
    </div>
  )
}

export default Leadingbrand

