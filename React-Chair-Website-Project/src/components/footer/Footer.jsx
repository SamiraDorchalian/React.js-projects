import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <div>
      <div className="footer container">
        <div className="footer-box">
          <a href="#" className="logo">
            LeChair
          </a>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias,
            rerum?
          </p>
        </div>
        <div className="footer-box">
          <h3>About</h3>
          <a href="#">About Us</a>
          <a href="#">Features</a>
          <a href="#">News & Blogs</a>
        </div>
        <div className="footer-box">
          <h3>Company</h3>
          <a href="#">How We Work?</a>
          <a href="#">Capital</a>
          <a href="#">Security</a>
        </div>
        <div className="footer-box">
          <h3>Support</h3>
          <a href="#">FAQs</a>
          <a href="#">Support Center</a>
          <a href="#">Contact Us</a>
        </div>
      </div>
      <p className="copyright">&#169; LeChair</p>
    </div>
  );
};

export default Footer;
