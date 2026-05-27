import React from 'react'
import { ShieldCheck, ArrowRightLeft, Headset } from 'lucide-react';

const Policy = () => {
  return (

    <div className="py-20 px-4 md:px-[10%]">
      {/* Grid Container: 1 column on mobile, 3 on tablets/desktop */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-12 sm:gap-8 text-center">
        
        {/* Policy 1: Exchange */}
        <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:bg-gray-50 rounded-2xl">
          <div className="bg-indigo-50 p-4 rounded-2xl mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
            <ArrowRightLeft size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-tight">
            Easy Exchange Policy
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[250px]">
            Technical misfit? No problem. We offer a seamless, automated exchange process for all Zenthrix gear.
          </p>
        </div>

        {/* Policy 2: Return */}
        <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:bg-gray-50 rounded-2xl">
          <div className="bg-indigo-50 p-4 rounded-2xl mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
            <ShieldCheck size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-tight">
            7 Days Return Policy
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[250px]">
            Engineered for satisfaction. If it's not perfect, our 7-day money-back guarantee has you covered.
          </p>
        </div>

        {/* Policy 3: Support */}
        <div className="group flex flex-col items-center p-6 transition-all duration-300 hover:bg-gray-50 rounded-2xl">
          <div className="bg-indigo-50 p-4 rounded-2xl mb-5 group-hover:bg-indigo-600 group-hover:text-white transition-colors duration-500">
            <Headset size={32} strokeWidth={1.5} />
          </div>
          <h3 className="text-lg font-bold text-gray-800 mb-2 tracking-tight">
            Best Customer Support
          </h3>
          <p className="text-gray-500 text-sm font-light leading-relaxed max-w-[250px]">
            Expert assistance, 24/7. Our specialized tech team is always on standby to keep you powered up.
          </p>
        </div>

      </div>
    </div>
  );
};



export default Policy