import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed w-full text-white bg-gradient-to-r from-purple-500 to-blue-500  transparent shadow-md ">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-white">Portfolio</h1>
        <ul className="flex gap-6 font-medium text-white">
          <li><a href="#home" className="hover:text-blue-200">Home</a></li>
          <li><a href="#about" className="hover:text-blue-200">About</a></li>
          <li><a href="#projects" className="hover:text-blue-200">Projects</a></li>
          <li><a href="#contact" className="hover:text-blue-200">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
