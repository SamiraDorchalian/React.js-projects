import { useState } from "react";
import BabyItem from "./Baby.jsx";

import detailImage from "../../images/detail.png";
import "./baby.css";

const CareBaby = () => {
  const [Item] = useState(BabyItem);

  return (
    <>
      <section className="detail_section pt-4">
        <div className="container_fluid">
          <div className="row">
            <div className="col-lg-3">
              <div className="detail_img-box">
                <img src={detailImage} alt="imageDetail" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="detail-container d-flex">
                {Item.map((curElem) => {
                  return (
                    <div
                      className="detail-box d-box-1 d-flex justify-content-center align-center"
                      key={curElem.id}
                    >
                      <a href="#">
                        <div className="detail-content d-flex flex-column align-center">
                          <img src={curElem.image} alt="detail" />
                        </div>
                        <h5>{curElem.name}</h5>
                      </a>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareBaby;
