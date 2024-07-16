import React, { useEffect } from "react";
import "../Assets/Styles/flexible.css";

export default function AnimationText() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const square = entry.target.querySelector(".animationText");

      if (entry.isIntersecting) {
        square.classList.add("fade-in-text");
        return; // if we added the class, exit the function
      }

      // We're not intersecting, so remove the class!
      square.classList.remove("fade-in-text");
    });
  });

  useEffect(() => {
    observer.observe(document.querySelector(".jumbotron1"));
  }, []);

  return (
    <div className="jumbotron1">
      <h1 className="animationText fw-bold fade-in-text">
        Flexible <span style={{ color: "#50328A" }}>business solutions</span>
        <br />
        for omni-channel selling
      </h1>
    </div>
  );
}
