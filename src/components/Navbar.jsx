import React from 'react';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className="text-xl font-bold text-orange-500">Kishita Sharma</h1>
        <ul className="flex space-x-6 font-medium text-gray-700">
          <li><a href="#home" className="hover:text-orange-500">Home</a></li>
          <li><a href="#about" className="hover:text-orange-500">About</a></li>
          <li><a href="#projects" className="hover:text-orange-500">Projects</a></li>
          <li><a href="#contact" className="hover:text-orange-500">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;

