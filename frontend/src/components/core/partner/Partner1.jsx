import React from "react";
// import '../../css/Partner1.css';
import "../../../css/Partner1.css";

const Partner1 = () => {
  return (
    <div className="pt1-partner-program-container">
      <div className="pt1-content-wrapper">
        <div className="pt1-header-section">
          <p className="pt1-program-title">AI HORIZON'S PARTNER PROGRAM</p>
          <h1 className="pt1-main-heading">Building Success Together</h1>
          <p className="pt1-subtitle">
            Become a partner with AIH and lead the agentic AI
            <br />
            revolution
          </p>
        </div>

        <div className="pt1-cta-section">
          <button className="pt1-partner-button">Become a Partner</button>
        </div>
      </div>
      <div className="pt1-half-rectangle"></div>

      <div className="pt1-half-rectangle">
        <div className="pt1-squares-container">
          <div className="pt1-square"></div>
          <div className="pt1-square"></div>
          <div className="pt1-square"></div>
          <div className="pt1-square"></div>
          <div className="pt1-square"></div>
          <div className="pt1-square"></div>
        </div>

        <div className="pt1-partner-question">
          <p className="pt1-question-text">
            Why partner with <span className="pt1-ai-text">ai-</span>
            <span className="pt1-horizon-text">horizon</span>
            <span className="pt1-io-text">.io</span>?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Partner1;
