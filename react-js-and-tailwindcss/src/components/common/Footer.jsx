import { BsApple, BsGooglePlay } from "react-icons/bs";
import { footerData } from "../assets/data/dummydata";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <>
      <section className="app w-4/5 m-auto rounded-lg shadow-shadow2 text-white flex md:flex-col bg-primary mt-16 relative z-10">
        <div className="left w-[60%] md:w-full p-10">
          <h1 className="text-4xl font-semibold leading-tight">
            Start Learning by <br /> Downloading Apps
          </h1>
        </div>
        <div className="right w-[40%] md:w-full flex items-center px-5 rounded-r-lg rounded-bl-[500px] gap-8 bg-[#ff7c54] md:bg-transparent md:p-8">
          <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow-1 rounded-sm">
            <BsApple />
            <label htmlFor="text" className="text-sm">
              App Store
            </label>
          </div>

          <div className="box flex gap-2 items-center px-5 py-3 border text-white border-gray-50 hover:bg-white hover:text-black shadow-shadow-1 rounded-sm">
            <BsGooglePlay />
            <label htmlFor="text" className="text-sm">
              Play Store
            </label>
          </div>
        </div>
      </section>

      <footer className="bg-[#f3f4f8] py-10 pt-32 -mt-24">
        <div className="container grid grid-cols-4 gap-5 md:grid-cols-2">
          <div className="logo">
            <img src="" alt="imagelogo" className="h5" />
            <span className="text-[14px]">
              Great lesson ideas and lesson plans for ESL teachers! Educators
              can customize lesson plans to best.
            </span>
          </div>

          {footerData.map((val, index) => (
            <li key={index}>
              <h4 className="text-black text-sm font-semibold mb-5">
                {val.header}
              </h4>
              {val.subtitle.map((sub, index) => (
                <NavLink key={index} className=" block mb-2">
                  {sub.header}
                </NavLink>
              ))}
            </li>
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
