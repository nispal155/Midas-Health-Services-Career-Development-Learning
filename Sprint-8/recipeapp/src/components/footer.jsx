import React from "react";
import "./headfoot.css";
import { FaFacebookF, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">
      <p>© 2025 Recipe Book | Good food is the foundation of happiness 🍴</p>
      <div className="social-links">
        <a href="https://www.instagram.com" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="https://www.facebook.com" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.twitter.com" aria-label="Twitter">
          <FaTwitter />
        </a>
      </div>
    </footer>
  );
}

export default Footer;
