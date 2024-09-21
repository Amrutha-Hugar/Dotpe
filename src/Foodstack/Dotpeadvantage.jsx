import React from "react";
import "../Assets/Styles/Dotpeadvantage.css";

const Dotpeadvantage = () => {
  return (
    <div className="dotpeadvantage-container">
      <div className="dotpeadvantage-content">
        <h1>The DotPe advantage</h1>
        <br/>
        <p>
          Integrate everything you need to operate your restaurant into one
          dashboard. Connect
          <br /> your front of house with the back of house, gather data, track
          ordering history, manage
          <br /> inventory and much more.
        </p>
      </div>
      <div className="sets d-flex justify-content-center" style={{gap:'30px'}}>
       <div className="setup">
        <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/easy-to-use.svg" alt="" />
        <h3>Setup is Simple</h3>
        <p>DotPe is easy to use - so you<br/> can spend more time with your<br/> guests, and less time training<br/> staff.</p>
       </div>

       <div className="setup">
        <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/headphones.svg" alt="" />
        <h3>24/7 Dedicated Account<br/> Support</h3>
        <p>Help is always at hand with<br/> our round-the-clock support<br/> to resolve your queries and<br/> concerns.</p>
        </div>

        <div className="setup">
        <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/top.svg" alt="" />
        <h3>Continuous Updates</h3>
        <p>The world of commerce is<br/> constantly changing and our<br/> tools are constantly synced<br/> with these developments.</p>
        <p></p>
        </div>

        <div className="setup">
        <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/development.svg" alt="" />
        <h3>99.5% uptime guaranteed</h3>
        <p>Our team is committed to <br/>helping you manage<br/> operations smoothly and keep <br/> them up and running, always.</p>
        </div>
      </div>
    </div>
  );
};

export default Dotpeadvantage;
