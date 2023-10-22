import { Link } from "react-router-dom";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <h1 className='text-2xl font-extrabold sm:leading-snug font-manrope text-center glassmorphism p-4 text-[#1D2235]'>
        Hey, I'm
        <span className='bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent font-extrabold mx-2'>
          Adrian Hajdin
        </span>
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

        <Link
          to='/about'
          className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center'
        >
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

        <Link
          to='/contact'
          className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center'
        >
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

        <Link
          to='/projects'
          className='text-white bg-gradient-to-r from-[#00c6ff] to-[#0072ff] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-fit sm:w-auto px-5 py-2.5 text-center'
        >
          Check my Projects
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
