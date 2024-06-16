import React from 'react'
import Title from '../layouts/Title'
import { certcs50w, certcs50x, certedxcs50x } from "../../assets/index";
import CertificationsCard from './CertificationsCard';

const Certifications = () => {
  return (
    <section
      id="projects"
      className="w-full py-20 border-b-[1px] border-b-black"
    >
      <div className="flex justify-center items-center text-center">
        <Title
          title="Professional Certifications"
          des="My Certifications"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-14">
        <CertificationsCard
          title="harvard online cs50w"
          src={certcs50w}
          href='https://cs50.harvard.edu/certificates/28995719-fa02-468a-a613-ff89b821c654'
        />
        <CertificationsCard
          title="edx cs50x "
          src={certedxcs50x}
          href='https://courses.edx.org/certificates/f957ced3d52246bea470b50bfa8fceeb'
        />
        <CertificationsCard
          title="Harvard online cs50x"
          src={certcs50x}
          href='https://cs50.harvard.edu/certificates/c655af24-008d-49a7-bdc0-e57963b07c72'
        />
      </div>
    </section>
  );
}

export default Certifications