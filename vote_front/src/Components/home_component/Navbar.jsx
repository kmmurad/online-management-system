import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-blue-500 shadow-lg">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-2xl font-bold text-white hover:text-gray-200 transition duration-300 flex items-center"
          >
            {/* <img
              src="/logo.png" // Replace with your logo path
              alt="Election System Logo"
              className="w-8 h-8 mr-2"
            /> */}
            SOM-ELECTION
          </Link>

          {/* Hamburger Menu (Mobile) */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-8 h-8" // Larger hamburger icon
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/s"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>

          {/* Navigation Links (Desktop) */}
          <div className="hidden md:flex space-x-10 items-center">
            <Link
              to="/"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="text-lg text-white hover:text-gray-200 transition duration-300"
            >
              Register
            </Link>
          </div>
        </div>

        {/* Navigation Links (Mobile) */}
        {isOpen && (
          <div className="md:hidden bg-blue-600">
            <Link
              to="/"
              className="block text-white py-4 px-6 hover:bg-blue-700 transition duration-300"
            >
              Home
            </Link>
            <Link
              to="/about"
              className="block text-white py-4 px-6 hover:bg-blue-700 transition duration-300"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="block text-white py-4 px-6 hover:bg-blue-700 transition duration-300"
            >
              Contact
            </Link>
            <Link
              to="/login"
              className="block text-white py-4 px-6 hover:bg-blue-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="block text-white py-4 px-6 hover:bg-blue-700 transition duration-300"
            >
              Register
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
