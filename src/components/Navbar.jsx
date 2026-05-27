import { NavLink } from "react-router-dom";
import { Menu, X, ShoppingCart, Search, User, ChevronDown } from "lucide-react";
import { useContext, useState } from "react";
import logo from "../assets/logo.png";
import { ShopContext } from "../context/ShopContext";
import { Link } from 'react-router-dom';
export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
const { search, setSearch, showSearch, setShowSearch,getcartcount } = useContext(ShopContext);

  const linkClass = ({ isActive }) =>
    `relative px-3 py-2 text-sm font-medium transition-all duration-200
     ${isActive ? "text-indigo-600" : "text-gray-700 hover:text-indigo-600"}
     after:absolute after:left-0 after:bottom-0 after:h-[2px]
     after:bg-indigo-600 after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "after:w-0 hover:after:w-full"}`;

  return (
    <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <NavLink
            to="/"
            className="group flex items-center gap-3 transition-transform duration-200 "
          >
            <div className="relative flex items-center justify-center">
              <div className="absolute inset-0 bg-indigo-500 blur-md opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <img
                src={logo}
                alt="Logo"
                className="relative h-9 w-9 object-contain drop-shadow-sm group-hover:rotate-3 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-2xl font-black tracking-tight text-gray-900 group-hover:text-indigo-600 transition-colors">
                ZEN<span className="text-indigo-600">THRIXA</span>
              </span>
              <span className="text-[10px] font-bold tracking-[0.2em] text-gray-400 uppercase mt-0.5">
                Premium Touch
              </span>
            </div>
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6">
            <NavLink to="/" className={linkClass}>
              Home
            </NavLink>
            <NavLink to="/collections" className={linkClass}>
              Collection
            </NavLink>
            <NavLink to="/about" className={linkClass}>
              About
            </NavLink>
            <NavLink to="/contact" className={linkClass}>
              Contact
            </NavLink>

            <div className="flex items-center gap-4 ml-4 border-l pl-6">
              <Search
                size={20}
                className="text-gray-600 cursor-pointer hover:text-indigo-600 transition"
                onClick={()=>setShowSearch(true)}
              />

              {/* Cart */}
              <NavLink
                to="/cart"
                className="relative flex items-center p-2 text-gray-700 hover:text-indigo-600 transition"
              >
                <ShoppingCart size={22} />
                <span className="absolute top-0 right-0 flex items-center justify-center h-5 w-5 text-[10px] font-bold text-white bg-indigo-600 rounded-full border-2 border-white translate-x-1/2 -translate-y-1/2">
                  {getcartcount()}
                </span>
              </NavLink>

              {/* User Dropdown */}
              <div className="relative group py-2">
                <div className="flex items-center gap-1 cursor-pointer">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-indigo-50 text-indigo-600 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-300">
                    <User size={18} strokeWidth={2.5} />
                  </div>
                  <ChevronDown
                    size={14}
                    className="text-gray-400 group-hover:rotate-180 transition-transform"
                  />
                </div>

                {/* Dropdown Menu */}
                <div className="absolute right-0 w-48 py-2 mt-2 bg-white border rounded-xl shadow-xl invisible opacity-0 translate-y-2 transition-all duration-200 group-hover:visible group-hover:opacity-100 group-hover:translate-y-0">
                 <Link to={'/login'} > <p className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer">
                    My Profile
                  </p>
                  </Link>
                  <p className="px-4 py-2 text-sm text-gray-700 hover:bg-indigo-50 hover:text-indigo-600 cursor-pointer">
                    Orders
                  </p>
                  <hr className="my-1 border-gray-100" />
                  <p className="px-4 py-2 text-sm text-red-600 hover:bg-red-50 cursor-pointer font-medium">
                    Logout
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Right Icons & Toggle */}
          <div className="flex md:hidden items-center gap-4">
            <NavLink to="/cart" className="relative p-2 text-gray-700">
              <ShoppingCart size={22} />
              <span className="absolute top-0 right-0 h-4 w-4 bg-indigo-600 text-white text-[8px] flex items-center justify-center rounded-full translate-x-1/2 -translate-y-1/2">
                {getcartcount()}
              </span>
            </NavLink>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 p-1"
            >
              {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden absolute w-full bg-white border-b shadow-lg transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-4 pt-2 pb-6 space-y-2">
          <NavLink
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-lg "
          >
            Home
          </NavLink>
          <NavLink to="/collections" onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-lg ">
              Collection
            </NavLink>
          <NavLink
            to="/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-lg"
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setIsMobileMenuOpen(false)}
            className="block py-3 px-4 text-base font-medium text-gray-700 hover:bg-indigo-50 rounded-lg"
          >
            Contact
          </NavLink>
          <div className="pt-4 border-t border-gray-100 flex flex-col gap-2">
            <button className="flex items-center gap-3 py-3 px-4 text-gray-700">
              <User size={20} /> My Profile
            </button>
            <button className="flex items-center gap-3 py-3 px-4 text-red-600">
              <X size={20} /> Logout
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
