import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='text-2xl sm:leading-snug font-manrope text-center neo-brutalism py-4 px-8 text-white'>
        Hey, I'm
        <span className='font-semibold mx-2 text-white'>Adrian Hajdin</span>
        👋
        <br />
        Software Engineer from Croatia
      </h1>
    );

  if (currentStage === 2) {
    return (
      <div className='flex flex-col gap-3 max-w-xl'>
        <p className='font-medium text-xl text-center'>
          Through my journey with various companies, I've gained valuable skills
          and accumulated a growing list of 20+ skills.
        </p>

        <Link to='/about' className='btn'>
          Know more about me
        </Link>
      </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className='flex flex-col gap-3 max-w-xl'>
        <p className='font-medium text-xl text-center glassmorphism p-4'>
          Anything in mind for me? <br /> Feel free to reach out
        </p>

        <Link to='/contact' className='btn'>
          Contact
        </Link>
      </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className='flex flex-col gap-3 max-w-xl'>
        <p className='font-medium text-xl text-center'>
          Over the years, I've led and championed numerous projects, each one
          adding to my portfolio of impactful contributions.
        </p>

        <Link to='/projects' className='btn'>
          Check my Projects
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
