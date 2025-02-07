import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import Media from "./Media";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Backend Developer.", "API Developer.", "AI Engineer."],
      loop: true,
      typeSpeed: 100,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex justify-center flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className="text-md font-normal text-base sm:text-sm">WELCOME TO MY WORLD</h4>
        <h1 className="text-6xl font-bold text-white sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl">
          Hi, I'm <span className="text-designColor capitalize">Collins Isiwu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white sm:text-xl md:text-3xl lg:text-4xl">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base sm:text-sm md:text-base lg:text-lg font-bodyFont leading-6 sm:leading-5 md:leading-6 lg:leading-6 tracking-wide">
        Dynamic and creative Backend Developer with over four years of experience in developing robust and scalable web and AI software solutions. Proficient in Python, JavaScript, Django, Flask, ReactJS, and FastAPI. Skilled in creating high-quality RESTful APIs, microservices, and integrating AI models using Langchain, VectorDB, Agentic AI and RAG. I am eager to leverage my expertise to contribute to business growth and success.
        </p>
      </div>
      <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Find me in
          </h2>
          <div className="flex gap-4">
            <span className="bannerIcon">
              <a href='https://github.com/collins-isiwu' target="_blank" rel="noreferrer"><FaGithub /></a>
            </span>
            <span className="bannerIcon">
              <a href='mailto:collinscisiwu@outlook.com' target="_blank" rel="noreferrer"><HiOutlineMail/></a>
            </span>
            <span className="bannerIcon">
              <a href="https://linkedin.com/in/collins-isiwu" target="_blank" rel="noreferrer"><FaLinkedinIn /></a>
            </span>
          </div>
        </div>
        </div>
        {/* Media */}
        <Media />
      </div>
  );
}

export default LeftBanner