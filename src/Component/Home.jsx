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
import { useState } from "react";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Footer from "./Footer";
import Carousel from "react-bootstrap/Carousel";
import OwlCarousel from "react-owl-carousel";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import TextImageSwitcher from "../Component/Textimage";
import DynamicHeader from "./Dyanmicheader";
import MobileHeader from "./Mobileheader";
import CustomCarousel from "./carosel";
import AnimationText from "./Flexible";
import AnimationText1 from "../Animation/Pos";
import "react-multi-carousel/lib/styles.css";
import Carousel1 from "react-multi-carousel";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const Home = () => {
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
  const CustomLeftArrow = ({ onClick }) => {
    return null;
  };

  const CustomRightArrow = ({ onClick }) => {
    return null;
  };

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  console.log(windowDimensions, "windowDimensions");

  return (
    <div>
      <div className="home w-100 vh-600 ">
        {windowDimensions.width < 766 ? (
          <MobileHeader />
        ) : (
          <>
            <DynamicHeader />
            <Header />
          </>
        )}

        <div>
          <div>
            <div className="container  d-flex flex-column mt-5">
              <div className="jumbotron">
                <h1 className="power text-white position-relative mr-2 ">
                  Power your
                  <br />
                  business with DotPe
                </h1>
              </div>
              <div className="container1">
                <div className="row text-center  fw-bold d-flex justify-content-center " style={{color:'#ae9bf1',}}>
                  <div
                    className="col-12 col-md-6 d-flex flex-column flex-md-row justify-content-center align-items-center"
                    style={{ textWrap: "nowrap", }}
                  >
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
                  
                    <div className="payment d-flex flex-column flex-md-row justify-content-center  text-center align-items-center">
                      <div className="m-1">
                        <p>Payment Integration</p>
                      </div>
                      <div className="m-1">
                        <p>Delivery Integration</p>
                      </div>
                    </div>
                 
                </div>
              </div>
              <br/>
            

              <div className="bill">
                <button className="btn border-0 btn-primary rounded-5 fw-bold  ">
                  Get Started
                </button>
              </div>
              <br />
              <br />
              <div className="container3 ">
                <div className="row">
                  <div className="col-md-3 d-flex flex-column align-items-center ">
                    <div className="thumbnail">
                      <img
                        src={image2}
                        alt="Lights"
                        className="img-fluid rounded-5 mr-4"
                        style={{ height: "500px", width: "400px" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image3}
                        alt="Nature"
                        className="img-fluid rounded-5 mt-5"
                        style={{ height: "auto", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image4}
                        alt="Fjords"
                        className="img-fluid rounded-5 mb-5"
                        style={{ height: "auto", width: "100%" }}
                      />
                    </div>
                  </div>
                  <div className="col-md-3 d-flex flex-column align-items-center">
                    <div className="thumbnail">
                      <img
                        src={image5}
                        alt="Fjords"
                        className="img-fluid rounded-5 mt-5"
                        style={{ height: "auto", width: "100%" }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div></div>
        <div></div>
      </div>
      <br />

      <AnimationText />

      <div className="mt-5">
        <div className="container5 mt-5">
          <div className="row justify-content-around ">
            <div className="col-md-5 col-lg-4 mb-5">
              <div className="card  rounded-5">
                <div className="card-body d-flex flex-column text-start m-4  ">
                  <h4 className="card-title fw-bold text-black m-2" style={{fontSize:'40px'}}>POS </h4>
                  <p className="card-text  text-black  p-3 " style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px'}}>
                    Sync your in-store and online business with the{" "}
                    <span className="cardtext1">
                      industry's leading Point of Sale.
                    </span>
                  </p>
                  <div className="mt-auto">
                    <a href="" className="know btn btn-link  " style={{fontSize:"22px",fontWeight:"600"}}>
                      Know More {" "}
                      <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
                     
                    </a>
                  </div>
                </div>
                <img src={image6} className="card-img-top rounded-5" alt="POS" />
              </div>
            </div>

            <div className="col-md-5 col-lg-4 mb-4">
              <div className="card rounded-5">
                <div className="card-body d-flex flex-column text-start m-3">
                  <h5 className="card-title1 fw-bold text-black m-2" style={{fontSize:'40px'}}>
                    Online Store
                  </h5>
                  <p className="card-text3  text-black p-3" style={{fontSize: "18px",
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

      <div className="row justify-content-around mt-5 ">
        <div className="col-md-5 col-lg-4 mb-5">
          <div className="card rounded-5">
            <div className="card-body text-start m-3">
              <h4 className="card-title3 fw-bold text-black m-2 " style={{fontSize:'40px'}}>QR Solutions</h4>
              <p className="card-text  text-black p-3" style={{fontSize: "18px",
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
              <h5 className="card-title4 fw-bold text-black m-2" style={{fontSize:'40px'}}>
                Marketplace Integrations
              </h5>
              <p className="card-text  text-black p-3" style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
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

      <div className="row justify-content-around mt-5 ">
        <div className="col-md-5 col-lg-4 mb-5">
          <div className="card rounded-5">
            <div className="card-body text-start m-3">
              <h4 className="card-title5 fw-bold text-black m-2 " style={{fontSize:'40px'}}>Payments</h4>
              <p className="card-text text-black p-3" style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px'}}>
                Accept payments quickly, easily & securely. Let shoppers pay
                their way with multiple payment options.
              </p>
              <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" />
              </a>
            </div>
            <img src={image10} className="card-img-bottom rounded-5" alt="POS" />
          </div>
        </div>

        <div className="col-md-5 col-lg-4 mb-4">
          <div className="card w-100 h-100 rounded-5">
            <div className="card-body text-start m-3">
              <h5 className="card-title5 fw-bold text-black m-2" style={{fontSize:'40px'}}>Delivery</h5>
              <p className="card-text  text-black p-3" style={{fontSize: "18px",
    fontWeight: "600",
    lineHeight: '24px',
    height:"60px",
    marginLeft:'1px'}}>
                Smartly manage all your deliveries with our seamless 3rd party
                integrations & Swiftly Delivered, Right on Time.
              </p>
              <a href="" className="know btn btn-link m-2" style={{fontSize:"22px",fontWeight:"600"}}>
                Know More
                <img className="m-2"   src="https://cdn.dotpe.in/dotpe-website-live/images/right-arrow-1.png" alt="" /> 
              </a>
            </div>
            <img src={image11} className="card-img-bottom rounded-5" alt="Online Store" />
          </div>
        </div>
      </div>

      <TextImageSwitcher />

      <div className="row">
        <div className="format">
          <img src={image13} alt="" className="access w-100 " />
        </div>
      </div>

      <div className="row ">
        <div class="mt-4 p-5  text-black ">
          <h2 className="lacs fw-bold ">75lacs+</h2>
          <p className="part fw-bold">Forward-thinking Partners</p>
        </div>
      </div>

      {windowDimensions.width < 766 ? (
        <CustomCarousel />
      ) : (
        <>
          <div className="bg-black h-100 w-100 ">
            <h1 className="moment text-white m-5 p-5 ">
              Moments with our Merchants
            </h1>
            <Carousel>
              <Carousel.Item
                style={{
                  backgroundColor: "#F8F8F8",
                  height: "400px",
                  width: "1000px",
                  marginLeft: "450px",
                }}
                className="rounded-5"
              >
                <div className="d-flex justify-content-end align-items-center h-100">
                  <div className="slide-text text-black text-start m-5">
                    <h2>
                      Karthik
                      <br />
                      Raganatha
                    </h2>
                    <h3>
                      Assistant VP, eCommerce,
                      <br /> The ThickShake Factory
                    </h3>
                    <p>
                      “Clarity of thought behind building
                      <br /> the modules and having an answer
                      <br /> to the problems/use cases we brought up earned the
                      <br />
                      brownie points in choosing DotPe POS.”
                    </p>
                  </div>
                  <div className="slide-image ms-3">
                    <img
                      src="https://cdn.dotpe.in/dotpe-website-live/images/thick-shake-founder-image-160622.png"
                      alt="Image 1"
                      height={"300px"}
                      width={"300px"}
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  backgroundColor: "#F8F8F8",
                  height: "400px",
                  width: "1000px",
                  marginLeft: "450px",
                }}
                className="rounded-5"
              >
                <div className="d-flex justify-content-end align-items-center h-100">
                  <div className="slide-text text-black text-start m-5">
                    <h2 className="heading-text">Rajat Jaiswal</h2>
                    <h3>Co-founder, Wat-a-Burger</h3>
                    <p>
                      “With DotPe's QR solutions, we've been able to reduce our
                      3rd party commission by a whopping 98%. Growing in this
                      challenging fast food industry is not so difficult
                      anymore, with DotPe as our partner.”
                    </p>
                  </div>
                  <div className="slide-image ms-3">
                    <img
                      src="https://cdn.dotpe.in/dotpe-website-live/images/wat-a-burger-founder-image-160622.png"
                      alt="Image 2"
                      height={"300px"}
                      width={"300px"}
                    />
                  </div>
                </div>
              </Carousel.Item>
              <Carousel.Item
                style={{
                  backgroundColor: "#F8F8F8",
                  height: "400px",
                  width: "1000px",
                  marginLeft: "450px",
                }}
                className="rounded-5"
              >
                <div className="d-flex justify-content-end align-items-center h-100">
                  <div className="slide-text text-black text-start m-5">
                    <h2 className="heading-text">Aparna Andrews</h2>
                    <h3>Co-Founder, Biryani Blues</h3>
                    <p>
                      “By far the best inventory management system in the entire
                      market. We love the flow and thought put into developing
                      the product.”
                    </p>
                  </div>
                  <div className="slide-image ms-3">
                    <img
                      src="https://cdn.dotpe.in/dotpe-website-live/images/biryani-blues-founder-image-160622.png"
                      alt="Image 3"
                      height={"300px"}
                      width={"300px"}
                    />
                  </div>
                </div>
              </Carousel.Item>
            </Carousel>
            <br />
            <br />
          </div>
        </>
      )}

      <br />
      <br />

      <div className="mt-5">
        <div className="m-5">
          <h1 className="empower fw-bold">
            Empowering lacs of businesses, <br />
            Enabling millions of transactions
          </h1>
        </div>
        <div style={{ width: "100%" }} className="d-flex justify-content-center">
          <Carousel1
            responsive={responsive}
            autoPlay={true}
            autoPlaySpeed={2000}
            infinite={true}
            customLeftArrow={<CustomLeftArrow />}
            customRightArrow={<CustomRightArrow />}
          >
            <div style={{ width: 200, height: 200 }}>
              {" "}
              <img src={image14} alt="Image 14" />
            </div>
            <div style={{ width: 200, height: 200 }}>
              {" "}
              <img src={image14} alt="Image 14" />
            </div>
            <div style={{ width: 200, height: 200 }}>
              {" "}
              <img src={image14} alt="Image 14" />
            </div>
            <div style={{ width: 200, height: 200 }}>
              {" "}
              <img src={image14} alt="Image 14" />
            </div>
          </Carousel1>
        </div>
      </div>
      <br />
      <br />
      <div className="contain m-5 w-80">
        <div>
          <h1 className="build fw-bold text-center">
            Build and grow your
            <br /> business with DotPe.
          </h1>
          <p className="tools">
            Get all the tools you need to take your business to the next
            <br />
            level & join the millions of merchants using DotPe.
          </p>
        </div>
        <br />
        <br />
        <div
          className="formclass d-flex justify-content-center align-items-center text-center"
          style={{ height: "20vh" }}
        >
          <form
            action=""
            className="border p-3 d-flex rounded-5"
            style={{ width: "100%", maxWidth: "500px" }}
          >
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="form-control m-2"
            />
            <button className="btn btn-primary m-2 w-100">Request Demo</button>
          </form>
        </div>
      </div>

      <br />
      <br />
      <Footer />
    </div>
  );
};

export default Home;
