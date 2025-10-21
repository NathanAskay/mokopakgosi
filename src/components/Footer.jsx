// src/components/Footer.js
import React from "react";
import "./Footer.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <span>M</span>
              <div className="footer-logo-text">
                <h3>Mokopakgosi Attorneys</h3>
                <p>Attorneys, Notaries & Conveyancers</p>
              </div>
            </div>
            <p className="footer-description">
              Providing comprehensive legal services with precision, integrity,
              and dedication to client success.
            </p>
          </div>

          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul className="footer-links">
              <li>
                <a href="#about">About</a>
              </li>
              <li>
                <a href="#services">Services</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>
            </ul>
          </div>

          <div className="footer-section">
            <h4>Contact</h4>
            <div className="contact-details">
              <p>
                <i className="fas fa-phone"></i> +267 311 0041
              </p>
              <p>
                <i className="fas fa-phone"></i> +267 78 552 116
              </p>
              <p>
                <i className="fas fa-envelope"></i> info@eglegalpractice.co.bw
              </p>
            </div>
          </div>

          <div className="footer-section">
            <h4>Follow Us</h4>
            <div className="social-links">
              <a href="#">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#">
                <i className="fab fa-twitter"></i>
              </a>
              <a href="#">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Mokopakgosi Attorneys. All rights reserved.
          </p>
          <p>Professional Legal Services in Botswana</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
