// src/components/Clients.js
import React from "react";
import "./Clients.css";

const Clients = () => {
  const clients = [
    {
      name: "Tenable",
      logo: "/images/fnb.png",
      description: "",
    },
    {
      name: "Splunk",
      logo: "/images/africa.png",
      description: "a cisco company",
    },
    {
      name: "archGuard",
      logo: "/images/edtech.jpg",
      description: "",
    },
    {
      name: "Fortinet",
      logo: "/images/bih.jpg",
      description: "",
    },
    {
      name: "SimpleRisk",
      logo: "/images/msc.png",
      description: "SIMPLE DIFFERENT APPROACH",
    },
    {
      name: "Microsoft",
      logo: "/images/khaya.png",
      description: "",
    },
    {
      name: "IBM",
      logo: "/images/logo.jpg",
      description: "",
    },
    {
      name: "Oracle",
      logo: "/images/dent.png",
      description: "",
    },
  ];

  // Duplicate clients for seamless animation
  const duplicatedClients = [...clients, ...clients];

  return (
    <section id="clients" className="clients section">
      <div className="container">
        <h2 className="section-title">OUR CLIENTS</h2>

        <div className="clients-showcase">
          <div className="clients-track">
            {duplicatedClients.map((client, index) => (
              <div key={index} className="client-card">
                <div className="client-logo">
                  <img
                    src={client.logo}
                    alt={client.name}
                    className="client-logo-img"
                  />
                </div>
                {client.description && (
                  <p className="client-description">{client.description}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Clients;
