import React from 'react'
import NavItems from '../Component/NavItems'
import Navfood from '../Foodstack/Navfood'
import "../Assets/Styles/Foodstack.css"
import Foodhome from '../Foodstack/Foodhome'
import Navheader from '../Foodstack/Navheader'
import { useState,useEffect } from 'react'
import Dynamicfood from '../Foodstack/Dynamicfood'
import Mobilefoodheader from '../Foodstack/Mobilefoodheader'
import Dotpeserving from '../Foodstack/Dotpeserving'
import Leadingbrand from '../Foodstack/Leadingbrand'
import Foodfooter from '../Foodstack/Foodfooter'
import Offerimage from '../Foodstack/Offerimage'
import Everythingresturant from "../Foodstack/Everythingresturant"
import Doitwithdotpe from '../Foodstack/Doitwithdotpe'
import Dotpeadvantage from '../Foodstack/Dotpeadvantage'
import Buildgrow from '../Foodstack/Buildgrow'
import Seamlessintegration from '../Foodstack/Seamlessintegration'
import Footer  from "../Component/Footer"

const Foodstack = () => {

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

  useEffect(() => {
    function handleResize() {
      setWindowDimensions(getWindowDimensions());
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className='foodstack-container'>
        <div className='foodstack-conteent'>
        {windowDimensions.width < 766 ? (
          <Mobilefoodheader />
        ) : (
          <>
            <Dynamicfood />
            <Navheader/>
          </>
        )}
        <Foodhome/>
        </div>
        <Dotpeserving/>
        <br/>
        <Leadingbrand/>
        <Offerimage/>
       <Everythingresturant/>
       <Doitwithdotpe/>
       <Dotpeadvantage/>
       <Seamlessintegration/>
       <Buildgrow/>
       
<br/>
        {/* <Foodfooter/> */}
        <Footer/> 
    </div>
  )
}

export default Foodstack
