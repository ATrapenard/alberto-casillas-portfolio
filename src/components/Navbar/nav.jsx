import React from "react";
import { Link } from "react-router-dom";
import "./nav.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar-links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/about">About</Link>
        </li>
        <li className="link">
          <Link to="/skills">Skills</Link>
        </li>
        <li className="link">
          <Link to="/resume">Resume</Link>
        </li>
        <li className="link">
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
