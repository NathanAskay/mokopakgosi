// src/components/Testimonials.js
import React from "react";
import "./Testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      quote:
        "May I also take this opportunity to express our sincere gratitude to Ellece Gaborapelwe for representing our organization and always giving us untiring legal guidance and support. We really appreciated that. Thank you.",
      author: "Nthabiseng Liphapang",
      position: "Legal Counsel, SADC Secretariat",
    },
    {
      quote:
        "Working with Ellece Gaborapelwe has been an absolute pleasure. Her professionalism, depth of legal knowledge, and dedication to client success make her an invaluable partner. She always goes above and beyond expectations.",
      author: "Kabelo Motsamai",
      position: "Managing Director, Motsamai Holdings",
    },
    {
      quote:
        "Ellece’s strategic thinking and clear communication have been instrumental in resolving complex legal matters for our firm. Her attention to detail and commitment to excellence set her apart in the legal field.",
      author: "Boitumelo Ncube",
      position: "Chief Operations Officer, Delta Projects Botswana",
    },
  ];

  return (
    <section id="testimonials" className="testimonials section">
      <div className="container">
        <h2 className="section-title">What Our Clients Say</h2>

        <div className="testimonials-container">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card fade-in">
              <div className="quote-icon">
                <i className="fas fa-quote-left"></i>
              </div>
              <blockquote>"{testimonial.quote}"</blockquote>
              <div className="testimonial-author">
                <h4>{testimonial.author}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
