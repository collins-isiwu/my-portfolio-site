import React from 'react'
import Title from '../layouts/Title'
import { projectFour, projectSix, projectEight } from "../../assets/index";
import ProjectsCard from './ProjectsCard';

const Projects = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="VISIT MY PORTFOLIO AND GIVE YOUR FEEDBACK"
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
          des="An eBay-like e-commerce auction site that will allow users to post auction listings, place bids on listings, comment on those listings, and add listings to a “watchlist.”"
          src={projectSix}
          git='https://github.com/collins-isiwu/Commerce'
          href='https://f3ture.pythonanywhere.com/'
        />
        <ProjectsCard
          title="Network"
          des="A Twitter-like social network website for making posts and following users."
          src={projectEight}
          git='https://github.com/collins-isiwu/Network'
        />
      </div>
    </section>
  );
}

export default Projects