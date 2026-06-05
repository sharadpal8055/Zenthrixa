import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "../assets/admin_assets/assets";

const Sidebar = () => {
  return (
    <div className="w-64 min-h-screen bg-white border-r border-gray-200 shadow-sm py-6">

      <NavLink
        to="/add"
        className={({ isActive }) =>
          `sidebar-link flex items-center gap-3 mx-3 px-4 py-3 rounded-xl transition-all duration-300
          ${
            isActive ? "active" : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          }`
        }
      >
        <img src={assets.add_icon} alt="" className="w-5 h-5" />
        <p className="font-medium">Add Item</p>
      </NavLink>

      <NavLink
        to="/list"
        className={({ isActive }) =>
          `sidebar-link flex items-center gap-3 mx-3 mt-2 px-4 py-3 rounded-xl transition-all duration-300
          ${
            isActive ? "active" : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          }`
        }
      >
        <img src={assets.parcel_icon} alt="" className="w-5 h-5" />
        <p className="font-medium">List Items</p>
      </NavLink>

      <NavLink
        to="/orders"
        className={({ isActive }) =>
          `sidebar-link flex items-center gap-3 mx-3 mt-2 px-4 py-3 rounded-xl transition-all duration-300
          ${
            isActive ? "active" : "text-gray-600 hover:bg-gray-100 hover:text-indigo-600"
          }`
        }
      >
        <img src={assets.order_icon} alt="" className="w-5 h-5" />
        <p className="font-medium">Orders</p>
      </NavLink>

    </div>
  );
};

export default Sidebar;