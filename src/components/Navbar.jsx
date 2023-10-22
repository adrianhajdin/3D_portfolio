import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
      <NavLink to='/' className='p-2 logo shadow-2xl'>
        <p className='font-poppins font-black bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent drop-shadow text-lg tracking-widest'>
          AH
        </p>
      </NavLink>
      <nav className='flex text-lg gap-7 font-manrope font-medium'>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-black"
          }
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600 font-bold" : "text-black"
          }
          to='/projects'
        >
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
