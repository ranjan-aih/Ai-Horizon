import React from "react";
import "../../css/About1.css";
import GridSvg from "../../assets/grid.svg";

const CoreValues = () => {
  return (
    <div className="about-container">
      <div className="background-svg1">
        <img src={GridSvg} alt="" className="grid-background" />
      </div>

      <div className="content-wrapper1">
        <h2 className="subtitle">
          EMPOWERING ENTERPRISES TO BUILD, LAUNCH, AND SCALE WITH GENERATIVE AI
        </h2>

        <h1 className="main-title1">What are we?</h1>

        <p className="description1">
          At, <span className="ai-text">ai-</span>
          <span className="horizon-text">horizon</span>
          <span className="io-text">.io</span> we are redefining how AI agents
          are created and deployed in complex enterprise environments. We
          recognize the challenges that organizations face in operationalizing
          AI-speed, scale, and security-we have built a platform that addresses
          them all.
        </p>
        <p className="description1">
          Our mission is simple yet powerful: to make enterprises AI-ready
          through intuitive, scalable, and secure generative AI solutions.
        </p>

        <button className="read-more-btn">Read More →</button>
      </div>
    </div>
  );
};

export default CoreValues;
