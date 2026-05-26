import React, { useContext, useEffect, useState } from 'react'
import { ShopContext } from '../context/ShopContext'
import Productitem from './Productitem';
import Title from './Title';

const RelatedProduct = ({category,subcategory}) => {
  const {products}=useContext(ShopContext);
  const productscopy=products.slice();
  const [relatedproduct, setrelatedproduct] = useState([])
  //console.log(productscopy);
useEffect(() => {
  let filteredproductcopy=productscopy;
 if(products.length>0){
  filteredproductcopy= productscopy.filter((item)=>item.category==category&&item.subcategory==subcategory)
 }
 setrelatedproduct(filteredproductcopy.slice(0,5))
}, [products])
//console.log(relatedproduct)
  return (
  <div className="mt-20 px-4 sm:px-8 lg:px-[8%]">

    {/* Section Header */}
    <div className="text-center mb-12">

      <div className="inline-flex items-center gap-3">
        <Title text1={"Related"} text2={"Products"} />

        {/* Accent Line */}
        <div className="w-10 sm:w-14 h-[2px] bg-gray-700 rounded-full" />
      </div>

      <p
        className="mt-4 text-sm sm:text-base text-gray-500
        max-w-2xl mx-auto leading-relaxed"
      >
        Discover premium products carefully selected
        based on your current preferences and style.
      </p>
    </div>

    {/* Products Grid */}
    <div
      className="
      grid
      grid-cols-2
      sm:grid-cols-2
      md:grid-cols-3
      lg:grid-cols-4
      xl:grid-cols-5
      gap-4 sm:gap-6"
    >

      {relatedproduct.map((item, index) => (
        <div
          key={index}
          className="
          group
          bg-white
          rounded-2xl
          overflow-hidden
          border border-gray-100
          shadow-sm
          hover:shadow-2xl
          hover:-translate-y-2
          transition-all duration-300"
        >

          {/* Product Card */}
          <div className="relative overflow-hidden">

            {/* Hover Glow */}
            <div
              className="
              absolute inset-0
              bg-indigo-500/0
              group-hover:bg-indigo-500/5
              transition-all duration-300 z-10"
            />

            <Productitem
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          </div>
        </div>
      ))}
    </div>

    {/* Empty State */}
    {relatedproduct.length === 0 && (
      <div
        className="
        flex flex-col items-center justify-center
        py-20 text-center"
      >

        <div
          className="
          w-20 h-20 rounded-full
          bg-gray-100
          flex items-center justify-center
          mb-5"
        >
          <span className="text-3xl">🛍️</span>
        </div>

        <h3 className="text-2xl font-semibold text-gray-700">
          No Related Products Found
        </h3>

        <p className="text-gray-500 mt-2 max-w-md">
          We couldn’t find matching products right now.
          Try exploring other collections.
        </p>
      </div>
    )}
  </div>
)
}

export default RelatedProduct