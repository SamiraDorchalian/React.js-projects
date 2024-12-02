import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useState } from "react";
import clientList from "./Client.jsx";
import "./Client.css";
import ImageProducts from "../../images/makeup.png";

const Client = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  const [item] = useState(clientList);

  return (
    <>
      <section className="client_section layout_padding">
        <div className="container">
          <h2 className="heading_content text-center mb-3">
            What Our Customer Says
          </h2>
          <Slider {...settings}>
            <div className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row layout_padding">
                    {item.map((curElem) => {
                      return (
                        <div className="col col-md-6">
                          <div className="client-box">
                            <div className="client_id-box d-flex align-center">
                              <div className="client_img-box d-flex justify-content-center">
                                <img src={curElem.logo} alt="image" />
                              </div>
                              <h4>{curElem.name}</h4>
                            </div>
                            <div className="client-detail">
                              <p>{curElem.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            <div className="carousel slide">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row layout_padding">
                    {item.map((curElem) => {
                      return (
                        <div className="col col-md-6">
                          <div className="client-box">
                            <div className="client_id-box d-flex align-center">
                              <div className="client_img-box d-flex justify-content-center">
                                <img src={curElem.logo} alt="image" />
                              </div>
                              <h4>{curElem.name}</h4>
                            </div>
                            <div className="client-detail">
                              <p>{curElem.description}</p>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>

        <div className="container">
          <div className="item_container">
            <div className="row">
              <div className="col-sm-7">
                <h3>Best offers on any makeup items</h3>
                <p>
                  Contrary to popular belief, Lorem ipsum is placeholder text
                  commonly used in the graphic, print
                </p>
                <div>
                  <a href="#"> Shop Now</a>
                </div>
              </div>
              <div className="col-sm-5">
                <div className="item_img-box">
                  <img src={ImageProducts} alt="image" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default Client;
