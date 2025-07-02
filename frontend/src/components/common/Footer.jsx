import React, { useState } from "react";
import "../../css/Footer.css";
import { GiSpinningTop } from "react-icons/gi";
import aih_logo from "../../assets/aih_logo.png";
import { Map, Marker, APIProvider } from "@vis.gl/react-google-maps";
import { FaLinkedin } from "react-icons/fa6";

const Footer = ({ apiKey }) => {
    const center = { lat: 19.1139043, lng: 72.9181878 };
    const [currentPage, setCurrentPage] = useState("Home");
    const [email, setEmail] = useState("");

    const handleLinkClick = (linkName) => {
        setCurrentPage(linkName);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email.trim()) {
            console.log("Email submitted:", email);
            // Add your email submission logic here
            alert(`Email submitted: ${email}`);
            setEmail(""); // Clear the input after submission
        } else {
            alert("Please enter a valid email address");
        }
    };

    return (
        <footer className="ft-footer">
            {/* Email & CTA */}
            <div className="ft-footer-top">
                <form
                    className="
    !flex !items-center
    !bg-[beige]
    !rounded-[999px]
    !py-[10px] !px-[20px]
    !h-[60px]
    !w-full !max-w-[450px]
  "
                    onSubmit={handleSubmit}
                >
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your Email ID"
                        required
                        className="
      !bg-transparent !border-none !outline-none
      !text-[#555555] !text-[15px]
      !flex-1 !p-0 !h-full !mr-0
      placeholder:!text-[#555555]
    "
                    />
                    <button
                        type="submit"
                        className="
      !bg-black !text-white !border-none
      !rounded-[999px]
      !py-[7px] !px-[14px]
      !cursor-pointer
      !text-[15px]
      !whitespace-nowrap
    "
                    >
                        Submit
                    </button>
                </form>

                <h2 className="ft-footer-title">Build your own private GenAI Now!</h2>
            </div>

            {/* Breadcrumb Indicator */}
            <div className="ft-breadcrumb-section">
                <GiSpinningTop className="ft-breadcrumb-icon" />
                <span className="ft-breadcrumb-text"> AI Horizons {">"} {currentPage}</span>
            </div>

            {/* Quick Links Section */}
            <div className="ft-quick-links-title">Quick Links</div>

            <div className="ft-links-grid">
                {/* Company */}
                <div className="ft-links-column">
                    <h3 className="ft-column-title">Company</h3>
                    <ul className="ft-links-list">
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
                <div className="ft-links-column">
                    <h3 className="ft-column-title">Resources</h3>
                    <ul className="ft-links-list">
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
                <div className="ft-links-column">
                    <h3 className="ft-column-title">Platform</h3>
                    <ul className="ft-links-list">
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
            <div className="ft-logo-container">
                <img src={aih_logo} alt="AIH Logo" className="ft-ai-logo" />
            </div>

            {/* Map Section */}
            <div
                className="ft-map-container"
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
            <div className="ft-contact-section">
                <h3 className="ft-contact-title">Contact</h3>
                <p className="ft-contact-address">
                    1306-07, C wing, Kailas Business Park,
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
                    <FaLinkedin className="ft-linkedin-icon" />
                </a>
            </div>

            {/* Bottom Links */}
            <div className="ft-footer-bottom-text">
                <a href="/privacy" className="ft-footer-link">
                    Privacy Policy
                </a>{" "}
                |{" "}
                <a href="/terms" className="ft-footer-link">
                    Terms and Conditions
                </a>{" "}
                | India
            </div>
        </footer>
    );
};

export default Footer;