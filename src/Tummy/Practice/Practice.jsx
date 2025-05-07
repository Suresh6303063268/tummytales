import React from "react";
import myself from "../../Images/Pregent4.jpg"; // Adjust path if needed
import "./Practice.css"; // Optional: move styles to a separate CSS file

const CurvedOverlay = () => {
  return (
    <div className="wrapper">
      <img src={myself} alt="Pregnancy" className="main-image" />
      <svg className="wave" viewBox="0 0 600 200" preserveAspectRatio="none">
        <path d="M0,100 C150,0 450,200 600,100 L600,200 L0,200 Z" fill="white" />
      </svg>
    </div>
  );
};

export default CurvedOverlay;
