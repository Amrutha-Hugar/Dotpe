import React from 'react'
import { useEffect } from 'react';
import "../Assets/Styles/Buildgrowbusiness.css";

const Buildgrowbusiness = () => {


    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          const square = entry.target.querySelector(".build");
    
          if (entry.isIntersecting) {
            square.classList.add("fade-in-text-2");
            return; // if we added the class, exit the function
          }
    
          // We're not intersecting, so remove the class!
          square.classList.remove("fade-in-text-2");
        });
      });
    
      useEffect(() => {
        observer.observe(document.querySelector(".buildanimate"));
      }, []);
  return (
    <div>
      
      <div className="buildanimate m-5 w-80">
        <div>
          <h1 className="build fw-bold text-center fade-in-text-2" style={{marginTop:'300px', fontSize:'70px',position:'relative'}}>
            Build and grow your
            <br /> business with DotPe.
          </h1>
          <p className="tools" style={{fontSize:'38px'}}>
            Get all the tools you need to take your business to the next
            <br />
            level & join the millions of merchants using DotPe.
          </p>
        </div>
        
        
        <div
          className="formclass d-flex justify-content-center align-items-center text-center"
          style={{ height: "15vh" }}
        >
          <form
            action=""
            className="border p-3 d-flex rounded-5 fade-in-text-4"
            style={{ width: "100%", maxWidth: "700px",position:'relative' }}
          >
            <input
              type="text"
              placeholder="Enter your mobile number"
              className="form-control m-2"
              style={{fontSize:'20px'}}
            />
            <button className="btn btn-primary m-2 w-50 fade-in-text-4" style={{fontSize:'20px', borderRadius:'30px', height:'50px',position:'relative'}}>Request Callback</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Buildgrowbusiness
