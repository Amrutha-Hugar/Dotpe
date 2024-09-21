import React from "react";
import"../Assets/Styles/Everythingresturant.css"

const Everythingresturant = () => {
  return (
    <div className="everythingcontainer">
      <div className="everything-content">
        <h1>It’s everything you need <br/> to run your restaurant.</h1>
      </div>
      <div className="zomato-container d-flex justify-content-center" style={{gap:'40px'}}>
      <div className="">
  <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/f-b-need-img-1.png" alt="Alps"/>
  <div className="cap" style={{margin:'10px', padding:"10px"}}>
    <h3 className="text-start" >Powerful POS to pace-up with.</h3>
    <p className="text-start">The new-age POS for your restaurant. Manage billing,<br/> inventory, online orders, customer relationships & much<br/> more, all from a centralised dashboard.</p>
  </div>
</div>
<div className="">
  <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/f-b-need-img-2.png" alt="Alps"  style={{margintop:'150px'}}/>
  <div className="cap" style={{margin:'10px', padding:"10px"}}>
    <h3 className="text-start">Manage reservations & turn more tables.</h3>
    <p className="text-start">See all your reservations, waiting-list and seated,<br/> guests from one view. Manage reservations in one<br/> place. Improve table turn-times. Waitlist management.</p>
  </div>
</div>
      </div>
<br/>
<br/>
<br/>
    <div className="d-flex justify-content-center" style={{gap:'40px'}}>
    <div className="">
  <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/f-b-need-img-3.png" alt="Alps"/>
  <div className="cap" style={{margin:'10px', padding:"10px"}}>
    <h3 className="text-start" >Treat each customer like a VIP with our powerful <br/>marketing tools.</h3>
    <p className="text-start">Our 2-way integrations with Swiggy, Zomato, Amazon<br/> Foods let you manage orders, menu, pricing, inventory <br/> & deals in real-time on our centralised dashboard.</p>
  </div>
</div>
<div className="">
  <img src="https://cdn.dotpe.in/dotpe-website-live/images/f-and-b-img/f-b-need-img-4.png" alt="Alps"/>
  <div className="cap" style={{margin:'10px', padding:"10px"}}>
    <h3 className="text-start" >Advanced inventory & supply chain<br/> management.</h3>
    <p className="text-start">See all your reservations, waiting-list and seated<br/> guests from one view. Manage reservations in one <br/> place. Improve table turn-times. Waitlist management.</p>
  </div>
</div>
    </div>
    </div>
  );
};

export default Everythingresturant;
