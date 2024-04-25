import React from "react";
import "./chair.css";
import SwiperCore, { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Chairdata from "../../assets/slider.json";
SwiperCore.use([Navigation]);

const Chair = () => {
  return (
    <div>
      <section className="chair container" id="chair">
        <h2 className="heading">
          Shop <span className="gradient-text">Popular</span> <br /> Categories
        </h2>
        <div className="chair-content">
          <Swiper
            navigation
            spaceBetween={15}
            slidesPerView={1}
            breakpoints={{
              400: {
                slidesPerView: 1,
              },
              655: {
                slidesPerView: 2,
              },
              880: {
                slidesPerView: 3,
              },
            }}
          >
            {Chairdata.map((item, index) => (
              <SwiperSlide key={index}>
                <div className="chair-box">
                  <div className="box-img">
                    <img src={item.image} alt={item.title} />
                    <span className="box-icon">{item.icon}</span>
                  </div>
                  <h3 className="box-title">{item.title}</h3>
                  <p>{item.subtitle}</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </div>
  );
};

export default Chair;
