import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Title from './Title';
import Productitem from './Productitem';

const Latestcollections = () => {
  const {products}=useContext(ShopContext)

  const [latestproduct,setlatestproduct]=useState([]);
  useEffect(()=>{if (products && products.length > 0) {
    setlatestproduct(products.slice(0, 10));
  }
  },[])
  return (<>
 <div className="my-10 px-[10%] text-center">
  {/* The Title Section */}
  <div className="inline-flex items-center gap-3 mb-4">
    {/* Modern Typography Component Wrapper */}
    <div className="flex items-center gap-2">
       <Title text1={"LATEST"} text2={"COLLECTIONS"} />
       {/* Accenting Line - The Zenthrix Signature */}
       <p className="w-8 md:w-12 h-[2px] bg-gray-700 mt-1"></p>
    </div>
  </div>

  {/* Subtitle / Description */}
  <p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-500 font-light leading-relaxed tracking-wide">
    Discover the future of tech with our curated selection. From high-performance 
    peripherals to sleek lifestyle essentials, each piece is engineered for excellence.
  </p>
</div>
<div className="px-4 md:px-[10%] pb-20">
  {/* Responsive Logic:
    - grid-cols-2: Two cards on mobile (Standard Premium E-comm)
    - sm:grid-cols-3: Three on tablets
    - md:grid-cols-4: Four on small laptops
    - lg:grid-cols-5: Five on standard desktops
    - xl:grid-cols-6: Six on large monitors
  */}
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-x-3 gap-y-10 sm:gap-x-6">
    {
      latestproduct.map((item, index) => (
        <Productitem 
          key={item._id || index} 
          id={item._id} 
          image={item.image} 
          name={item.name} 
          price={item.price} 
        />
      ))
    }
  </div>
</div>
  
  </>

  )
}

export default Latestcollections