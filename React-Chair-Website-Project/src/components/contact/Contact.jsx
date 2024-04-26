import React from "react";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <section className="contact container" id="container">
        <div className="contact-data">
          <h2 className="heading">
            Get Started with <span className="gradient-text">LeChair</span>
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
            recusandae deserunt laudantium,
            <br /> dolores excepturi eos, atque maxime nam accusamus molestiae
            saepe.
          </p>
          <a href="#" className="btn">
            Get Started
          </a>
        </div>
      </section>
    </div>
  );
};

export default Contact;
