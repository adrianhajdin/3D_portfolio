import { NavLink } from "react-router-dom";

import { logo } from "../assets/images";

const Navbar = () => {
  return (
    <header className='header'>
      <NavLink to='/'>
        <img src={logo} alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
          }
          to='/about'
        >
          About
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? "text-blue-600" : "text-black"
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
