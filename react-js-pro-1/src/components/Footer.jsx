import { Link } from "react-router-dom";

import Logo from "../images/logo.svg";

import { FaLinkedin } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { AiFillGithub } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      <div className="container footer__container">
        <article>
          <Link to="/" className="logo">
            <img src={Logo} alt="Footer Logo" />
          </Link>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium,
            iste quaerat! Odit eius porro excepturi!
          </p>
          <div className="footer__socials">
            <a
              href="https://www.linkedin.com/in/samira-dorchalian-a61789219/"
              target="_blank"
              rel="noreferrer noopenen"
            >
              <FaLinkedin />
            </a>
            <a
              href="samiradorchalain1998@gmail.com"
              target="_blank"
              rel="noreferrer noopenen"
            >
              <SiGmail />
            </a>
            <a
              href="https://github.com/SamiraDorchalian"
              target="_blank"
              rel="noreferrer noopenen"
            >
              <AiFillGithub />
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=100069124359915"
              target="_blank"
              rel="noreferrer noopenen"
            >
              <FaFacebook />
            </a>
          </div>
        </article>
        <article>
          <h4>Premalinks</h4>
          <Link to="/about">About</Link>
          <Link to="/plans">Plans</Link>
          <Link to="/trainers">Trainers</Link>
          <Link to="/gallery">Gallery</Link>
          <Link to="/contact">Contact</Link>
        </article>
        <article>
          <h4>Insights</h4>
          <Link to="/about">Blog</Link>
          <Link to="/plans">Case Studies</Link>
          <Link to="/trainers">Events</Link>
          <Link to="/gallery">Communities</Link>
          <Link to="/contact">FAQs</Link>
        </article>
        <article>
          <h4>Get In Touch</h4>
          <Link to="/about">Contact Us</Link>
          <Link to="/plans">Support</Link>
        </article>
      </div>
      <div className="footer__copyright">
        <small>2024 EGATOR TUTORIALS &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
