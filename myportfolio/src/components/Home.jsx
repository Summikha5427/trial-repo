import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";

const Home = () => {
  return (
    <div name="home" className="bg-[#0a192f] w-full h-screen">
      {/* container */}
      <div className="max-w-[1000px] mx-auto  px-8 flex flex-col justify-center h-full">
        <p className="text-purple-400">Hi,my name is</p>

        <h1 className="text-4xl sm:text-6xl font-bold text-[white]">
          Sumia Khan
        </h1>

        <h2 className="text-4px sm:text-5xl font-bold text-[#cad3ef]">
          I'm a Full Stack Developer
        </h2>

        <p className="text-[#abb2c6] py-4 max-w-700px ">
          I'm a full-stack developer specailizing in building (and occasionally
          designing) exceptional digital experiences. Currently, I am focused on
          building responsive full-stack web-applications
        </p>

        <div>
          <button className="text-white border-2 px-6 3py- my-2 items-center flex hover:bg-purple-300 hover:border-purple-300 ">
            View Work
            <span className="hover:rotate-90 duration-300">
              <HiArrowNarrowRight className="ml-3" />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
