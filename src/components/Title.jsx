import React from 'react'

const Title = ({text1,text2}) => {
  return (<div className="inline-flex items-center gap-3 mb-4 transition-all duration-500">
    {/* Title Text: Light text1 followed by Bold text2 */}
    <h2 className="text-gray-500 font-light text-xl sm:text-2xl md:text-3xl tracking-wide uppercase">
      {text1} 
      <span className="text-gray-800 font-bold ml-2">
        {text2}
      </span>
    </h2>

    {/* The Accent Line: Modern replacement for underscores */}
    <div className="flex items-center gap-1 mt-1">
      <span className="w-8 md:w-12 h-[2px] bg-gray-700 rounded-full"></span>
      {/* Optional: Small tech-dot for extra detail */}
      <span className="w-1.5 h-1.5 bg-indigo-600 rounded-full hidden sm:block"></span>
    </div>
  </div>
  )
}

export default Title