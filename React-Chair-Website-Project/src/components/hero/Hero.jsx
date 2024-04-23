import React from "react";
import { IoIosArrowForward } from "react-icons/io";

import "./hero.css";

const Hero = () => {
  return (
    <div>
      <section className="hero" id="hero">
        <div className="hero-container container">
          <div className="hero-data">
            <h1>
              The most <br />
              <span className="gradient-text">comfortable</span>
              <br />
              chair for you
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil
              ipsum nisi odit itaque, tempora quos!
            </p>
            <div className="hero-btns">
              <a href="#" className="btn shop-now">
                Shop Now
              </a>
              <a href="#" className="learn-more gradient-text">
                <span>Learn More</span>
                <IoIosArrowForward />
              </a>
            </div>
            <div className="hero-numbers">
              <div className="n-box">
                <h2>
                  12k
                  <span>+</span>
                </h2>
                <p>
                  Premium <br />
                  Product
                </p>
              </div>
              <div className="n-box">
                <h2>
                  21k
                  <span>+</span>
                </h2>
                <p>
                  Happy <br />
                  Customer
                </p>
              </div>
              <div className="n-box">
                <h2>
                  28k
                  <span>+</span>
                </h2>
                <p>
                  Awar <br />
                  Winning
                </p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img src="./Home.png" alt="" className="main-img" />
            <img src="./background.png" alt="" className="hero-bg-img" />
            <img src="./Tag.png" alt="" className="tag-img" />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;
