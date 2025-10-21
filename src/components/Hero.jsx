// src/components/Hero.js
import React, { useState, useEffect } from "react";
import "./Hero.css";

const Hero = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      type: "welcome",
      title: "Mokopakgosi Attorneys",
      subtitle: "Attorneys, Notaries & Conveyancers",
      description: "We deliver innovative and practical legal solutions",
      background:
        "linear-gradient(rgba(10, 26, 53, 0.8), rgba(10, 26, 53, 0.9))",
      backgroundImage: "/images/background.jpg",
    },
    {
      type: "service",
      title: "Litigation Expertise",
      subtitle: "Core Service",
      description:
        "Strategic representation in civil and commercial disputes with a proven track record of successful outcomes.",
      background:
        "linear-gradient(rgba(10, 26, 53, 0.7), rgba(10, 26, 53, 0.8))",
      serviceIcon: "fas fa-gavel",
      backgroundImage:
        "https://images.unsplash.com/photo-1589391886645-d51941baf7fb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      type: "service",
      title: "Corporate Advisory",
      subtitle: "Core Service",
      description:
        "Comprehensive corporate law guidance including business formation, governance, and compliance matters.",
      background:
        "linear-gradient(rgba(10, 26, 53, 0.7), rgba(10, 26, 53, 0.8))",
      serviceIcon: "fas fa-briefcase",
      backgroundImage:
        "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1911&q=80",
    },
    {
      type: "service",
      title: "Legal Consultation",
      subtitle: "Core Service",
      description:
        "Expert legal advice and strategic counsel tailored to your specific business or personal legal needs.",
      background:
        "linear-gradient(rgba(10, 26, 53, 0.7), rgba(10, 26, 53, 0.8))",
      serviceIcon: "fas fa-handshake",
      backgroundImage:
        "https://images.unsplash.com/photo-1575505586569-646b2ca898fc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2075&q=80",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Preload images for better performance
  useEffect(() => {
    slides.forEach((slide) => {
      const img = new Image();
      img.src = slide.backgroundImage;
    });
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero-slides">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`hero-slide ${index === currentSlide ? "active" : ""}`}
            style={{
              background: `${slide.background}, url(${slide.backgroundImage}) center/cover`,
            }}
          >
            <div className="container">
              <div className="hero-content">
                {slide.type === "welcome" ? (
                  <>
                    <h1 className="slide-title">{slide.title}</h1>
                    <h2 className="slide-subtitle">{slide.subtitle}</h2>
                    <p className="slide-description">{slide.description}</p>
                  </>
                ) : (
                  <>
                    <div className="service-icon">
                      <i className={slide.serviceIcon}></i>
                    </div>
                    <h3 className="service-slide-subtitle">{slide.subtitle}</h3>
                    <h1 className="slide-title">{slide.title}</h1>
                    <p className="slide-description">{slide.description}</p>
                  </>
                )}

                <button
                  className="btn hero-cta"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us Today
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Slide Indicators */}
      <div className="slide-indicators">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`indicator ${index === currentSlide ? "active" : ""}`}
            onClick={() => goToSlide(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>

      {/* Navigation Arrows */}
      <button
        className="slide-nav slide-prev"
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        aria-label="Previous slide"
      >
        <i className="fas fa-chevron-left"></i>
      </button>
      <button
        className="slide-nav slide-next"
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        aria-label="Next slide"
      >
        <i className="fas fa-chevron-right"></i>
      </button>
    </section>
  );
};

export default Hero;
