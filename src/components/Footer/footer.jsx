import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-left">
          <p>
            Alberto Casillas |{" "}
            <a href="mailto:albertocasilla123@gmail.com">
              albertocasilla123@gmail.com
            </a>{" "}
            |
          </p>
          <a
            href="https://www.linkedin.com/in/-alberto-casillas/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedinIn className="icon" />
          </a>
        </div>
        <div className="footer-center">
          <p>&copy;Alberto Casillas. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <ul className="footer-links">
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
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
