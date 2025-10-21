// src/App.js
import React from "react";
import "./App.css";
import AnnouncementBar from "./components/AnnouncementBar";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Team from "./components/Team";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import Clients from "./components/Clients";

function App() {
  return (
    <div className="App">
      <AnnouncementBar />
      <Header />
      <Hero />
      <About />
      <Services />
      <Team />
      <Testimonials />
      <Clients />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
