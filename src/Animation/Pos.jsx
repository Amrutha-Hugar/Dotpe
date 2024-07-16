// import React, { useEffect } from "react";
// import "../Assets/Styles/pos.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
// import image6 from "../Assets/Images/lady.jpg";
// import image7 from "../Assets/Images/girl.jpg";

// export default function AnimationText1() {
//   const observer = new IntersectionObserver((entries) => {
//     entries.forEach((entry) => {
//       const square = entry.target.querySelector(".pos");

//       if (entry.isIntersecting) {
//         square.classList.add("fade1-in-");
//         return; // if we added the class, exit the function
//       }

//       // We're not intersecting, so remove the class!
//       square.classList.remove("fade1-in");
//     });
//   });

//   useEffect(() => {
//     observer.observe(document.querySelector(".pos"));
//   }, []);

//   return (
//           <div className="mt-5">
   
  

//         <div className="container5 mt-5">
//           <div className="row justify-content-around">
//             <div className="col-md-5 col-lg-4 mb-5">
//               <div className="card  ">
//                 <div className="card-body d-flex flex-column text-start m-3  ">
//                   <h4 className="pos fw-bold text-black fade1-in">POS </h4>
//                   <p className="card-text fw-bold text-black ">
//                     Sync your in-store and online business with the{" "}
//                     <span className="cardtext1">
//                       industry's leading Point of Sale.
//                     </span>
//                   </p>
//                   <div className="mt-auto">
//                     <a href="" className="know btn btn-link  ">
//                       Know More
//                       <FontAwesomeIcon
//                         icon={faArrowRight}
//                         className="ml-2"
//                         style={{ color: "#006AFF"}}
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <img src={image6} className="card-img-top" alt="POS" />
//               </div>
//             </div>

//             <div className="col-md-5 col-lg-4 mb-4">
//               <div className="card ">
//                 <div className="card-body d-flex flex-column text-start m-3">
//                   <h5 className="card-title1 fw-bold text-black">
//                     Online Store
//                   </h5>
//                   <p className="card-text3 fw-bold text-black">
//                     Go digital in minutes with your own e-commerce website.
//                   </p>
//                   <div className="mt-auto">
//                     <a href="" className="know btn btn-link">
//                       Know More
//                       <FontAwesomeIcon
//                         icon={faArrowRight}
//                         className=""
//                         style={{ color: "#006AFF" }}
//                       />
//                     </a>
//                   </div>
//                 </div>
//                 <img src={image7} className="card-img-top" alt="Online Store" />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div> 
//   );
// }
