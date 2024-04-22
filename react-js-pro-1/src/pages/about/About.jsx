import Header from "../../components/Header";
import HeaderImage from "../../images/header-bg-1.jpeg";
import StoryIamge from "../../images/about1.jpg";
import VisionIamge from "../../images/about2.webp";
import MissionIamge from "../../images/about3.png";
import "./about.css";

const About = () => {
  return (
    <>
      <Header title="About Us" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam quod,
        error distinctio deserunt officia earum explicabo saepe sed consequatur
        voluptatem.
      </Header>
      <section className="about__story">
        <div className="container about__story-container">
          <div className="about__section-image">
            <img src={StoryIamge} alt="Our Story Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Story</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              nulla quaerat recusandae nesciunt culpa voluptatibus facere
              debitis accusantium veritatis, deleniti voluptate cum et omnis
              asperiores id praesentium autem illum possimus iste.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              fuga, tempore animi corporis ad distinctio delectus nemo tempora
              libero et molestias doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolore commodi dicta illum nam.
            </p>
          </div>
        </div>
      </section>

      <section className="about__Vision">
        <div className="container about__Vision-container">
          <div className="about__section-content">
            <h1>Our Vision</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              nulla quaerat recusandae nesciunt culpa voluptatibus facere
              debitis accusantium veritatis, deleniti voluptate cum et omnis
              asperiores id praesentium autem illum possimus iste.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              fuga, tempore animi corporis ad distinctio delectus nemo tempora
              libero et molestias doloribus.
            </p>
          </div>
          <div className="about__section-image">
            <img src={VisionIamge} alt="Our Vision Image" />
          </div>
        </div>
      </section>

      <section className="about__mission">
        <div className="container about__mission-container">
          <div className="about__section-image">
            <img src={MissionIamge} alt="Our Mission Image" />
          </div>
          <div className="about__section-content">
            <h1>Our Mission</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
              nulla quaerat recusandae nesciunt culpa voluptatibus facere
              debitis accusantium veritatis, deleniti voluptate cum et omnis
              asperiores id praesentium autem illum possimus iste.
            </p>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
              fuga, tempore animi corporis ad distinctio delectus nemo tempora
              libero et molestias doloribus.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
              dolore commodi dicta illum nam.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
