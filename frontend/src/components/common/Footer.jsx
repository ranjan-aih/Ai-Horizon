import React, { useState } from "react";
import "../../css/HomeLast.css";
import { GiSpinningTop } from "react-icons/gi";
import aih_logo from "../../assets/aih_logo.png";
import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ apiKey }) => {
  const center = { lat: 19.1139043, lng: 72.9181878 };
  const [currentPage, setCurrentPage] = useState("Home");

  const handleLinkClick = (linkName) => {
    setCurrentPage(linkName);
  };

  return (
    <footer className="footer">
      {/* Email & CTA */}
      <div className="footer-top">
        <div className="email-container">
          <span className="email-placeholder">Enter your Email ID</span>
          <button className="submit-button">Submit</button>
        </div>
        <h2 className="footer-title">Build your own private GenAI Now!</h2>
      </div>

      {/* Breadcrumb Indicator */}
      <div className="breadcrumb-section">
        <GiSpinningTop className="breadcrumb-icon" />
        <span className="breadcrumb-text"> AI Horizons {currentPage}</span>
      </div>

      {/* Quick Links Section */}
      <div className="quick-links-title">Quick Links</div>

      <div className="links-grid">
        {/* Company */}
        <div className="links-column">
          <h3 className="column-title">Company</h3>
          <ul className="links-list">
            {["About us", "Partner", "Strategic Investor", "Leadership"].map(
              (item) => (
                <li key={item}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      handleLinkClick(item);
                    }}
                  >
                    {item}
                  </a>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Resources */}
        <div className="links-column">
          <h3 className="column-title">Resources</h3>
          <ul className="links-list">
            {[
              "Blogs",
              "Case Studies",
              "Comparisons",
              "Industries",
              "User Cases",
              "Newsrooms",
            ].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Platform */}
        <div className="links-column">
          <h3 className="column-title">Platform</h3>
          <ul className="links-list">
            {["Career", "Solutions", "Enterprises"].map((item) => (
              <li key={item}>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Logo */}
      <div className="logo-container">
        <img src={aih_logo} alt="AIH Logo" className="ai-logo" />
      </div>

      {/* Map Section */}
      <div
        className="map-container"
        onClick={() =>
          window.open(
            "https://www.google.com/maps/place/KAILASH+BUSINESS+PARK,+Park+Site+Rd,+HMPL+Surya+Nagar,+Vikhroli+West,+Mumbai,+Maharashtra+400076/@19.1139446,72.9154082,17z",
            "_blank",
            "noopener,noreferrer"
          )
        }
      >
        {apiKey ? (
          <APIProvider apiKey={apiKey}>
            <Map
              defaultZoom={13}
              defaultCenter={center}
              gestureHandling="greedy"
              disableDefaultUI
              style={{ width: "100%", height: "300px" }}
            >
              <Marker position={center} />
            </Map>
          </APIProvider>
        ) : (
          <div style={{ textAlign: "center", padding: "1rem", color: "red" }}>
            Google Maps API key is missing!
          </div>
        )}
      </div>

      {/* Contact */}
      <div className="contact-section">
        <h3 className="contact-title">Contact</h3>
        <p className="contact-address">
          1306-07, C wing, Kailas Business Park, HMPL
          <br />
          Surya Nagar, Vikhroli West, Mumbai,
          <br />
          Maharashtra 400079
        </p>
        <a
          href="https://www.linkedin.com/company/aihorizons/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin className="linkedin-icon" />
        </a>
      </div>

      {/* Bottom Links */}
      <div className="footer-bottom-text">
        <a href="/privacy" className="footer-link">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="/terms" className="footer-link">
          Terms and Conditions
        </a>{" "}
        | India
      </div>
    </footer>
  );
};

export default Footer;
