import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Slider from "react-slick";

import "./hero.css";
import imageHero from "../../images/heroImage.png";

const Hero = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <div className="hero-area">
        <div className="container_fluid">
          <Slider>
            <div>
              <div className="col-1">
                <div className="d-flex">
                  <div className="text-col mt-6 pl-5">
                    <div className="slider-item p-0 m-0">
                      <h2 className="slider-heading">50% OFF first Order</h2>
                      <p className="mt-1 mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="d-flex">
                        <a href="" className="slider_btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="slider-item">
                      <img src={imageHero} alt="image-hero" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="col-1">
                <div className="d-flex">
                  <div className="text-col mt-6 pl-5">
                    <div className="slider-item p-0 m-0">
                      <h2 className="slider-heading">50% OFF first Order</h2>
                      <p className="mt-1 mb-1">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore
                        magna aliqua. Ut enim ad minim veniam.
                      </p>
                      <div className="">
                        <a href="" className="slider_btn">
                          Order Now
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="col-2">
                    <div className="slider-item">
                      <img src={imageHero} alt="image-hero" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Slider>
        </div>
      </div>
    </>
  );
};

export default Hero;
