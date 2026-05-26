import React from 'react'

const Newsletter = () => {
  const onsubmithandler=(event)=>{
event.preventDefault();
  }
  return (
    <div className="text-center py-16 px-4 md:px-[10%] bg-white">
    {/* Header Section */}
    <div className="mb-10">
      <h1 className="text-2xl sm:text-3xl font-black text-gray-900 tracking-tight mb-3">
        Subscribe now & get <span className="text-indigo-600">20% off</span>
      </h1>
      <p className="text-gray-500 text-sm sm:text-base font-light max-w-lg mx-auto leading-relaxed">
        Join the Zenthrix inner circle. Be the first to access limited-edition 
        gear drops and exclusive technical insights.
      </p>
    </div>
  
    {/* Subscription Form */}
    <form 
      onSubmit={(e) => e.preventDefault()} 
      className="w-full max-w-md mx-auto flex items-center border border-gray-200 rounded-lg overflow-hidden focus-within:border-indigo-500 transition-colors shadow-sm"
    >
      <input 
        type="email" 
        placeholder="Enter your email" 
        className="w-full px-4 py-3 text-sm text-gray-700 outline-none placeholder:text-gray-400"
        required
      />
      <button 
        type="submit" 
        className="bg-black text-white text-xs sm:text-sm font-bold uppercase tracking-widest px-6 sm:px-10 py-4 transition-all duration-300 hover:bg-indigo-600 active:bg-indigo-700 whitespace-nowrap"
  onSubmit={onsubmithandler} >
        Subscribe
      </button>
    </form>
  
    {/* Trust Badge (Optional but Professional) */}
    <p className="mt-4 text-[10px] text-gray-400 uppercase tracking-[0.2em]">
      No spam. Just pure performance.
    </p>
  </div>
  )
}

export default Newsletter