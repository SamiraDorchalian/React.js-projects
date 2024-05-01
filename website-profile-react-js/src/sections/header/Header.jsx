import HeaderImage from "../../assets/header.jpeg";
import data from "./data";

import "./Header.css";

function Header() {
  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile">
          <img src={HeaderImage} alt="Header Profile" />
        </div>
        <h3>Samira Dory</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptates,
          qui ducimus voluptas cumque eius voluptatibus.
        </p>
        <div className="header__cta">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn litgh">
            My Work
          </a>
        </div>
        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Header;
