import { BsApple, BsGooglePlay } from "react-icons/bs";
const Footer = () => {
  return (
    <div>
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
    </div>
  );
};

export default Footer;
