import React from 'react'
import { TbApi, TbBrandWhatsapp} from "react-icons/tb";
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
          title="WhatsApp Bot"
          des="Automated WhatsApp bot development to deliver real-time customer interactions."
          icon={<TbBrandWhatsapp />}
        />
        <Card
          title="System Design"
          des="I create intuitive and scalable systems that enhance user experience and drive robust, long-term business performance."
          icon={<AiFillAppstore />}
          />
        <Card
          title="AI Integration"
          des="Building AI products using chains and agents, and integrating AI into various projects."
          icon={<SiAntdesign />}
        />
        <Card
          title="Cloud Services"
          des="Cloud services deployment and management using AWS, optimizing infrastructure for scalability, security, and performance."
          icon={<FaGlobe />}
        />
      </div>
    </section>
  );
}

export default Features