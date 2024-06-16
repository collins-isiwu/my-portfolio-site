import React from 'react'
import { TbApi, TbBrowserCheck } from "react-icons/tb";
import { AiFillAppstore } from "react-icons/ai";
import { FaGlobe, FaDev } from "react-icons/fa";
import { SiAntdesign } from "react-icons/si";
import Title from '../layouts/Title';
import Card from './Card';

const Features = () => {
  return (
    <section
      id="features"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <Title title="Features" des="What I Do" />
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-20">
        <Card
          title="Web Development"
          des="Developing aesthetic and technically fast websites for business."
          icon={<FaDev />}
        />
        <Card
          title="API Development"
          des="Run your business Web and Mobile applications within a single RESTful API backend."
          icon={<TbApi />}
        />
        <Card
          title="Software Design"
          des="I create intuitive and scalable systems that enhance user experience and drive robust, long-term business performance."
          icon={<AiFillAppstore />}
          />
        <Card
          title="SEO Optimisation"
          des="Search engine optimization to get your website to rank higher on a search engine results page (SERP) so that you receive more traffic."
          icon={<TbBrowserCheck />}
        />
        <Card
          title="Web Scraping"
          des="Proficient in web scraping using Python, I extract valuable data efficiently to inform decision-making and drive impactful business insights."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting"
          des="Dedicated, Cloud or Shared hosting, depending on business needs and financial capability."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features