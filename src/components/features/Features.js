import React from 'react'
import { AiFillAppstore } from "react-icons/ai";
import { FaMobile, FaGlobe } from "react-icons/fa";
import { SiProgress, SiAntdesign } from "react-icons/si";
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
          title="Business Stratagy"
          des="Analyze Business needs and convert it to written codes to improve profitability."
          />
        <Card
          title="Web App Development"
          des="Developing aesthetic and technically fast websites for business."
          icon={<AiFillAppstore />}
        />
        <Card
          title="SEO Optimisation"
          des="Search engine optimization to get your website to rank higher on a search engine results page (SERP) so that you receive more traffic."
          icon={<SiProgress />}
        />
        <Card
          title="RESTful API Development"
          des="Run your business Web and Mobile applications with a single RESTful API backend."
          icon={<FaMobile />}
        />
        <Card
          title="UX Design"
          des="Get your customers addicted to your brand with deep understanding of users, what they need, what they value, their abilities, and also their limitations."
          icon={<SiAntdesign />}
        />
        <Card
          title="Hosting Websites"
          des="Dedicated, Cloud or Shared hosting, depending on business needs and financial capability."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features