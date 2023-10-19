import { NavLink } from "react-router-dom";
import { logo } from "../../assets/images";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto absolute top-0 bg-transparent z-10 right-0 left-0'>
      <NavLink to='/' className='logo px-3 py-2'>
        <img src={logo} alt='logo' className='w-7 h-8 object-contain' />
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
