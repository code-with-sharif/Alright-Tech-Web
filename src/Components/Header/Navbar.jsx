import { useState } from 'react';

import { NavLink } from 'react-router-dom';
import logo from '../../Images/logo.png'
const Navbar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white  dark:bg-gray-900 fixed top-0 left-0 w-full z-10">
      <div className="max-w-screen-2xl  flex flex-wrap items-center justify-between lg:px-8 mx-auto p-2">
      <NavLink to="/" className="flex items-center space-x-3 rtl:space-x-reverse">
  <div className="">
    <img
      className="w-[161px] h-[70px] flex-shrink-0 "
      src={logo}
      alt=""
    />
  </div>
</NavLink>

        <button
          onClick={toggleMenu}
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600 transition-all duration-500"
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? 'block' : 'hidden'
          } transition-all duration-500`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <NavLink
                to="/home"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A7E1] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleMenu}
              >
                Home
               
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/events"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A7E1] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleMenu}
              >
            Events
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A7E1] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleMenu}
              >
                About Us
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/blog"
                className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A7E1] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleMenu}
              >
             Blog
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/testimonial"
                className="block py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-[#00A7E1] md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                onClick={toggleMenu}
              >
            Testimonial
              </NavLink>
            </li>
          </ul>
          <div> <button className='text-white  px-3 py-1 rounded-md bg-[#00A7E1]  ml-8 md:hidden '>contact</button></div>

        </div>
        <div>
        <button
  className='text-white px-3 py-1 rounded-md md:block hidden custom'
  
>
  Contact
</button>

</div>



      </div>
    </nav>
  );
};

export default Navbar;
