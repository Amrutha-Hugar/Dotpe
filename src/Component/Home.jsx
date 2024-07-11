import React from "react";
import Header from "./Header";
import "../Assets/Styles/Home.css";
import image2 from "../Assets/Images/hero.jpg";
import image3 from "../Assets/Images/scan.jpg";
import image4 from "../Assets/Images/laptop.jpg";
import image5 from "../Assets/Images/shef.jpg";
import image6 from "../Assets/Images/lady.jpg";
import image7 from "../Assets/Images/girl.jpg";
import image8 from "../Assets/Images/scan1.jpg";
import image9 from "../Assets/Images/boy.jpg";
import image10 from "../Assets/Images/mobile.jpg";
import image11 from "../Assets/Images/dress.jpg";
import image12 from "../Assets/Images/person.jpg";
import image13 from "../Assets/Images/access.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";

const Home = () => {
  return (
    <div>
      <div className="home w-100 vh-600 ">
        <Header />
        <div>
          <div>
            <div className="container">
              <div className="jumbotron">
                <h1 className="power text-white  ">
                  Power your
                  <br />
                  business with DotPe
                </h1>
              </div>
              <div className="container">
                <div className="row text-center text-white fw-bold d-flex justify-content-center">
                  <div className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center">
                    <div className="m-2">
                      <p>Point of Sale</p>
                    </div>
                    <div className="m-2">
                      <p>Online Store</p>
                    </div>
                    <div className="m-2">
                      <p>QR Solution</p>
                    </div>
                    <div className="m-2">
                      <p>Inventory Management</p>
                    </div>
                  </div>
                  <div>
                    <div className="d-flex flex-column flex-md-row justify-content-center  text-center align-items-center">
                      <div className="m-2">
                        <p>Payment Integration</p>
                      </div>
                      <div className="m-2">
                        <p>Delivery Integration</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bill">
                <button className="btn border-0 btn-primary rounded-5 fw-bold fs-5">
                  Get Started
                </button>
              </div>
              <br />
              <br />
              <div className="container m-5">
                <div className="row">
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image2}
                        alt="Lights"
                        className="img-fluid rounded-5 "
                        style={{ height: "500px", width: "300px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image3}
                        alt="Nature"
                        className="img-fluid rounded-5 mt-5"
                        style={{ height: "auto", width: "300px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image4}
                        alt="Fjords"
                        className="img-fluid rounded-5 mb-5"
                        style={{ height: "auto", width: "300px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image5}
                        alt="Fjords"
                        className="img-fluid rounded-5 mt-5"
                        style={{ height: "450px", width: "300px" }}
                      />
                    </div>
                  </div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>

      <div className="">
        <div className="jumbotron1">
          <h1 className="fw-bold">
            Flexible{" "}
            <span style={{ color: "#50328A" }}>business solutions</span>
            <br />
            for omni-channel selling
          </h1>
        </div>

        <div className="row justify-content-around mt-5 ">
          <div className="col-md-5 col-lg-4 mb-5">
            <div className="card w-100 h-100">
              <div className="card-body">
                <h4 className="card-title fw-bold text-black ">POS</h4>
                <p className="card-text fw-bold text-black">
                  Sync your in-store and online business with the{" "}
                  <span className="cardtext1">
                    industry's leading Point of Sale.
                  </span>
                </p>
                <a href="" className="know btn btn-link">
                  Know More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-5"
                    style={{ color: "#006AFF" }}
                  />
                </a>
              </div>
              <img src={image6} className="card-img-bottom" alt="POS" />
            </div>
          </div>

          <div className="col-md-5 col-lg-4 mb-4">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title1 fw-bold text-black">Online Store</h5>
                <p className="card-text3 fw-bold text-black">
                  Go digital in minutes with your own e-commerce website.
                </p>
                <a href="" className="know btn btn-link">
                  Know More
                  <FontAwesomeIcon
                    icon={faArrowRight}
                    className="ml-2"
                    style={{ color: "#006AFF" }}
                  />
                </a>
              </div>
              <img
                src={image7}
                className="card-img-bottom"
                alt="Online Store"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="row justify-content-around mt-5 ">
        <div className="col-md-5 col-lg-4 mb-5">
          <div className="card  w-100 h-100">
            <div className="card-body ">
              <h4 className="card-title3 fw-bold text-black ">QR Solutions</h4>
              <p className="card-text fw-bold text-black">
                Provide contactless ordering experience, accept payments &amp;
                more with your store's QR code.
              </p>
              <a href="" className="know btn btn-link">
                Know More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-5"
                  style={{ color: "#006AFF" }}
                />
              </a>
            </div>
            <img src={image8} className="card-img-bottom" alt="POS" />
          </div>
        </div>

        <div className="col-md-5 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body w-100 h-100">
              <h5 className="card-title4 fw-bold text-black">
                Marketplace Integrations
              </h5>
              <p className="card-text fw-bold text-black m-2">
                Create a centralised command for your business with our best-in
                class marketplace integrations.
              </p>
              <a href="" className="know btn btn-link">
                Know More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2"
                  style={{ color: "#006AFF" }}
                />
              </a>
            </div>
            <img src={image9} className="card-img-bottom" alt="Online Store" />
          </div>
        </div>
      </div>

      <div className="row justify-content-around mt-5 ">
        <div className="col-md-5 col-lg-4 mb-5">
          <div className="card  w-100 h-100">
            <div className="card-body ">
              <h4 className="card-title5 fw-bold text-black  ">Payments</h4>
              <p className="card-text fw-bold text-black m-1 ">
                Accept payments quickly, easily & securely. Let shoppers pay
                their way with multiple payment options.
              </p>
              <a href="" className="know btn btn-link">
                Know More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-5"
                  style={{ color: "#006AFF" }}
                />
              </a>
            </div>
            <img src={image10} className="card-img-bottom" alt="POS" />
          </div>
        </div>

        <div className="col-md-5 col-lg-4 mb-4">
          <div className="card">
            <div className="card-body ">
              <h5 className="card-title5 fw-bold text-black">Delivery</h5>
              <p className="card-text fw-bold text-black m-2">
                Smartly manage all your deliveries with our seamless 3rd party
                integrations & Swiftly Delivered, Right on Time.
              </p>
              <a href="" className="know btn btn-link">
                Know More
                <FontAwesomeIcon
                  icon={faArrowRight}
                  className="ml-2"
                  style={{ color: "#006AFF" }}
                />
              </a>
            </div>
            <img src={image11} className="card-img-bottom" alt="Online Store" />
          </div>
        </div>
      </div>

      <div className="container-fluid bg-black h-100">
        <div className="row">
          <div className="col-12">
            <h1 className="text-white text-center">
              Ecosystem to sell everything
              <br />
              through DotPe
            </h1>
          </div>

          <div className="row">
            <div className="col-sm-4 d-flex flex-column justify-content-center align-items-start">
              <h1 className="food text-white">Food & Beverages</h1>
              <p className="tools text-white p-2 text-start">
                Tools that connect the front of house with the back of house and
                integrate everything that you need to run your restaurant into
                one dashboard.
              </p>
              <button className="Know  bg-info text-white d-flex justify-content-start border-0">
                <a href="" className="text-decoration-none text-white">
                  Know More
                </a>
              </button>
            </div>
            <div className="col-sm-8 d-flex justify-content-center align-items-center">
              <img
                src={image12}
                alt=""
                className="img-fluid rounded-5 "
                height={"800px"}
                width={"600px"}
              />
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column justify-content-center align-items-start">
            <h1 className="food text-white mb-1">Food & Beverages</h1>
            <p className="tools text-white p-2 text-start">
              Tools that connect the front of house with the back of house and
              integrate everything that you need to run your restaurant into one
              dashboard.
            </p>
            <button className="Know  bg-info text-white d-flex justify-content-start border-0">
              <a href="" className="text-decoration-none text-white">
                Know More
              </a>
            </button>
          </div>
        </div>
        <br />
      </div>

      <div className="row">
        <img src={image13} alt="" className="access w-100 position-relative" />
        <h1 className="work position-absolute fw-bold">
          Dotpe works for all
          <br /> types, sizes & formats
          <br /> of businesses
        </h1>
      </div>

      <div className="row">
        <div class="mt-4 p-5  text-black ">
          <h1 className="lacs fw-bold ">75lacs+</h1>
          <p className="part fw-bold">Forward-thinking Partners</p>
        </div>
      </div>

      <div className="bg-black h-100 w-100">
        <Carousel data-bs-theme="dark">
          <Carousel.Item>
            <div className="carouse d-flex m-5  justify-content-center">
              <div className="m-4">
                <h1 className="text-start fw-bold">
                  Karthik
                  <br />
                  Raganatha
                </h1>
                <p className="text-start fw-bold">
                  Assistant VP, eCommerce,
                  <br /> The ThickShake Factory
                </p>
                <p className="text-start">
                  “Clarity of thought behind building
                  <br /> the modules and having an answer
                  <br /> to the problems/use cases we brought up earned the<br/>
                  brownie points in choosing DotPe POS.”
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                  alt=""
                  height={"300px"}
                  width={"300px"}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carouse d-flex m-5  justify-content-center">
              <div className="m-4">
                <h1 className="text-start">
                  Karthik
                  <br />
                  Raganatha
                </h1>
                <p className="text-start fw-bold">
                  Assistant VP, eCommerce,
                  <br /> The ThickShake Factory
                </p>
                <p className="text-start ">
                  “Clarity of thought behind building
                  <br /> the modules and having an answer
                  <br /> to the problems/use cases we brought up earned the<br/>
                  brownie points in choosing DotPe POS.”
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                  alt=""
                  height={"300px"}
                  width={"300px"}
                />
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
          <div className="carouse d-flex m-5  justify-content-around">
              <div className="m-4">
                <h1 className="text-start m-4 fw-bold">
                  Karthik
                  <br />
                  Raganatha
                </h1>
                <p className="text-start fw-bold">
                  Assistant VP, eCommerce,
                  <br /> The ThickShake Factory
                </p>
                <p className="text-start fw-bold">
                  “Clarity of thought behind building
                  <br /> the modules and having an answer
                  <br /> to the problems/use cases we brought up earned the<br/>
                  brownie points in choosing DotPe POS.”
                </p>
              </div>
              <div>
                <img
                  src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                  alt=""
                  height={"300px"}
                  width={"300px"}
                />
              </div>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
