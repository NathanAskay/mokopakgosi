// src/components/Team.js
import React from "react";
import "./Team.css";

const Team = () => {
  const teamMembers = [
    {
      name: "Ellece Gaborapelwe",
      position: "Principal Attorney",
      email: "ellece@eglegalpractice.co.bw",
      image: "/images/lawyer.jpg",
    },
    {
      name: "John Carr-Hartley",
      position: "Managing Partner",
      email: "john@eglegalpractice.co.bw",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },

    {
      name: "Moemedi Tafa",
      position: "Partner",
      email: "moemedi@eglegalpractice.co.bw",
      image:
        "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    },
  ];

  return (
    <section id="team" className="team section">
      <div className="container">
        <h2 className="section-title">Our Team</h2>
        <p className="section-subtitle">
          Our highly experienced team prides themselves in being available and
          approachable, working with our clients to deliver unique and inspired
          legal solutions.
        </p>

        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <div key={index} className="team-card fade-in">
              <div className="team-image">
                <img
                  src={member.image}
                  alt={member.name}
                  className="member-photo"
                />
                <div className="image-overlay">
                  <div className="overlay-content">
                    <a href={`mailto:${member.email}`} className="contact-icon">
                      <i className="fas fa-envelope"></i>
                    </a>
                    <span className="contact-text">
                      Contact {member.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </div>
              <div className="team-info">
                <h3>{member.name}</h3>
                <p className="position">{member.position}</p>
                <a href={`mailto:${member.email}`} className="email-link">
                  <i className="fas fa-envelope"></i> {member.email}
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="accolades">
          <div className="accolade">
            <h4>Chambers</h4>
            <p>TOP RANKED</p>
          </div>
          <div className="accolade">
            <h4>Global</h4>
            <p>RECOGNIZED</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;
