import { useState } from "react";
import ShopItem from "./Shop.jsx";
import "./Shop.css";

export const Shop = () => {
  const [Item] = useState(ShopItem);
  return (
    <>
      <section className="find_section layout_padding-botton mt-5 text-center">
        <div className="container_fluid">
          <div className="row">
            <div className="col col-lg-6 sol-md-8 offset-md-2">
              {Item.map((elem) => {
                return (
                  <div className="find_container mt-2 mb-2" key={elem.id}>
                    <div className="row align-center">
                      <div className="col col-sm-6">
                        <div className="find_container-img">
                          <img src={elem.findImg} alt="image" />
                        </div>
                      </div>

                      <div className="col col-sm-6">
                        <h3>{elem.title1}</h3>
                        <p>{elem.title2}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
