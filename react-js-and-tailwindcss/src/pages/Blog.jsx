import { NavLink } from "react-router-dom";

import { AiTwotoneCalendar } from "react-icons/ai";

import { courses } from "../components/assets/data/dummydata";

const Blog = () => {
  return (
    <>
      <section className="courses">
        <div className="w-4/5 m-auto">
          <div className="heading text-center py-12">
            <h1 className="text-3xl font-semibold text-black">
              We Share <br />
              Our Thoughts On Desing
            </h1>
            <span className="text-sem mt-2 block">
              you don't have to struggle alone, you've got our assistance and
              help.
            </span>
          </div>
          <div className="grid grid-cols-3 gap-5 md:grid-cols-1">
            {courses.slice(0, 3).map((item) => (
              <div
                key={item.id}
                className="box rounded-lg shadow-shadow1 bg-white"
              >
                <div className="images rounded-t-lg relative overflow-hidden h-40 w-full">
                  <img
                    src={item.cover}
                    alt="imageCover"
                    className="rounded-t-lg object-cover w-full h-full transition ease-in-out  delay-150 cursor-pointer hover:scale-125 duration-300"
                  />
                  <div className="text p-3">
                    <span className="text=[12px] bg-backbg p-1 px-3 text-white rounded-[5px]">
                      Lifestyle
                    </span>
                    <NavLink to="/single-page">
                      <h3 className="text-black my-4 font-medium h-10"></h3>
                    </NavLink>
                    <div className="user flex items-center justify-between">
                      <div className="flex items-center">
                        <img
                          src=""
                          alt="image"
                          className="rounded-full w-7 h-7 object-cover shadow-shadow1"
                        />
                        <span className="text-[14px] ml-2">
                          Credit goes to sunil
                        </span>
                      </div>
                      <div className="flex items-center">
                        <AiTwotoneCalendar />
                        <span className="text=[14px] ml-2"> Dec 11, 2024</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
