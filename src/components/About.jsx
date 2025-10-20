// src/components/About.js
import React from "react";
import "./About.css";

const About = () => {
  return (
    <section id="about" className="about section">
      <div className="container">
        <h2 className="section-title">About Us</h2>
        <p className="section-subtitle">
          Providing comprehensive legal services with precision, integrity, and
          dedication to client success.
        </p>

        <div className="about-content">
          <div className="about-text">
            <h3>Our Story</h3>
            <p>
              Ellece Gaborapelwe Legal Practice is dedicated to providing
              exceptional legal services with a focus on client-centered
              solutions. Our firm combines traditional values with modern
              approaches to deliver effective legal representation.
            </p>

            <h3>Our Vision</h3>
            <p>
              We aim to be Botswana's preeminent legal practice, continually
              pushing boundaries and combining our team's renowned experience
              with current best practice techniques to deliver quality, timely,
              and dynamic legal services.
            </p>

            <h3>Client Care</h3>
            <p>
              We endeavor to ensure that a strong relationship is maintained
              with all our clients, providing personalized attention and
              strategic legal guidance tailored to your specific needs.
            </p>
          </div>

          <div className="about-image">
            <img
              src="/images/team.jpg"
              alt="Ellece Gaborapelwe Legal Practice - Professional Law Office"
              className="about-img"
            />
            <div className="image-overlay">
              <div className="overlay-content">
                <i className="fas fa-balance-scale"></i>
                <p>Legal Excellence</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
