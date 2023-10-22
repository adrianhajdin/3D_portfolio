import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/' className='p-2 logo shadow-2xl'>
        <p className='font-poppins font-black blue-gradient_text drop-shadow text-lg tracking-widest'>
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
