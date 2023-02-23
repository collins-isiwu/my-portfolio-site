import React from 'react'
import { useTypewriter, Cursor } from "react-simple-typewriter";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";


const LeftBanner = () => {
    const [text] = useTypewriter({
      words: ["Backend developer.", "Full Stack Developer.", "API Developer."],
      loop: true,
      typeSpeed: 20,
      deleteSpeed: 10,
      delaySpeed: 2000,
    });
  return (
    <div className="w-full lgl:w-1/2 flex flex-col gap-20">
      <div className="flex flex-col gap-5">
        <h4 className=" text-lg font-normal">WELCOME!</h4>
        <h1 className="text-6xl font-bold text-white">
          Hi, I'm <span className="text-designColor capitalize">Collins Isiwu</span>
        </h1>
        <h2 className="text-4xl font-bold text-white">
          a <span>{text}</span>
          <Cursor
            cursorBlinking="false"
            cursorStyle="|"
            cursorColor="#ff014f"
          />
        </h2>
        <p className="text-base font-bodyFont leading-6 tracking-wide">
        Dynamic and creative python full stack developer with over three years of experience in producing robust code. 
        In previous roles, I have used my knowledge of Python, C, JavaScript, Django, Django-REST framework, Flask, Laravel, ReactJs, VueJs, HTML, CSS, Docker to build impressive 
        software programs and web applications serving users. Looking to deliver excellent web development in JavaScript and Python to help grow businesses.
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
      </div>
  );
}

export default LeftBanner