import { FaUser, FaGraduationCap } from "react-icons/fa";
import { GiEvilBook, GiWorld } from "react-icons/gi";
import ImageOne from "../components/assets/images/courses-1.jpeg";
import ImageTwo from "../components/assets/images/courses-6.jpeg";

const Instructor = () => {
  return (
    <>
      <section className="instructor mb-16">
        <dic className="container">
          <div className="heading py-12 text-center w-1/2 m-auto md:w-full">
            <h1 className="text-3xl font-semibold text-black">
              What Is Skilline?
            </h1>
            <span className="text-[14px] mt-2 block">
              Should faff about me old mucker blatant bubble and squeak hanky
              pank some dodgy chav bevvy arse chimney pot I, ruddy plastered
              buggered smashing blow off I'm telling up the kyver he legged it
              bleeder jolly good,
            </span>
          </div>
          <div className="content grid grid-cols-2 gap-5 md:grid-cols-1">
            <div className="images rounded-lg relative overflow-hidden h-72 w-full before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src={ImageOne}
                alt="image"
                className="rounded-t-lg object-cover w-full h-72"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  Mostly Online Learnings
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  Start a class today
                </button>
              </div>
            </div>
            <div className="images rounded-lg relative overflow-hidden h-72 w-full before:bg-backbg before:h-72 before:w-full before:absolute before:top-0 before:left-0 before:content before:z-10">
              <img
                src={ImageTwo}
                alt="image"
                className="rounded-t-lg object-cover w-full h-72"
              />
              <div className="categ flex flex-col gap-4 absolute top-5 z-30 p-8 items-center justify-center text-center">
                <h2 className="text-3xl text-white font-semibold">
                  Become an Instructor
                </h2>
                <button className="text-[15px] py-2 px-4 border border-gray-200 rounded-md text-white">
                  Start a class today
                </button>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="heading py-12 text-center w-2/3 m-auto md:w-full">
              <h1 className="text-3xl font-semibold text-black">
                We Are Proud
              </h1>
              <span className="text-[14px] mt-2 block">
                You don't have to struggle alone, you've got our assistance and
                help.
              </span>
            </div>
            <div className="content grid grid-cols-4 gap-5 md:grid-cols-2">
              <InstructorCard
                color="text-red-500"
                icon={<FaUser size={40} />}
                title="63"
                desc="Students Enrolled"
              />
              <InstructorCard
                color="text-orange-500"
                icon={<GiEvilBook size={40} />}
                title="20"
                desc="Total Courses"
              />
              <InstructorCard
                color="text-purple-500"
                icon={<FaGraduationCap size={40} />}
                title="4"
                desc="Online Leamers"
              />
              <InstructorCard
                color="text-indigo-500"
                icon={<GiWorld size={40} />}
                title="63"
                desc="Online Leamers"
              />
            </div>
          </div>
        </dic>
      </section>
    </>
  );
};

export const InstructorCard = (props) => {
  return (
    <div className={`box p-5 py-5 rounded-md`}>
      <div className={`${props.color}`}>{props.icon}</div>
      <div className="text mt-2">
        <h4 className="text-lg font-semibold text-black">{props.title}</h4>
        <p className="text-[15px]">{props.desc}</p>
      </div>
    </div>
  );
};

export default Instructor;
