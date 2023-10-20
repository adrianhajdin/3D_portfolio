import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { hero } from "../assets/images";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className='max-w-5xl mx-auto sm:p-16 pb-12 !pt-[126px] px-6 min-h-screen'>
      <h1 className='sm:text-5xl text-3xl font-extrabold sm:leading-snug font-manrope'>
        Hello 👋
        <br />
        I'm{" "}
        <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-extrabold drop-shadow'>
          Adrian Hajdin
        </span>
      </h1>

      <div className='mt-10 flex flex-col gap-3 text-slate-500'>
        <p>
          Hi, I am Adrian Hajdin. I am a Software Engineer. I am from Croatia.
        </p>
        <p>
          Front-End Engineer / Creative Developer / Game Developer Seeking to
          take the next step in my career, I am constantly updating my
          expertise, from Web Development to Game Design. Currently, I am
          working as a Front-End Engineer at OMRT. OMRT builds a Deep Tech
          design platform for real estate development.
        </p>
      </div>

      <div class='card my-20' data-color='blue'>
        <img class='card-front-image card-image' src={hero} />
        <div class='card-faders'>
          {Array(7)
            .fill()
            .map((_, index) => (
              <img key={index} class='card-fader card-image' src={hero} />
            ))}
        </div>
      </div>

      <div className='py-20 flex flex-col'>
        <h3 className='font-bold sm:text-3xl text-xl relative'>
          My <span className='fancy-text'>Skills.</span>
        </h3>

        <div className='mt-16 flex flex-wrap gap-12'>
          {skills.map((skill) => (
            <div className='block-container w-20 h-20' key={skill.name}>
              <div className='btn-back rounded-xl' />
              <div className='btn-front rounded-xl flex justify-center items-center'>
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

      <div className='py-20'>
        <h3 className='font-bold sm:text-3xl text-xl relative'>
          Work <span className='fancy-text'> Experience.</span>
        </h3>
        <div className='mt-10 flex flex-col gap-3 text-slate-500'>
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
                key={experience.company_name}
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
                    className='text-gray-950 font-semibold'
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
    </section>
  );
};

export default About;
