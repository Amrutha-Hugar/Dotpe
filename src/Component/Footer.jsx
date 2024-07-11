import React from 'react'
import "../Assets/Styles/Footer.css"
import "../Assets/Images/twitter.jpg"
import image12 from "../Assets/Images/twitter.jpg"
import image13 from "../Assets/Images/instagram.jpg"
import image14 from "../Assets/Images/linked.jpg"
import image1 from "../Assets/Images/dotpe.jpg"

const Footer = () => {
  return (
    <div className='footer bg-black '>
    <div className='foot-container '>
    <div className='foot d-flex text-white justify-content-evenly '>
     <div className='foot1 mt-5'>
        <h6 className='text-gray'>Business</h6>
        <p >Food & Beverages</p>
        <p>Retail</p>
        <p>Services</p>
      </div>
      <div className='foot2 mt-5'>
        <h6>Dotpe</h6>
        <p>Home</p>
        <p>Press & Media</p>
      </div>
     
      </div>
      <hr className='h'/>
      <div className='pay d-flex justify-content-around'>
       <div>
        <img src={image1} alt="" height={"50vh"} width={"100"} className='m-4 '/>
       
       </div>
     
     <div className='m-4 d-flex '>
       <p className='text-white m-4'>Terms & Conditions</p>
       <p className='text-white m-4'>Privacy Policy</p>
        <img src={image12} className="m-3"alt="" height={"30vh"} width={"30vh"}/>
        <img src={image13} className="m-3"alt="" height={"30vh"} width={"30vh"}/>
        <img src={image14} className="m-3" alt="" height={"30vh"} width={"30vh"}/>
       </div>
     </div>
      
    </div>
    </div>
  )
}

export default Footer
