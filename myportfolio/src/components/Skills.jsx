import React from "react";
import HTML from "../assests/html.png";
import JavaScript from "../assests/javascript.png";
import TailwindCSS from "../assests/tailwind.png";
import ReactImg from "../assests/react.png";
import Github from "../assests/github.png";
import Node from "../assests/node.png";
import MongoDB from "../assests/mongo.png";
import Express from "../assests/express.png";
import "../index.css";

const Skills = () => {
  return (
    // Main Screen
    <div
      name="Skills"
      className="w-full h-screen text-gray-300 bg-[#0a192f]"
    >
      {/* Main Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-purple-300">
            Skills
          </p>
          <p className="py-4">
            ..These are few Technologies I have worked with.
          </p>
        </div>

        {/* Image Container */}
        <div className="w-full grid  grid-cols-2  sm:grid-cols-4  gap-4  text-center py-8 ">
          {/* HTML-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={HTML} alt="HTML icon"></img>
            <p className="my-4">HTML</p>
          </div>

          {/* TailwindCSS-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 ">
            <img
              className="w-20 mx-auto"
              src={TailwindCSS}
              alt="HTML icon"
            ></img>
            <p className="my-4">TailwindCSS</p>
          </div>

          {/* JavaScript-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="HTML icon"
            ></img>
            <p className="my-4">JavaScript</p>
          </div>

          {/* React-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon"></img>
            <p className="my-4">React</p>
          </div>

          {/* Github-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Github} alt="HTML icon"></img>
            <p className="my-4">Github</p>
          </div>

          {/* Node-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon"></img>
            <p className="my-4">Node</p>
          </div>

          {/* MongoDB-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={MongoDB} alt="HTML icon"></img>
            <p className="my-4">MongoDB</p>
          </div>

          {/* Express-icon */}
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Express} alt="HTML icon"></img>
            <p className="my-4">Express</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
