import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import "../Assets/Styles/Imageformat.css";

const Imageformate = () => {
  const image13 = "https://cdn.dotpe.in/dotpe-website-live/images/Scroll-Images-01.webp";
    
  return (
    <div className='image-container'>
      <TransformWrapper
        wheel={{ step: 10 }}
        options={{
          limitToBounds: false,
          minScale: 1,
          maxScale: 5,
        }}
      >
        <TransformComponent>
          <div
            style={{
              backgroundColor: "rgb(248, 248, 248)",
              width: "100%",
              height: "auto",
              overflow: "hidden",
            }}
          >
            <img src={image13} alt="DotPe Image" style={{ width: "100%" }} />
            <div
              className="work-all-section-txt"
              style={{
                height: '30%',
                fontSize: '35px',
                position: "fixed",
                top: "60%",
                left: "20%",
                transform: "translate(-50%, -50%)",
                color: "black",
                textAlign: "center",
                padding: "10px",
                borderRadius: "5px",
                fontWeight: 'bold',
                
              }}
            >
              <p>DotPe works for all <br />types, sizes &amp; formats of businesses.</p>
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default Imageformate;
