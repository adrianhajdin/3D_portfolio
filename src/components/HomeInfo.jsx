import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='text-xl sm:leading-snug text-center neo-brutalism-blue py-4 px-8 text-white'>
        Hey, I'm
        <span className='font-semibold mx-2 text-white'>Adrian Hajdin</span>
        👋
        <br />
        Software Engineer from Croatia
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='info-box'>
        <p className='font-medium text-xl text-center'>
          Through my journey with various companies, I've gained valuable skills
          and accumulated a growing list of 20+ skills.
        </p>

        <Link to='/about' className='neo-brutalism-white neo-btn'>
          Know more about me
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='info-box'>
        <p className='font-medium text-xl text-center'>
          Let's discuss all tech things, debug dilemmas, and code challenges.
          I'm just a few keystrokes away
        </p>

        <Link to='/contact' className='neo-brutalism-white neo-btn'>
          Say hey there
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='info-box'>
        <p className='font-medium text-center text-xl'>
          Over the years, I've led and championed numerous projects, each one
          adding to my portfolio of impactful contributions.
        </p>

        <Link to='/projects' className='neo-brutalism-white neo-btn'>
          Check my Projects
          <img src={arrow} alt='arrow' className='w-4 h-4 object-contain' />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
