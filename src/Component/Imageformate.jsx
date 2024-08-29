import React from 'react';
import { TransformWrapper, TransformComponent } from 'react-zoom-pan-pinch';
import "../Assets/Styles/Imageformat.css";

const Imageformate = () => {
  const image13 = "https://cdn.dotpe.in/dotpe-website-live/images/Scroll-Images-01.webp";
    
  return (
    <div className='image-container' style={{ position: 'relative' }}>
      <TransformWrapper
        wheel={{ step: 100 }}  // Adjust the step size for zooming
        options={{
          limitToBounds: false,
          minScale: 1,
          maxScale: 5,
        }}
      >
        {({ zoomIn, zoomOut }) => (
          <React.Fragment>
            {/* Event listeners for wheel (scrolling) */}
            <div
              style={{ width: "100%", height: "auto", overflow: "hidden" }}
              onWheel={(e) => {
                e.preventDefault();
                e.deltaY > 0 ? zoomOut() : zoomIn(); // Zoom out on scroll down, zoom in on scroll up
              }}
            >
              <TransformComponent>
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
                  <p>DotPe works for all <br />types, sizes & formats of businesses.</p>
                </div>
              </TransformComponent>
            </div>
          </React.Fragment>
        )}
      </TransformWrapper>
    </div>
  );
};

export default Imageformate;
