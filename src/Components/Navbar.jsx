import React, { useState } from 'react';
import Logo from "../Assets/logo.jpg";
import { Link } from 'react-router-dom';


function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between flex-wrap bg-customColor p-6">
      <div className="flex items-center flex-shrink-0 text-white mr-6">
        <img className="h-[60px] w-[60px] rounded-full mx-4" src={Logo} alt="Logo" />
        <span className="font-montserrat font-semibold  text-3xl tracking-tight">Stocks Social.</span>
      </div>
      <div className="block lg:hidden">
        <button
          className="flex items-center px-3 py-2 border rounded text-blue-200 border-blue-400 hover:text-white hover:border-white"
          onClick={toggleMenu}
        >
          <svg className="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <title>Menu</title>
            {isMenuOpen ? (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M3 4h14a1 1 0 010 2H3a1 1 0 010-2zm0 5h14a1 1 0 010 2H3a1 1 0 010-2zm14 4H3a1 1 0 110-2h14a1 1 0 110 2z"
              />
            ) : (
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M4 6h12v2H4V6zm0 5h12v2H4v-2zm0 5h12v2H4v-2z"
              />
            )}
          </svg>
        </button>
      </div>
      <div
        className={`w-full block flex-grow lg:flex lg:items-center lg:w-auto ${
          isMenuOpen ? 'block' : 'hidden'
        }`}
      >
        <div className="text-2xl lg:flex-grow lg:text-right ">
        <Link to="/homepage" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-indigo-500 hover:text-white mr-6">Home</Link>
  <Link to="/market" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-6 ">Market Hub</Link>
  <Link to="/news" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-6 ">News</Link>
  <Link to="/stockFeed" href="#" target="_blank" rel="noopener noreferrer" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-yellow-500 mr-6 ">Feed</Link>

  <Link to="/services" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-6">Services</Link>
  <Link to="/pricing" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-gray-500 mr-6">Pricing</Link>
  
  <Link to="/faq" href="#" className="block mt-4 lg:inline-block lg:mt-0 text-green-400 hover:text-white  mr-6">FAQ</Link>
 
</div>

      </div>
    </nav>
  );
}

export default Navbar;
