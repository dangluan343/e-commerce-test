// components/Footer.tsx

import React from "react";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li>
              <a href="#">Contact Us</a>
            </li>
            <li>
              <a href="#">FAQs</a>
            </li>
            <li>
              <a href="#">Policies</a>
            </li>
            {/* Add more links as needed */}
          </ul>
        </div>
        <div className="social-media">
          <h3>Follow Us</h3>
          <ul>
            <li>
              <a href="#">Facebook</a>
            </li>
            <li>
              <a href="#">Twitter</a>
            </li>
            <li>
              <a href="#">Instagram</a>
            </li>
            {/* Add more social media icons */}
          </ul>
        </div>
      </div>
      <div className="copyright">
        <p>&copy; 2024 Ecommerce Store. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
