import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = () => {
  const [hasScrolled, setHasScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handlescroll = () => {
      setHasScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handlescroll);
    return () => {
      window.removeEventListener("scroll", handlescroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div>
      <div className={`header ${hasScrolled ? "shadow" : ""}`}>
        <div className="nav container">
          <a href="#" className="logo">
            LeChair
          </a>
          <div className={`navbar ${isMenuOpen ? "open-menu" : ""}`}>
            <a href="#" className="nav-link">
              Furniture
            </a>
            <a href="#" className="nav-link">
              Projects
            </a>
            <a href="#" className="nav-link">
              Products
            </a>
            <a href="#" className="nav-link">
              About Us
            </a>
            <a href="#" className="register-btn btn">
              Register
            </a>
          </div>
          <div
            className={`menu-icon ${isMenuOpen ? "move" : ""}`}
            onClick={toggleMenu}
          >
            <div className="line1"></div>
            <div className="line2"></div>
            <div className="line3"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
