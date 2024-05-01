import { BsDownload } from "react-icons/bs";

import data from "./data";

import Card from "../../components/Card";
import AboutImage from "../../assets/about.jpeg";

import "./About.css";

function About() {
  return (
    <section id="about">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="About Image" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
            exercitationem ducimus aliquid, repellat, autem quas dolor numquam,
            assumenda sit et doloremque consequatur vel voluptatem inventore!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo nulla
            debitis ullam dignissimos voluptate eveniet ex qui quasi. Saepe
            incidunt similique esse, unde porro, dignissimos nemo reprehenderit
            nihil animi sunt tempora, doloribus ab atque. Obcaecati?
          </p>
          <a href="#" download className="btn primary">
            Download CV
            <BsDownload />
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
