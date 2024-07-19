import React from 'react'
import "../Assets/Styles/Imageformat.css"
import image13 from "../Assets/Images/access.jpg"
import { useState, useRef, useEffect } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";


const Imageformate = () => {


  const image13 = "https://cdn.dotpe.in/dotpe-website-live/images/Scroll-Images-01.webp";
    
  return (
    <div className=''>
    <TransformWrapper wheel={{ step: 10 }}>
      <TransformComponent>
        <div
          style={{
            position: "relative",
            backgroundColor: "rgb(248, 248, 248)",
            width: "100%",
            height: "auto",
            marginTop: "-150px",
          }}
        >
          <img src={image13} alt="" style={{ width: "100%", position:'sticky'}} />
          <div
            className="work-all-section-txt"
            style={{
              height:'30%',
              fontSize:'40px',
              position: "absolute",
              marginTop: "10%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              opacity: 1, // Adjust opacity as needed
              color: "#fff", // Adjust text color as needed
              textAlign: "center",
              color:'black', // Optional: background for better text readability
              padding: "10px", // Optional: padding for better spacing
              borderRadius: "5px",
              marginLeft:'13px',
              fontWeight:'bold',
              opacity:'0.5' // Optional: rounded corners
            }}
          >
            <p>DotPe works for all types, sizes &amp;<br/> formats of businesses.</p>
          </div>
        </div>
      </TransformComponent>
    </TransformWrapper>
  </div>
     
  )
}

export default Imageformate;
