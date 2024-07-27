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
          title="VISIT MY PORTFOLIO"
          des="My Projects"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <ProjectsCard
          title="Farmdine"
          des="Farmdine is a B2B marketplace designed for food vendors and restaurants in Nigeria. This backend API, built using Django and Django Rest Framework, integrates seamlessly with the Paystack payment gateway."
          src={projectFour}
          href='https://farmdine-backend.onrender.com/'
          git='https://github.com/InternPulse/farmdine-backend'
        />
        <ProjectsCard
          title="Auction"
          des="An e-commerce site that allows users to create auctions, place bids on listings, comment on those listings, and add listings to a “watchlist.”"
          src={projectSix}
          git='https://github.com/collins-isiwu/Commerce'
          href='https://f3ture.pythonanywhere.com/'
        />
        <ProjectsCard
          title="TrustLend API"
          des="TrustLend offers a robust loan API that empowers users to seamlessly take out and repay loans using the Paystack payment gateway."
          src={projectEight}
          git='https://github.com/collins-isiwu/trustlend'
          href='https://trustlend.onrender.com/'
        />
      </div>
    </section>
  );
}

export default Projects