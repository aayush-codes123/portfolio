import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { title: "About", id: "about" },
    { title: "Skills", id: "skills" },
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];

  return (
    <nav className="w-full flex items-center py-5 fixed top-0 z-20 bg-primary/20 backdrop-blur-md">
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <div
            className="w-7 h-7 object-contain cursor-pointer text-secondary"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </div>

          <div className={`${!isOpen ? 'hidden' : 'flex'} p-6 absolute top-20 right-4 my-2 min-w-35 z-10 rounded-xl bg-white shadow-xl border border-gray-100`}>
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className="font-poppins font-medium cursor-pointer text-[16px] text-secondary hover:text-accent"
                  onClick={() => setIsOpen(!isOpen)}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
