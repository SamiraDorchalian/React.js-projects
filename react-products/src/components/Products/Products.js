import { useState } from "react";
import ProductList from "./Products.jsx";
import "./Products.css";

export const Products = () => {
  const [item, setItem] = useState(ProductList);
  return (
    <>
      <section className="products_section">
        <div className="heading_container d-flex flex-column align-center">
          <h2>New Products In Store </h2>
          <p>Fearured Product Just Arrived</p>
        </div>
        <div className="container layout_padding">
          <div className="product_container d-flex justify-content-center">
            {item.map((Elem) => {
              return (
                <a href="#">
                  <div
                    className="product_box d-flex flex-column align-center"
                    key={Elem.id}
                  >
                    <div className="product_img-box d-flex flex-column align-center">
                      <img src={Elem.image} />
                      <span>{Elem.sale}</span>
                    </div>
                    <div className="product_detail-box mt-1 text-center">
                      <span>{Elem.price}</span>
                      <p>{Elem.description}</p>
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
