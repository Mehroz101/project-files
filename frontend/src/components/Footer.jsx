import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css"
const Footer = () => {
  return (
    <>
      <footer class="footer">
  <div class="footer-container">
    <div class="footer-logo">
      <h1>Parkify</h1>
      <p>Your smart solution for parking.</p>
    </div>
    <div class="footer-links">
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#features">Features</a></li>
          <li><a href="#pricing">Pricing</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Contact Us</h3>
        <ul>
          <li><a href="mailto:info@example.com">info@example.com</a></li>
          <li><a href="tel:+123456789">+123 456 789</a></li>
          <li>123 Main Street, City</li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Follow Us</h3>
        <div class="social-media">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <i class="fab fa-instagram"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" aria-label="LinkedIn">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
  <div class="footer-bottom">
    <p>&copy; 2024 Smart Parking. All rights reserved.</p>
  </div>
</footer>


    </>
  );
};

export default Footer;
