import React from 'react'
import { assets } from "../assets/assets/frontend_assets/assets";
const Hero = () => {
  return (
    <div className="flex flex-col md:flex-row border border-gray-200 rounded-2xl overflow-hidden bg-[#FBFBFF] w-[80%] mx-auto mt-10">
  
    {/* Left Side: Text Content */}
    <div className="w-full md:w-1/2 flex items-center justify-center py-10 md:py-0">
      <div className="text-[#414141] max-w-md px-6">
        
        {/* Bestseller Label */}
        <div className="flex items-center gap-2">
          <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
          <p className="font-medium text-sm md:text-base tracking-widest uppercase">
            Our Bestsellers
          </p>
        </div>
  
        {/* Main Heading */}
        <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed font-black tracking-tight text-gray-900 prata">
          NEW <span className="text-indigo-600">ARRIVAL</span>
        </h1>
  
        {/* Shop Now CTA */}
        <div className="flex items-center gap-2 group cursor-pointer w-fit mt-4">
          <p className="font-semibold text-sm md:text-base group-hover:text-indigo-600 transition-colors">
            SHOP NOW
          </p>
          <p className="w-8 md:w-11 h-[1px] bg-[#414141] group-hover:bg-indigo-600 group-hover:w-16 transition-all duration-300"></p>
        </div>
        
      </div>
    </div>
  
    {/* Right Side: Image Content */}
    <div className="w-full md:w-1/2 relative group overflow-hidden">
      <img 
        src={assets.hero_img} 
        alt="Hero" 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
      />
      {/* Subtle Overlay for Depth */}
      <div className="absolute inset-0 bg-black/5 pointer-events-none"></div>
    </div>
  
  </div>
  )
}

export default Hero