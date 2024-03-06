import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-logo">
        <img src='https://kamil2433.github.io/Reactblog/logo.png' alt="Angantraya Birdseye Logo" />
      </div>
      <div className="footer-content">
        <p>
          A Destination Management Company & B2B Tour Company, Package Supplier,
          travel management services like Cultural Packages, Corporate Packages,
          Adventure Packages, Honeymoon Packages, Etc.... We specialize in
          leisure and corporate travel to clients from India and other parts of
          the world.
        </p>
        <ul className="footer-links">
          <li>
            <a href="Company.html">Company</a>
          </li>
          <li>
            <a href="Destinations.html">Destinations</a>
          </li>
          <li>
            <a href="Services.html">Services</a>
          </li>
          <li>
            <a href="Gallery.html">Gallery</a>
          </li>
          <li>
            <a href="AboutUs.html">About Us</a>
          </li>
        </ul>
      </div>
      <div className="footer-contact">
        <p>© 2023 Angantraya Birdseye LLP | All Rights Reserved.</p>
        <p>+918883226229 (24/7, 365 days)</p>
        <p>
          Email:{" "}
          <a href="mailto:birdseyetrip@gmail.com">birdseyetrip@gmail.com</a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
