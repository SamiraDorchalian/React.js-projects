import Header from "../../components/Header";
import HeaderImage from "../../images/header-bg-2.jpg";
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

import "./contact.css";

const Contact = () => {
  return (
    <>
      <Header title="GetInTouch" image={HeaderImage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
        magnam iusto reiciendis quae rerum quaerat!
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a href="#" target="_blank" rel="noreferrer noopener">
              <MdEmail />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <BsMessenger />
            </a>
            <a href="#" target="_blank" rel="noreferrer noopener">
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
