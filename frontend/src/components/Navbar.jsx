import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = 'hidden';
      document.body.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    }
    return () => {
      document.documentElement.style.overflow = '';
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const navLinks = [
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full fixed top-0 z-20 bg-primary/20 backdrop-blur-md">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5">
        <Link
          to="/"
          className="flex item-center gap-2"
          onClick={() => {
            window.scrollTo(0, 0);
          }}
        >
          <div className="w-9 h-9 bg-accent rounded-lg flex items-center justify-center text-white font-bold">A</div>
          <p className="text-secondary text-[18px] font-bold cursor-pointer flex items-center">
            Aayush
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className="text-gray-500 hover:text-accent text-[15px] font-medium cursor-pointer transition-colors duration-300"
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
          <li className="ml-4">
             <a href="#contact" className="bg-accent text-white px-5 py-2 rounded-full font-bold shadow-md hover:bg-accent-light transition-all text-sm">
                Hire Me
             </a>
          </li>
        </ul>

        <button
          type="button"
          className="sm:hidden w-7 h-7 flex items-center justify-center cursor-pointer text-secondary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
        >
          {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className="sm:hidden absolute top-full left-0 right-0 w-full px-4 sm:px-6 lg:px-8 pb-4">
          <div className="max-w-7xl mx-auto p-6 rounded-xl bg-white shadow-xl border border-gray-100">
            <ul className="list-none flex flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-accent"
                  onClick={() => setIsOpen(false)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
