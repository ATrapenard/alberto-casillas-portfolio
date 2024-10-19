import "./App.css";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Landing from "./components/Landing/landing";
import About from "./components/About/about";
import Resume from "./components/Resume/resume.jsx";
import Skills from "./components/Skills/skills";
import Navbar from "./components/Navbar/nav.jsx";
import Footer from "./components/Footer/footer.jsx";
import Contact from "./components/Contact/contact.jsx";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/about" element={<About />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
