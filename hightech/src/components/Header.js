import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      const menu = document.getElementById('mobile-menu');
      const toggleButton = document.getElementById('toggle-button');

      if (
        menu && !menu.contains(event.target) && 
        toggleButton && !toggleButton.contains(event.target) && 
        isOpen
      ) {
        closeMenu();
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen]);

  return (
    <header className="bg-white text-blue-600 p-4 shadow-md sticky top-0 z-50">
      <nav className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">
          HighTECH
        </Link>
        <button 
          id="toggle-button"
          className="md:hidden text-blue-600" 
          aria-label="Toggle navigation" 
          onClick={toggleMenu}
        >
          {isOpen ? (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          )}
        </button>

        <div 
          id="mobile-menu" 
          className={`fixed inset-y-0 left-0 bg-gray-100 bg-opacity-90 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} w-3/5 md:w-1/4 md:static md:bg-transparent md:opacity-100 md:flex md:flex-row md:space-x-6`}
        >
          <ul className={`flex flex-col items-center md:flex-row md:space-x-6 text-blue-400`}>
            <li className="p-4"><Link to="/" className="hover:underline" onClick={closeMenu}>Home</Link></li>
            <li className="p-4"><Link to="/about" className="hover:underline" onClick={closeMenu}>AboutUs</Link></li>
            <li className="p-4"><Link to="/courses" className="hover:underline" onClick={closeMenu}>Courses</Link></li>
            <li className="p-4"><Link to="/contact" className="hover:underline" onClick={closeMenu}>Contact</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;
