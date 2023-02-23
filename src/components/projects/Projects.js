import React from 'react'
import Title from '../layouts/Title'
import { projectTwo, projectFour, projectFive, projectSix, projectSeven, projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND KEEP YOUR FEEDBACK"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Menus.ng"
          des="Menus NG is Abuja's largest growing restaurant directory. With 100+ listings, users can discover and connect with their favourite spots, view their full food and drinks menu"
          src={projectFour}
          href='https://menus.ng/'
        />
        <ProjectsCard
          title="E-commerce Website"
          des="Stream Bank helps over 2 million customers achieve their financial goals by helping them save and invest with ease. Put that extra cash to use without putting it at risk with Stream Bank."
          src={projectFive}
          href='https://www.streameufunds.com/'
        />
        <ProjectsCard
          title="E-commerce Website"
          des="An eBay-like e-commerce auction site that will allow users to post auction listings, place bids on listings, comment on those listings, and add listings to a “watchlist.”"
          src={projectSix}
          git='https://github.com/collins-isiwu/Commerce'
        />
        <ProjectsCard
          title="Network"
          des="A Twitter-like social network website for making posts and following users."
          src={projectEight}
          git='https://github.com/collins-isiwu/Network'
        />
        <ProjectsCard
          title="e-Library"
          des="Library is a web application built with Django that makes API calls to Google Book API via JQUERY in order to retrieve information about the searched book. It uses PostgreSQL to store and retrieve already searched books. Categorizes book and so much more."
          src={projectTwo}
          git='https://github.com/collins-isiwu/library'
        />
        <ProjectsCard
          title="Email"
          des="A front-end for an email client that makes API calls to send and receive emails. This project shows my JavaScript prowress. This is a single-page web application that's controlled by JavaScript."
          src={projectSeven}
          git='https://github.com/collins-isiwu/eMail'
        />
      </div>
    </section>
  );
}

export default Projects