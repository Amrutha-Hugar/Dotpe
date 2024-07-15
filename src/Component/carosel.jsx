import React from "react";
import { Carousel, Container, Row, Col } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const CustomCarousel = () => {
  return (
    <div className="bg-black">
        <div>
        <h1 className="moment text-white m-4 p-5 text-center" style={{fontSize:'26px'}}>
          Moments with our<br/> Merchants
        </h1>
        </div>
      <Container className="" style={{marginTop:'15px'}}>
        <Carousel >
          <Carousel.Item
            style={{
              backgroundColor: "#F8F8F8",
              
            }}
          >
            <Row className="d-flex justify-content-around ">
              <div md={4} className="d-flex  justify-content-center">
                <div>
                  <h1 className="text-start m-3"> Karthik Raganatha</h1>
                  <h5 className="text-start m-3">Assistant VP, eCommerce, The ThickShake Factory</h5>
                  <p  className="text-start m-3">
                    “Clarity of thought behind building
                    <br /> the modules and having an answer to the problems/use
                    cases we brought up earned the
                    <br />
                    brownie points in choosing DotPe POS.”
                  </p>
                </div>
                <div md={4}>
                  <img
                    className="d-block w-100"
                    src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                    alt="First slide"
                  />
                </div>
              </div>
            </Row>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            <Row className="d-flex justify-content-around">
              <div md={4} className="d-flex  justify-content-center">
                <div>
                  <h1 className="text-start m-3">Rajat Jaiswal</h1>
                  <h5 className="text-start m-3">Co-founder, Wat-a-Burger</h5>
                  <p className="text-start m-3">
                    {" "}
                    “With DotPe's QR solutions, we've been able to reduce our
                    3rd party commission by a whopping 98%. Growing in this
                    challenging fast food industry is not so difficult anymore,
                    with DotPe as our partner.”
                  </p>
                </div>
                <div md={4}>
                  <img
                    className="d-block w-100"
                    src="https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png"
                    alt="Second slide"
                  />
                </div>
              </div>
            </Row>
          </Carousel.Item>
          <Carousel.Item
            style={{
              backgroundColor: "#F8F8F8",
            }}
          >
            <Row className="d-flex justify-content-around ">
              <div md={4} className="d-flex  justify-content-center ">
                <div>
                  <h1 className="text-start m-3">Aparna Andrews</h1>
                  <h5 className="text-start m-3">Co-Founder, Biryani Blues</h5>
                  <p className="text-start m-3">
                    {" "}
                    “By far the best inventory management system in the entire
                    market. We love the flow and thought put into developing the
                    product.”
                  </p>
                </div>

                <div md={4}>
                  <img
                    className="d-block w-100"
                    src="https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png"
                    alt="Third slide"
                  />
                </div>
              </div>
            </Row>
          </Carousel.Item>
        </Carousel>
      </Container>
    </div>
  );
};

export default CustomCarousel;
