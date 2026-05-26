import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Search, X } from 'lucide-react';
import { useLocation } from 'react-router-dom';

const Searchbar = () => {
  // 1. Ensure these names MATCH exactly what you have in ShopContext.jsx
  const { search, setSearch, showSearch, setShowSearch } = useContext(ShopContext);
  const [visible, setvisible] = useState(false)

const location=useLocation();
useEffect(() => {
 if(location.pathname.includes('collection')){
  setvisible(true);
 }
 else setvisible(false);
}, [location])

  // 2. Using the correct camelCase variable for the conditional return
  return showSearch &&visible ? (
    <div className="border-t border-b bg-gray-50/50 text-center">
      <div className="inline-flex items-center justify-center border border-gray-300 px-5 py-2 my-5 mx-3 rounded-full w-3/4 sm:w-1/2 bg-white shadow-sm focus-within:border-indigo-600 transition-all">
        
        <input 
          value={search}
          // 3. FIX: Changed 'setSearch' to 'setSearch' (match destructuring)
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 outline-none bg-inherit text-sm text-gray-700 placeholder:text-gray-400" 
          type="text" 
          placeholder="Search for gear..." 
        />
        
        <Search className="w-4 text-gray-400" />
      </div>

      {/* 4. FIX: Changed 'setShowSearch' to 'setShowSearch' */}
      <X 
        onClick={() => setShowSearch(false)}
        className="inline w-4 cursor-pointer text-gray-500 hover:text-red-500 ml-3 transition-colors" 
      />
    </div>
  ) : null
}

export default Searchbar