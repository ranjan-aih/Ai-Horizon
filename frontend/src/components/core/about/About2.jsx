import React from "react";
import { BsGraphUpArrow, BsFillPersonFill } from "react-icons/bs";
import "../../../css/About2.css";

const About2 = () => {
  return (
    <div className="about2-container">
      <div className="content-wrapper">
        <h1 className="main-title">Our Core Values</h1>

        <p className="description2">
          At ai-horizon.io, our values shape every decision, every innovation,
          and every partnership. We are committed to building a better future
          through excellence, integrity, and an unwavering focus on progress. We
          hold ourselves and each other to the highest standards to create
          meaningful impact.
        </p>

        <div className="core-values-grid">
          <div className="core-value-item">
            <div className="icon-container">
              <BsGraphUpArrow className="icon" />
            </div>
            <h3 className="value-title">Growth</h3>
            <p className="value-description">
              We embrace a mindset of continuous learning. Rather than "knowing
              it all", we believe in "learning it all" - growing with our
              clients and evolving with the industry.
            </p>
          </div>

          <div className="core-value-item">
            <div className="icon-container">
              <BsFillPersonFill className="icon" />
            </div>
            <h3 className="value-title">Trust</h3>
            <p className="value-description">
              We operate with transparency, integrity, and mutual respect -
              earning the trust of our clients, partners, and team members.
            </p>
          </div>

          <div className="core-value-item">
            <div className="icon-container">
              <svg className="icon" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z" />
              </svg>
            </div>
            <h3 className="value-title">Innovation</h3>
            <p className="value-description">
              We challenge convention and build what hasn't been built before.
              By pushing the boundaries of what's possible, we redefine the
              future of enterprise AI.
            </p>
          </div>

          <div className="core-value-item">
            <div className="icon-container">
              <BsFillPersonFill className="icon" />
            </div>
            <h3 className="value-title">Dedication</h3>
            <p className="value-description">
              Your success is our priority. Every solution we design is rooted
              in a deep commitment to enabling your business to thrive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About2;
