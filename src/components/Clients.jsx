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
      logo: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=200&h=100&fit=crop&crop=center",
      description: "a cisco company",
    },
    {
      name: "archGuard",
      logo: "https://images.unsplash.com/photo-1556655852-ef0698e516c7?w=200&h=100&fit=crop&crop=center",
      description: "",
    },
    {
      name: "Fortinet",
      logo: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?w=200&h=100&fit=crop&crop=center",
      description: "",
    },
    {
      name: "SimpleRisk",
      logo: "https://images.unsplash.com/photo-1565688534245-05d6b5be184a?w=200&h=100&fit=crop&crop=center",
      description: "SIMPLE DIFFERENT APPROACH",
    },
    {
      name: "Microsoft",
      logo: "https://images.unsplash.com/photo-1633419461181-2ee8d0ac59c4?w=200&h=100&fit=crop&crop=center",
      description: "",
    },
    {
      name: "IBM",
      logo: "https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&h=100&fit=crop&crop=center",
      description: "",
    },
    {
      name: "Oracle",
      logo: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=200&h=100&fit=crop&crop=center",
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
