import React, { useContext, useEffect } from 'react'
import Title from './Title'
import { ShopContext } from '../context/ShopContext'
import { useState } from 'react';
import Productitem from './Productitem';

const Bestseller = () => {
  const {products}=useContext(ShopContext);
  const[bestseller,setbestseller]= useState([])
  useEffect(()=>{
const bestproduct=products.filter((item)=>item.bestseller)
setbestseller(bestproduct.slice(0,5))
  },[products])
  console.log("bestseller",bestseller)
  return (
    <div className="my-10 px-4 md:px-[10%] text-center">
  {/* Header Section: Title and Curated Subtitle */}
  <div className="py-10">
    <div className="inline-flex items-center gap-3 mb-4">
      <Title text1={"BEST"} text2={"SELLERS"} />
      {/* Decorative Line (Zenthrix Signature) */}
      <p className="w-8 md:w-12 h-[2px] bg-gray-700 mt-1"></p>
    </div>

    <p className="w-full md:w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 font-light leading-relaxed tracking-wide italic">
      "Engineering excellence in every detail. Discover the high-performance 
      essentials that defined the Zenthrix standard this season."
    </p>
  </div>

  {/* Responsive Product Grid: 
      2 columns on tiny phones, 
      3 on tablets, 
      5 on desktops 
  */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-10 mt-6">
    {
      bestseller.map((item, index) => (
        <Productitem 
          key={item._id || index} 
          id={item._id} 
          name={item.name} 
          image={item.image} 
          price={item.price} 
        />
      ))
    }
  </div>
</div>
  )
}

export default Bestseller