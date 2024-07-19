import React from "react";
import image2 from "../Assets/Images/hero.jpg";
import image3 from "../Assets/Images/scan.jpg";
import image4 from "../Assets/Images/laptop.jpg";
import image5 from "../Assets/Images/shef.jpg";
import "../Assets/Styles/HomePageBannerText.css";

export default function HomePageBannerText() {
  return (
    <div className="HomePageBannerText-Container">
      <div className="HomePageBannerText">
        <h1>
          Power your
          <br />
          business with DotPe
        </h1>
      </div>
      <div className="HomePageBannerText-pointes">
        <ul>
          <li>Point of Sale</li>
          <li>Online Store</li>
          <li>QR Solution</li>
          <li>Inventory Management</li>
          <li>Payment Integration</li>
          <li>Delivery Integration</li>
        </ul>
      </div>
<br/>
      <button className="getStarted-btn">Get Started</button>

      <div className="HomePageBannerImages-Container">
        <img src={image2} className="image1" alt="Lights" />
        <img src={image3} className="image2" alt="Lights" />
        <img src={image4} className="image3" alt="Lights" />
        <img src={image5} className="image4" alt="Lights" />
      </div>

     
    </div>
  );
}
