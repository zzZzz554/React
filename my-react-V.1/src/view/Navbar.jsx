import React from "react";

function Navbar() {
  return (
    <nav className="fixed w-full bg-white/80 backdrop-blur-md z-10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="text-4xl font-bold text-red-950">Logo</div>
          <div className="space-x-8 ">
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition "
            >
              Home
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              About
            </a>
            <a
              href="#"
              className="text-gray-600 hover:text-blue-600 transition"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
