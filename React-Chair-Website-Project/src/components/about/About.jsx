import React from "react";
import "./about.css";
import { SiAdguard } from "react-icons/si";
import { AiFillStar } from "react-icons/ai";
import { BsCheckLg } from "react-icons/bs";
import { IoIosPeople } from "react-icons/io";

const About = () => {
  return (
    <div>
      <section className="about container" id="about">
        <div className="about-img">
          <img src="./about.png" alt="" />
        </div>
        <div className="about-data">
          <h2 className="heading">
            Why
            <span className="gradient-text">Choose</span>
            Us ?
          </h2>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Necessitatibus ipsa soluta labore enim, sequi modi?
          </p>
          <div className="about-box-data">
            <div className="about-box">
              <span className="about-icon">
                <SiAdguard />
              </span>
              <h3 className="box-title">Longevity</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                sunt temporibus beatae, nisi dolore excepturi.
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <AiFillStar />
              </span>
              <h3 className="box-title">Heritage</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut
                sunt temporibus beatae, nisi dolore excepturi.
              </p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <BsCheckLg />
              </span>
              <h3 className="box-title">Quality</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </div>
            <div className="about-box">
              <span className="about-icon">
                <IoIosPeople />
              </span>
              <h3 className="box-title">Community</h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                officiis blanditiis in alias porro hic, maxime distinctio
                voluptates veniam amet consectetur, vero veritatis, vitae
                delectus?
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
