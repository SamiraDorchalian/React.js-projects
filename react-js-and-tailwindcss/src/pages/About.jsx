import { FaBookDead } from "react-icons/fa";
import { AiOutlineCheck } from "react-icons/ai";
import imageOne from "../components/assets/images/courses-6.jpeg";
import imageTwo from "../components/assets/images/courses-1.jpeg";

const About = () => {
  return (
    <div>
      <section className="about py-16">
        <div className="container">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              Why An Scholercity Out of The Ordinary
            </h1>
            <span className="text-sm mt-2 block">
              tou don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-4 gap-5 mt-5 md:grid-clos-2">
            <AboutCard
              color="bg-[#2D69F0]"
              icon={<FaBookDead size={50} />}
              title="4,000 online courses"
              desc="You don't have to struggle alone,you've"
            />
            <AboutCard
              color="bg-[#DD246E]"
              icon={<FaBookDead size={50} />}
              title="4,000 online courses"
              desc="You don't have to struggle alone,you've"
            />
            <AboutCard
              color="bg-[#8007E6]"
              icon={<FaBookDead size={50} />}
              title="4,000 online courses"
              desc="You don't have to struggle alone,you've"
            />
            <AboutCard
              color="bg-[#0CAE74]"
              icon={<FaBookDead size={50} />}
              title="4,000 online courses"
              desc="You don't have to struggle alone,you've"
            />
          </div>
        </div>
      </section>
      <AboutContent />
    </div>
  );
};

export const AboutCard = (props) => {
  return (
    <div
      className={`box shadow-md p-5 py-8 rounded-md text-white ${props.color} curser-pointer transition ease-in-out delay-150 hover:-translate-y-4 duration-300 `}
    >
      <div className="icon">{props.icon}</div>
      <div className="text mt-5">
        <h4 className="text-lg font-semibold my-3">{props.title}</h4>
        <p className="text-sm">{props.desc}</p>
      </div>
    </div>
  );
};

export const AboutContent = () => {
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

export default About;
