import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Import the icons from Heroicons, a Tailwind CSS project
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <nav className="bg-blue-600 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo or App Name */}
          <div className="flex items-center space-x-4">
            <Link
              to="/players"
              className="text-white text-xl font-bold hover:text-blue-300 transition duration-200"
            >
              League Legends
            </Link>
          </div>

          {/* Hamburger Icon */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-white focus:outline-none md:hidden"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-6 w-6" />
              ) : (
                <Bars3Icon className="h-6 w-6" />
              )}
            </button>
            <div
              className={`fixed inset-0 bg-blue-600 bg-opacity-95 z-50 transform ${
                isMenuOpen ? "translate-x-0" : "-translate-x-full"
              } transition-transform duration-300 ease-in-out md:hidden`}
            >
              <div className="flex justify-end p-4 pb-0">
                <button
                  onClick={() => setIsMenuOpen(!isMenuOpen)}
                  className="p-2 rounded-full text-white hover:bg-blue-700 transition-colors duration-200"
                >
                  <XMarkIcon className="h-6 w-6" />
                </button>
              </div>

              <div className="text-white p-5 pt-0">
                <div className="flex items-center space-x-4">
                  <Link
                    onClick={() => setIsMenuOpen(false)}
                    to="/players"
                    className="text-white text-xl font-bold hover:text-blue-300 transition duration-200 pb-4"
                  >
                    League Legends
                  </Link>
                </div>
                <ul>
                  <li>
                    <Link
                      to="/players"
                      onClick={() => setIsMenuOpen(false)}
                      className="block py-1 text-lg hover:text-blue-300 transition-colors duration-200"
                    >
                      Players
                    </Link>
                  </li>
                  {token ? (
                    <li
                      onClick={() => {
                        handleLogout();
                        setIsMenuOpen(false);
                      }}
                      className="py-1 text-lg cursor-pointer hover:text-blue-300 transition-colors duration-200"
                    >
                      Logout
                    </li>
                  ) : (
                    <li>
                      <Link
                        to="/login"
                        onClick={() => setIsMenuOpen(false)}
                        className="block py-2 text-lg hover:text-blue-300 transition-colors duration-200"
                      >
                        Login
                      </Link>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/players"
              className="py-2 px-3 hover:bg-blue-700 rounded transition duration-200"
            >
              Players
            </Link>
            {token ? (
              <button
                onClick={handleLogout}
                className="py-2 px-3 hover:bg-blue-700 rounded transition duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="py-2 px-3 hover:bg-blue-700 rounded transition duration-200"
              >
                Login
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
