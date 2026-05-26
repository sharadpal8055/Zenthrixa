import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import { ChevronRight } from 'lucide-react';
import Title from '../components/Title';
import Productitem from '../components/Productitem'

const Collections = () => {
  const { products } = useContext(ShopContext);
  const [showFilter, setShowFilter] = useState(false);
  const [category, setcategory] = useState([]);
  const [subcategory, setsubcategory] = useState([]);
  const [filterdproduct, setfilterdproduct] = useState([])
  const [sortType, setsortType] = useState('relevant');

const{search,showSearch}=useContext(ShopContext);

  const togglecategory = (e) => {
    if (category.includes(e.target.value)) {
      setcategory((prev) => prev.filter((item) => item != e.target.value));
    }
    else {
      setcategory(prev => [...prev, e.target.value])
    }
  }
  const togglesubcategory = (e) => {
    if (subcategory.includes(e.target.value)) {
      setsubcategory((prev) => prev.filter((item) => item != e.target.value));
    }
    else {
      setsubcategory(prev => [...prev, e.target.value])
    }
  }
  const applyfilter = () => {
    let productscopy = products.slice();
    if(search&&showSearch){
      productscopy=productscopy.filter((item)=>item.name.toLowerCase().includes(search.toLowerCase()))
    }
    if (category.length > 0) {
      productscopy = productscopy.filter((item) => category.includes(item.category));
    }
    if (subcategory.length > 0) {
      productscopy = productscopy.filter((item) => subcategory.includes(item.subCategory));
    }
    setfilterdproduct(productscopy);
  }
  console.log(filterdproduct)

  useEffect(() => {
    applyfilter()
  }, [category, subcategory,search,showSearch])
 
  const applysorting = () => {
     let fpcopy = filterdproduct.slice();
    switch (sortType) {

      case 'low-high':
        setfilterdproduct(fpcopy.sort((a, b) => a.price - b.price));
        break;


      case 'high-low':
        setfilterdproduct(fpcopy.sort((a, b) => b.price - a.price));
        break;
      default:
        applyfilter();
        break;
    }
  }

useEffect(() => {
  applysorting();
}, [sortType])

return (
  /* MAIN WRAPPER: This is the magic part that puts the sidebar on the left */
  <div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t px-4 md:px-[8%]">

    {/* LEFT SIDE: FILTER SIDEBAR */}
    <div className="w-full sm:w-64 min-w-[210px]">
      {/* Clickable Header for Mobile */}
      <div
        onClick={() => setShowFilter(!showFilter)}
        className="my-5 text-xl flex items-center cursor-pointer gap-2 font-black tracking-[0.2em] uppercase text-gray-900 group"
      >
        FILTERS
        <ChevronRight
          className={`h-5 sm:hidden transition-transform duration-300 ${showFilter ? 'rotate-90' : ''}`}
        />
      </div>

      {/* Filter Container */}
      <div className={`${showFilter ? '' : 'hidden'} sm:block transition-all duration-500`}>

        {/* Categories Section */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm mt-6 hover:border-indigo-100 transition-colors">
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-5 flex items-center justify-between">
            Categories
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          </h2>
          <div className="flex flex-col gap-3">
            {['Men', 'Women', 'Kids'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-indigo-600 rounded border-gray-300 cursor-pointer"
                  value={item}
                  onChange={togglecategory}
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-indigo-600 transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Type Section */}
        <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm mt-6 hover:border-indigo-100 transition-colors">
          <h2 className="text-[10px] font-black text-gray-400 uppercase tracking-[0.15em] mb-5 flex items-center justify-between">
            Collection Type
            <span className="w-1.5 h-1.5 bg-indigo-500 rounded-full"></span>
          </h2>
          <div className="flex flex-col gap-3">
            {['Topwear', 'Bottomwear', 'Winterwear'].map((item) => (
              <label key={item} className="flex items-center gap-3 cursor-pointer group">
                <input
                  type="checkbox"
                  className="w-4 h-4 accent-indigo-600 rounded border-gray-300 cursor-pointer"
                  value={item}
                  onChange={togglesubcategory}
                />
                <span className="text-sm font-medium text-gray-600 group-hover:text-indigo-600 transition-colors">
                  {item}
                </span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </div>

    {/* RIGHT SIDE: PRODUCT DISPLAY AREA */}
    <div className="flex-1">

      {/* Header & Sort Utility */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8">
        <div className="flex items-center gap-2">
          <Title text1={'ALL'} text2={'COLLECTIONS'} />
          <span className="hidden md:inline-block text-[10px] font-bold text-gray-400 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-tighter">
            {products.length} Products
          </span>
        </div>

        {/* Product Sort Dropdown */}
        <div className="relative group self-end md:self-auto">
          <select className="appearance-none border-2 border-gray-100 text-gray-600 text-xs sm:text-sm font-medium px-4 py-2.5 pr-10 rounded-xl outline-none focus:border-indigo-500 transition-all cursor-pointer bg-white shadow-sm" onChange={(e)=>setsortType(e.target.value)}>
            <option value="relevant">Sort by: Relevant</option>
            <option value="low-high">Sort by: Price: Low to High</option>
            <option value="high-low">Sort by: Price: High to Low</option>
          </select>
          <div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400 group-hover:text-indigo-600">
            <ChevronRight className="rotate-90 h-4 w-4" />
          </div>
        </div>
      </div>

      {/* The Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-10 transition-all duration-500">
        {
          filterdproduct.map((item, index) => (
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

      {/* Empty State */}
      {products.length === 0 && (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="bg-gray-50 p-6 rounded-full mb-4">
            <svg className="w-12 h-12 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <p className="text-gray-500 font-light text-lg">No products match your current filters.</p>
          <button className="mt-4 text-indigo-600 font-bold uppercase tracking-widest text-xs hover:underline">Clear all filters</button>
        </div>
      )}
    </div>
  </div>
)
}

export default Collections;