import { Link } from "react-router-dom";
import { logo } from "../../assets/images";

const Navbar = () => {
  return (
    <header className='flex justify-between items-center sm:px-16 px-8 py-4 max-w-5xl mx-auto'>
      <div className='logo px-3 py-2'>
        <img src={logo} alt='logo' className='w-7 h-8 object-contain' />
      </div>
      <nav className='flex text-lg gap-7 font-manrope font-medium'>
        <Link to='/about'>About</Link>
        <Link to='/projects'>Projects</Link>
      </nav>
    </header>
  );
};

export default Navbar;
