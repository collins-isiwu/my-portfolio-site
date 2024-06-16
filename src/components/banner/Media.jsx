import React from 'react'
import { FaReact } from "react-icons/fa";
import { SiDjango, SiFastapi, SiFlask, SiPython, SiJavascript } from "react-icons/si";

const Media = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-6 lgl:gap-0 justify-between">
        <div>
          <h2 className="text-base uppercase font-titleFont mb-4">
            Technical Skillset
          </h2>
          <div className="flex gap-4">
          <span className="bannerIcon">
              <SiPython />
            </span>
            <span className="bannerIcon">
              <SiDjango />
            </span>
            <span className="bannerIcon">
              <FaReact />
            </span>
            <span className="bannerIcon">
              <SiFlask />
            </span>
            <span className="bannerIcon">
              <SiFastapi />
            </span>
            <span className="bannerIcon">
              <SiJavascript />
            </span>
          </div>
        </div>
      </div>
  )
}

export default Media