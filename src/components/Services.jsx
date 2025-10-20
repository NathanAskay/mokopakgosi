// src/components/Services.js
import React, { useState } from "react";
import "./Services.css";

const Services = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const coreServices = [
    {
      title: "Litigation Expertise",
      description:
        "Strategic representation in civil and commercial disputes with a proven track record of successful outcomes.",
      icon: "fas fa-gavel",
    },
    {
      title: "Corporate Advisory",
      description:
        "Comprehensive corporate law guidance including business formation, governance, and compliance matters.",
      icon: "fas fa-briefcase",
    },
    {
      title: "Legal Consultation",
      description:
        "Expert legal advice and strategic counsel tailored to your specific business or personal legal needs.",
      icon: "fas fa-handshake",
    },
  ];

  const allServices = [
    "General Litigation",
    "Family Law",
    "Employment and Labour Law",
    "Contract Law",
    "Debt Collection",
    "Mediation",
    "Arbitration",
    "Estate Management (Wills and Trusts)",
    "Conveyancing Services",
    "Notary Services",
    "Land Disputes",
    "Company Secretarial Services",
    "Criminal Law",
  ];

  const openModal = () => {
    setIsModalOpen(true);
    document.body.style.overflow = "hidden"; // Prevent background scrolling
  };

  const closeModal = () => {
    setIsModalOpen(false);
    document.body.style.overflow = "unset"; // Re-enable scrolling
  };

  return (
    <section id="services" className="services section">
      <div className="container">
        <h2 className="section-title">Our Services</h2>
        <p className="section-subtitle">
          Comprehensive legal solutions designed to meet your specific needs
          with precision and expertise.
        </p>

        <div className="core-services-grid">
          {coreServices.map((service, index) => (
            <div key={index} className="core-service-card fade-in">
              <div className="service-icon">
                <i className={service.icon}></i>
              </div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>

        <div className="services-cta">
          <button className="btn btn-outline" onClick={openModal}>
            View All Services
          </button>
        </div>
      </div>

      {/* Modal Popup */}
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-header">
              <h2>All Legal Services</h2>
              <button className="modal-close" onClick={closeModal}>
                <i className="fas fa-times"></i>
              </button>
            </div>

            <div className="modal-body">
              <div className="services-list">
                {allServices.map((service, index) => (
                  <div key={index} className="service-list-item">
                    <i className="fas fa-balance-scale"></i>
                    <span>{service}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="modal-footer">
              <button className="btn" onClick={closeModal}>
                Close
              </button>
              <button
                className="btn btn-outline"
                onClick={() => {
                  closeModal();
                  document
                    .getElementById("contact")
                    ?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                Contact Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Services;
