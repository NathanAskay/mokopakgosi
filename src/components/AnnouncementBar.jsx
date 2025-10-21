// src/components/AnnouncementBar.js
import React, { useState, useEffect } from "react";
import "./AnnouncementBar.css";

const AnnouncementBar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const allItems = [
    {
      type: "email",
      content: "admin@mokopakgosiattorneys.co.bw",
      icon: "fas fa-envelope",
      link: "mailto:admin@mokopakgosiattorneys.co.bw",
    },
    {
      type: "phone",
      content: "+26772723359",
      icon: "fas fa-phone",
      link: "tel:+26772723359",
    },
    {
      type: "phone",
      content: "+267 3960700",
      icon: "fas fa-mobile-alt",
      link: "tel:+2673960700",
    },
    {
      type: "social",

      icon: "fab fa-facebook-f",
      link: "#",
    },
    {
      type: "social",

      icon: "fab fa-twitter",
      link: "#",
    },
    {
      type: "social",

      icon: "fab fa-linkedin-in",
      link: "#",
    },
    {
      type: "social",

      icon: "fab fa-instagram",
      link: "#",
    },
  ];

  // Duplicate items for seamless scrolling
  const duplicatedItems = [...allItems, ...allItems];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false);
      } else if (currentScrollY < lastScrollY) {
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  const handleItemClick = (item) => {
    if (item.type === "phone" || item.type === "email") {
      window.open(item.link, "_self");
    } else if (item.type === "social") {
      window.open(item.link, "_blank");
    }
  };

  return (
    <div className={`announcement-bar ${isVisible ? "visible" : "hidden"}`}>
      <div className="announcement-container">
        <div className="scrolling-content">
          {duplicatedItems.map((item, index) => (
            <div
              key={index}
              className="announcement-item"
              onClick={() => handleItemClick(item)}
            >
              <i className={item.icon}></i>
              <span>{item.content}</span>
              {index < duplicatedItems.length - 1 && (
                <span className="divider">•</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AnnouncementBar;
