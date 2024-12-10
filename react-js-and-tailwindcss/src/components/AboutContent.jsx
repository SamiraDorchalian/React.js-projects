import { AiOutlineCheck } from "react-icons/ai";
import imageOne from "../components/assets/images/courses-1.jpeg";
const AboutContent = () => {
  return (
    <section className="mb-16">
      <div className="container flex md:flex-col">
        <div className="left w-1/3 md:w-full mr-8 md:mr-0 relative">
          <img src={imageOne} alt="aboutImage" className="rounded-xl" />
          <img
            src=""
            alt="aboutImage"
            className="rounded-xl absolute -bottom-14 -left-24 h-56 md:left-80"
          />
          <div className="img-group ml-24 mt-3">
            <img src="" alt="imageAvatar" />
            <span className="text-[14px]">
              Join over <label className="text-black text-sm">4.000+</label>{" "}
              students
            </span>
          </div>
        </div>
        <div className="right w-2/3 md:w-full md:mt-16">
          <div className="heading w-4/5 md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              Achieve Your Goals With Educal
            </h1>
            <span className="text-sm mt-2 block leading-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Voluptates, incidunt.
            </span>
            <ul className="my-5">
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Upskill your
                organization.
              </li>
              <li className="text-sm flex items-center gap-5 my-2">
                <AiOutlineCheck className="text-green-500" /> Access more then
                100k online courses
              </li>
              <li className="text-sm flex items-center gap-5">
                <AiOutlineCheck className="text-green-500" /> Learn the latest
                skills
              </li>
            </ul>
            <button className="px-5 py-2 border border-gray-300 rounded-md text-sm">
              Apply Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutContent;
