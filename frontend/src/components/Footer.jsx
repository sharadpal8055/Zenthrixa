import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white pt-20 pb-10 px-4 md:px-[10%] border-t border-gray-100">
    <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 text-sm">
      
      {/* Brand & Description Section */}
      <div className="max-w-md">
        <h1 className="text-2xl font-black text-gray-900 tracking-tighter mb-5">
          ZENTHRIXA<span className="text-indigo-600">.</span>
        </h1>
        <p className="w-full md:w-4/5 text-gray-500 leading-relaxed font-light">
          Redefining the technical standard. Zenthrixa is dedicated to providing high-performance gear 
          engineered for the modern digital lifestyle. Innovation meets daily essential.
        </p>
      </div>
  
      {/* Navigation Links */}
      <div>
        <h3 className="text-gray-900 font-bold text-sm mb-5 uppercase tracking-widest">
          Company
        </h3>
        <ul className="flex flex-col gap-3 text-gray-500 font-light">
          <li className="hover:text-indigo-600 transition-colors cursor-pointer">Home</li>
          <li className="hover:text-indigo-600 transition-colors cursor-pointer">About Us</li>
          <li className="hover:text-indigo-600 transition-colors cursor-pointer">Delivery</li>
          <li className="hover:text-indigo-600 transition-colors cursor-pointer">Privacy Policy</li>
        </ul>
      </div>
  
      {/* Contact & Socials */}
      <div>
        <h3 className="text-gray-900 font-bold text-sm mb-5 uppercase tracking-widest">
          Get in touch
        </h3>
        <ul className="flex flex-col gap-3 text-gray-500 font-light">
          <li className="hover:text-gray-800 transition-colors cursor-pointer">+1-000-000-0000</li>
          <li className="hover:text-gray-800 transition-colors cursor-pointer">sharadpal@gmail.com</li>
          <li className="hover:text-indigo-600 transition-colors cursor-pointer font-medium mt-2">Instagram</li>
          <li className="hover:text-indigo-600 transition-colors cursor-pointer font-medium">Facebook</li>
        </ul>
      </div>
  
    </div>
  
    {/* Copyright Divider */}
    <div className="pt-10 border-t border-gray-100">
      <p className="text-center text-xs text-gray-400 font-medium tracking-wide uppercase">
        Copyright 2026 @ Zenthrixa.com - All Rights Reserved.
      </p>
    </div>
  </footer>
  );
};

export default Footer;
