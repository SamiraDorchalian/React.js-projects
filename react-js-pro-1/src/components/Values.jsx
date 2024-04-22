import Image from "../images/values.jpeg";
import SectionHead from "./SectionHead";
import { values } from "../data";
import Card from "../UI/Card";

import { GiCutDiamond } from "react-icons/gi";

const Values = () => {
  return (
    <section className="values">
      <div className=".container values__container">
        <div className="values__left">
          <div className="values__image">
            <img src={Image} alt="Values Image" style={{ padding: "50px" }} />
          </div>
        </div>
        <div className="values__right">
          <SectionHead icon={<GiCutDiamond />} title="Values" />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci,
            vero esse quo et molestias ratione?
          </p>
          <div className="values__wrapper">
            {values.map(({ id, icon, title, desc }) => {
              return (
                <Card className="values__value" key={id}>
                  <span>{icon}</span>
                  <h4>{title}</h4>
                  <small>{desc}</small>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Values;
