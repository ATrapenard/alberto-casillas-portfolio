import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";
import { FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>
          Alberto Casillas |{" "}
          <a href="mailto:albertocasilla123@gmail.com">
            albertocasilla123@gmail.com
          </a>
        </p>
        <a
          href="https://www.linkedin.com/in/-alberto-casillas/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedinIn className="icon" />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
