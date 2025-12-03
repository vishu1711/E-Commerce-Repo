import React from "react";

const Header = () => {
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-6">
          <div className="text-lg font-semibold">Stockwins</div>
          <nav className="hidden md:flex gap-4 text-sm text-gray-600">
            <a href="#" className="hover:text-indigo-600">Home</a>
            <a href="#" className="hover:text-indigo-600">Services</a>
            <a href="#" className="hover:text-indigo-600">Combo Package</a>
            <a href="#" className="hover:text-indigo-600">Contact</a>
          </nav>
        </div>
        <div className="flex items-center gap-4 text-sm">
          <div className="hidden md:block text-gray-500">+91 9769943457</div>
          <a href="#" className="bg-indigo-600 text-white px-3 py-2 rounded-md text-sm">Subscribe</a>
        </div>
      </div>
    </header>
  );
};

export default Header;
