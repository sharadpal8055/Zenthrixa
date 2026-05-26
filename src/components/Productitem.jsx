import React, { useContext } from 'react'
import { ShopContext } from '../context/ShopContext'
import { Link } from 'react-router-dom'
import { Plus } from 'lucide-react'

const Productitem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);

  return (
    <Link
  className="group block bg-white rounded-xl overflow-hidden transition-all duration-500 hover:shadow-[0_15px_35px_rgba(79,70,229,0.1)] border border-gray-100 hover:border-indigo-200 w-full max-w-[220px] mx-auto"
  to={`/product/${id}`}
>
  {/* Image Container: Smaller Aspect Ratio */}
  <div className="relative aspect-square overflow-hidden bg-[#F9F9FB] flex items-center justify-center">
    <img
      className="w-full h-full object-contain p-4 transition-transform duration-1000 ease-out group-hover:scale-110"
      src={image?.[0] || ""}
      alt={name}
    />

    {/* Subtle Overlay */}
    <div className="absolute inset-0 bg-indigo-900/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

    {/* Compact Floating Action Badge */}
    <div className="absolute bottom-2 right-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
      <div className="bg-indigo-600 text-white p-1.5 rounded-lg shadow-lg">
        <Plus size={16} strokeWidth={3} />
      </div>
    </div>
  </div>

  {/* Product Details: Compact Padding */}
  <div className="p-3">
    <p className="text-[8px] text-indigo-500 font-black tracking-widest uppercase mb-1">
      Zenthrix
    </p>

    <h3 className="text-[13px] font-bold text-gray-800 truncate group-hover:text-indigo-600 transition-colors">
      {name}
    </h3>

    <div className="flex items-center gap-1 mt-1.5">
      <span className="text-[10px] font-bold text-gray-400">{currency}</span>
      <span className="text-sm font-black text-gray-900">{price}</span>
    </div>
  </div>
</Link>
  )
}

export default Productitem;