import React from "react";
import logo from "../assets/adminlogo1.png";

const Navbar = () => {
  return (
    <nav className="w-full bg-white border-b border-gray-200 shadow-sm">
      <div className="h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">

        {/* Left Section */}
        <div className="flex items-center gap-2 sm:gap-4 min-w-0">
          <img
            src={logo}
            alt="Zenthrixa Logo"
            className="h-8 sm:h-10 lg:h-11 w-auto object-contain flex-shrink-0"
          />

          <div className="min-w-0">
            <h1 className="text-lg sm:text-xl lg:text-2xl font-black tracking-tight text-gray-900 truncate">
              ZENTHRIXA
            </h1>

            <p className="hidden sm:block text-[10px] sm:text-xs text-gray-500 uppercase tracking-widest">
              Admin Dashboard
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4 lg:gap-5">

          {/* Admin Badge */}
          <div className="hidden md:flex items-center px-3 py-1.5 bg-indigo-50 border border-indigo-100 rounded-full">
            <span className="text-sm font-semibold text-indigo-600">
              Administrator
            </span>
          </div>

          {/* Logout Button */}
          <button
            className="
              px-3 sm:px-4 lg:px-5
              py-2
              bg-gray-900
              text-white
              text-sm sm:text-base
              rounded-lg
              font-semibold
              transition-all
              duration-300
              hover:bg-red-600
              hover:shadow-lg
              active:scale-95
              whitespace-nowrap
            "
          >
            Logout
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;