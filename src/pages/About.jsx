import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { hero } from "../assets/images";
import { experiences, skills, socialLinks } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 py-12 px-8 min-h-screen'>
      <h1 className='text-5xl font-extrabold leading-snug font-manrope'>
        Hello 👋
        <br />
        I'm{" "}
        <span className='bg-gradient-to-r from-orange-400 via-red-500 to-purple-600 bg-clip-text text-transparent font-bold drop-shadow font-poppins'>
          Emilian Kasemi
        </span>
      </h1>

      <div className='mt-10 flex flex-col gap-3 font-sans text-slate-500'>
        <p>
          Hi, I am Emilian Kasemi. I am a Software Engineer. I am from Albania.
        </p>
        <p>
          Front-End Engineer / Creative Developer / Game Developer Seeking to
          take the next step in my career, I am constantly updating my
          expertise, from Web Development to Game Design. Currently, I am
          working as a Front-End Engineer at OMRT. OMRT builds a Deep Tech
          design platform for real estate development.
        </p>
      </div>

      <div className='mt-10 w-full h-auto rounded-xl'>
        <img src={hero} alt='hero' className='object-cover rounded-xl' />
      </div>

      <div className='mt-20 flex flex-col'>
        <h3 className='font-bold text-3xl relative font-poppins'>
          My <span className='fancy-text'>Skills.</span>
        </h3>

        <div className='mt-12 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div class='block-container' key={skill.name}>
              <div class='btn-back' />
              <div className='btn-front flex justify-center items-center'>
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className='w-1/2 h-1/2 object-contain'
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-20'>
        <h3 className='font-bold text-3xl relative font-poppins'>
          Work <span className='fancy-text'> Experience.</span>
        </h3>
        <div className='mt-10 flex flex-col gap-3 font-sans text-slate-500'>
          <p>
            Throughout my career, I've had the privilege to work with a diverse
            range of companies and organizations, contributing my skills and
            expertise to various projects. Each experience has added depth to my
            understanding of the industry, honed my abilities, and allowed me to
            collaborate with talented individuals. Here's a snapshot of my
            journey:
          </p>

          <p>
            Each experience has added depth to my understanding of the industry,
            honed my abilities, and allowed me to collaborate with talented
            individuals.
          </p>

          <p>Here's a snapshot of my journey:</p>
        </div>

        <div className='mt-12 flex'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className='flex justify-center items-center w-full h-full'>
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className='w-[60%] h-[60%] object-contain'
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className='text-white text-[24px] font-bold'>
                    {experience.title}
                  </h3>
                  <p
                    className='font-poppins text-gray-950 font-semibold'
                    style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className='my-5 list-disc ml-5 space-y-2'>
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className='text-slate-600 font-manrope font-thin pl-1 tracking-wider'
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <div className='mt-20 flex flex-wrap gap-7 items-center pt-4 border-t border-slate-200  justify-between'>
        <p>
          © 2023 <strong>Emilian Kasemi</strong>. All rights reserved.
        </p>
        <div className='flex gap-3 justify-center items-center'>
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.link}
              target='_blank'
              rel='noopener noreferrer'
            >
              <img
                src={link.iconUrl}
                alt={link.name}
                className='w-6 h-6 object-contain'
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
