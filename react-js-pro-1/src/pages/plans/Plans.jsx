import Header from "../../components/Header";
import HeaderImage from "../../images/header-bg-4.jpg";
import Card from "../../UI/Card";
import { plans } from "../../data";

import "./plans.css";

const Plans = () => {
  return (
    <>
      <Header title="Membershio Plans" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
        eveniet! Facilis voluptate maiores enim illo.
      </Header>
      <section className="plans">
        <div className="container plans__container">
          {plans.map(({ id, name, desc, price, features }) => {
            return (
              <Card key={id} className="plan">
                <h3>{name}</h3>
                <small>{desc}</small>
                <h1>{`$${price}`}</h1>
                <h2>/mo</h2>
                <h4>Features</h4>
                {features.map(({ feature, available }, index) => {
                  return (
                    <p key={index} className={!available ? "disabled" : ""}>
                      {feature}
                    </p>
                  );
                })}
                <button className="btn lg">Choose Plan</button>
              </Card>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Plans;
